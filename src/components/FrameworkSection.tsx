const outcomes = [
    {
        icon: "❌",
        label: "Ignore icon",
        title: "Ignore",
        description: "Not worth your time",
    },
    {
        icon: "👀",
        label: "Watch icon",
        title: "Watch",
        description: "Monitor, but don\u2019t engage yet",
    },
    {
        icon: "🧪",
        label: "Pilot icon",
        title: "Pilot",
        description: "Test in a controlled setting",
    },
    {
        icon: "🚀",
        label: "Advance icon",
        title: "Advance",
        description: "Move toward partnership or investment",
    },
];

export default function FrameworkSection() {
    return (
        <section
            id="framework"
            aria-labelledby="framework-heading"
            className="py-16 sm:py-20 bg-background"
        >
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <h2
                    id="framework-heading"
                    className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
                >
                    Our Framework
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {outcomes.map((outcome) => (
                        <div
                            key={outcome.title}
                            className="rounded-lg border border-secondary/20 bg-white p-6 shadow-sm text-center"
                        >
                            <span
                                aria-hidden="true"
                                className="text-4xl"
                            >
                                {outcome.icon}
                            </span>
                            <h3 className="mt-3 text-lg font-semibold text-primary">
                                <span className="sr-only">{outcome.label}: </span>
                                {outcome.title}
                            </h3>
                            <p className="mt-2 text-neutral">
                                {outcome.description}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="mt-10 text-lg leading-relaxed text-neutral text-center">
                    Our framework moves teams from analysis to decision — quickly and with confidence.
                </p>
            </div>
        </section>
    );
}
