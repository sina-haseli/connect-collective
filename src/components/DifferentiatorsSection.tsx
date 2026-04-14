const differentiators = [
    {
        title: "Decision-first, not data-first",
        description:
            "Focus on what you should do, not just what exists.",
    },
    {
        title: "Built for external innovation",
        description:
            "Specialize in evaluating technologies outside your organization.",
    },
    {
        title: "Speed and clarity",
        description:
            "Compress weeks of internal discussion into actionable insight.",
    },
    {
        title: "Commercially grounded",
        description:
            "Every recommendation is tied to real business impact.",
    },
];

export default function DifferentiatorsSection() {
    return (
        <section
            id="differentiators"
            aria-labelledby="differentiators-heading"
            className="py-16 sm:py-20 bg-white"
        >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h2
                    id="differentiators-heading"
                    className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
                >
                    What Makes Us Different
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {differentiators.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-lg border border-secondary/20 bg-white p-6 shadow-sm"
                        >
                            <h3 className="text-lg font-semibold text-primary">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-neutral">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
