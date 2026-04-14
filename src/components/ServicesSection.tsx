const services = [
    {
        title: "Technology Fit Screening",
        description: "Is this aligned with your strategy?",
    },
    {
        title: "Partner & Opportunity Mapping",
        description:
            "Who should you be talking to\u2014and who should you ignore?",
    },
    {
        title: "Pilot Prioritization",
        description: "What is worth testing now vs. later?",
    },
    {
        title: "Risk & Feasibility Assessment",
        description:
            "Where are the real risks before you invest time?",
    },
];

export default function ServicesSection() {
    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            className="py-16 sm:py-20 bg-white"
        >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h2
                    id="services-heading"
                    className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
                >
                    How We Help
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="rounded-lg border border-secondary/20 bg-white p-6 shadow-sm"
                        >
                            <h3 className="text-lg font-semibold text-primary">
                                {service.title}
                            </h3>
                            <p className="mt-2 text-neutral">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
