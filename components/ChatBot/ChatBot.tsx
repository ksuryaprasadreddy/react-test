import React, { useEffect, useRef, useState } from "react";
import { Send, X } from "lucide-react";
import { Button } from "../ui/button";

const CHAT_BOT_ICON = "/images/chatbot-image.webp";

const CHAT_API_URL = "http:something.com/chat"

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
}

export default function ChatBot() {

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatRef = useRef<HTMLDivElement>(null);
    const toggleButtonRef = useRef<HTMLButtonElement>(null);


    const [isOpen, setIsOpen] = useState(false);

    const [messages, setMessages] = useState<Message[]>([
        { id: "1", text: "Hello! How can I help you today?", sender: "bot" },
    ]);
    const [inputValue, setInputValue] = useState("");

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTo({
                top: messagesEndRef.current.scrollHeight,
                behavior: behavior
            });
        }
    };

    // Scroll to bottom instantly when chat opens
    useEffect(() => {
        if (isOpen) {
            // Small timeout to ensure DOM is rendered
            setTimeout(() => scrollToBottom('auto'), 0);
        }
    }, [isOpen]);

    // Scroll to bottom smoothly when new messages arrive
    useEffect(() => {
        if (isOpen) {
            scrollToBottom('smooth');
        }
    }, [messages, isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                chatRef.current &&
                !chatRef.current.contains(event.target as Node) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);


    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
        };



        setMessages((prev) => [...prev, newMessage]);
        setInputValue("");

        // Simulate bot response
        setTimeout(() => {
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: "Thanks for your message! Our team will get back to you soon.",
                sender: "bot",
            };
            setMessages((prev) => [...prev, botResponse]);
        }, 1000);
    };

    return (


        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {isOpen && (
                <div ref={chatRef} className="w-80 h-96 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
                    {/* Header */}
                    <div className="bg-[#7367F0] p-4 flex justify-between items-center text-white">
                        <h3 className="font-medium">Chat Support</h3>
                        <button
                            type="button"
                            onClick={toggleChat}
                            className="hover:bg-white/20 p-1 rounded transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div ref={messagesEndRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-950">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.sender === "user"
                                        ? "bg-[#7367F0] text-white rounded-br-none"
                                        : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-sm border border-gray-100 dark:border-gray-700 rounded-bl-none"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSend} className="p-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:border-[#7367F0] focus:ring-1 focus:ring-[#7367F0] bg-white dark:bg-gray-950 dark:text-gray-100 dark:placeholder-gray-400"
                        />
                        <Button
                            type="submit"
                            size="icon"
                            className="h-9 w-9 bg-[#7367F0] hover:bg-[#6055d8] text-white"
                        >
                            <Send size={16} />
                        </Button>
                    </form>
                </div>
            )}

            <button
                ref={toggleButtonRef}
                type="button"
                onClick={toggleChat}
                className="hover:scale-110 transition-transform duration-300 cursor-pointer focus:outline-none"
            >
                <img
                    src={CHAT_BOT_ICON}
                    alt="ChatBot"
                    className="w-20 h-auto drop-shadow-xl"
                />
            </button>
        </div>
    );
}