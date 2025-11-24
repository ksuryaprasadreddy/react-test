import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
export default function FlowChart() {
    // single data array to map through
    const items = [
        {
            label: "Product Management",
            description: ` 
                Flexible Rating Engine for Market Agility: This powerful engine supports dynamic
                formats , allowing for rapid product updates and new additions to meet changing
                market needs. It incorporates AI predictive analysis to automatically adjust
                rates , ensuring your pricing strategy remains profitable and risk-aware .`,

            footerButtons: [],
        },
        {
            label: "Policy Management",
            description: `End-to-End Online Administration system: Efficiently onboard all partners ( Agents,
                Dealers, Lenders), set up products, and enable them for sales immediately. Compliance is
                guaranteed via an AI agent that rigorously applies contract, claim, and cancellation rules
                throughout the contract lifecycle. Advanced capabilities cover contract adjustments,
                processing payments, and dynamic reporting.`,
            footerButtons: [],
        },
        {
            label: "Claims Management",

            description: `AI- Powered Efficiency: Designed to transform and accelerate your claims processing,
                making it faster, more accurate, and cost-effective. Dedicated service designed to
                ALTAI integrate seamlessly into your operations.
                Integration and Connectivity: Integrated with industry top rated parts providers,
                Inspection companies and for Parts & Labor rates and purchase.`,
            footerButtons: [

            ],
        },
        {
            label: "Cancellations",

            description: "Initiate and process cancellation online. AI based rule engine that ensures applying state specific rules .",
            footerButtons: [],

        },
        {
            label: "Risk Management",
            description: `
                Provides robust tools, driven by AI and data analytics, to proactively manage and
                mitigate your financial risk exposure.

                AI-based predictive analysis adjusts your rating (pricing) in real-time. Mitigate emerging
                risks identified by the system, ensuring the pricing of contracts accurately reflects the
                underlying risk.

                Product:
                Analyzing the performance and claims history of specific service contract offerings.

                Seller:
                Evaluating the risk profile and sales practices of individual selling entities (e.g., dealerships).

                Vendors:
                Assessing the performance and reliability of third-party service and parts providers.

                Claims:
                Deep-diving into claim frequency, severity, and root causes.

                Part Groups and VIN parameters:
                Identifying high-failure components and systems across the fleet. Granular analysis based on
                specific vehicle attributes, including Make, Model, Engine, and other VIN-derived characteristics.
                `,
            footerButtons: [],
        },


        {
            label: "Sales Portal",

            description: "Sales Portal provides a centralized dashboard for real-time visibility into sales, claims, and cancellations. It features a role-based structure allowing for simultaneous multi-product rating and contracting. Financial operations are streamlined via online payment processing through secure gateways like Authorize. net, WEX. Dynamic & advanced reporting with automatic notification on monthly /quarterly/annual statements.",
            footerButtons: [],

        },
    ];

    return (
        <div className="w-full text-center px-6 m-1">
            <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-2.5 py-0.5 bg-[#7367f0]/20 rounded mb-4">
              <span className="text-[#7367f0] text-sm font-medium">
                ALTAI
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2f2b3d]/90 dark:text-white mb-6">
              <span className="relative inline-block overflow-visible">
                Warranty Administration
                <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-r from-[#7367f0] to-[#FF66B5] opacity-30 rounded-md pointer-events-none" style={{ transform: 'skewX(-12deg)' }}></span>
              </span>
              <span className="font-medium"> Platform</span>
            </h2>
            <div className="w-full overflow-x-auto">
                <div className="relative border rounded-xl p-4 min-w-[900px]">

                    {/* Vertical line */}
                    <div className="absolute top-[3%] right-[83%] bottom-[11.3%] border-r border-gray-300"></div>

                    <div className="flex flex-col space-y-16">
                        {items.map((item, index) => (
                            <div key={index} className="relative grid grid-cols-4 items-start">

                                {/* Label */}
                                <div className="col-span-1 flex font-bold items-center pl-1 pt-6">
                                    <span className="text-gray-600">{item.label}</span>
                                </div>

                                {/* Small connector */}
                                <div className="absolute left-[230px] top-[20%] -translate-y-1/2 w-10 border-t border-gray-300"></div>

                                {/* Card */}
                                <div className="col-span-3">
                                    <Card className="shadow-lg border rounded-xl">
                                        <CardHeader>

                                            {item.description && <CardDescription>{item.description}</CardDescription>}
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                                        </CardContent>
                                        {item.footerButtons.length > 0 && (
                                            <CardFooter className="flex gap-3">

                                            </CardFooter>
                                        )}
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
          </motion.div>
        </div>
    );
}
