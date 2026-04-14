const pillars = [
    {
        title: "Structured Decision Frameworks",
        description:
            "Helping teams make clear, repeatable decisions.",
    },
    {
        title: "AI-Enabled Screening",
        description:
            "Using AI to filter and prioritize opportunities at scale.",
    },
    {
        title: "Market & Competitive Insight",
        description:
            "Understanding the landscape before committing.",
    },
    {
        title: "Commercialization & Partnership Strategy",
        description:
            "Turning insights into actionable partnerships.",
    },
];

export default function ApproachSection() {
    return (
        <section
            id="approach"
            aria-labelledby="approach-heading"
            className="py-16 sm:py-20 bg-background"
        >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h2
                    id="approach-heading"
                    className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
                >
                    Our Approach
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {pillars.map((pillar) => (
                        <div
                            key={pillar.title}
                            className="rounded-lg border border-secondary/20 bg-white p-6 shadow-sm"
                        >
                            <h3 className="text-lg font-semibold text-primary">
                                {pillar.title}
                            </h3>
                            <p className="mt-2 text-neutral">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="mt-10 text-lg leading-relaxed text-neutral">
                    We supplement your internal team — we don&apos;t replace it.
                </p>
            </div>
        </section>
    );
}
