export default function OutcomesSection() {
    return (
        <section
            id="outcomes"
            aria-labelledby="outcomes-heading"
            className="py-16 sm:py-20 bg-white"
        >
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <h2
                    id="outcomes-heading"
                    className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
                >
                    Typical Outcomes
                </h2>

                <ul className="mt-6 space-y-3 text-lg text-neutral">
                    <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary" aria-hidden="true">✓</span>
                        Reduce time spent on low-fit opportunities
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary" aria-hidden="true">✓</span>
                        Prioritize high-impact technologies
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary" aria-hidden="true">✓</span>
                        Identify relevant partners faster
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary" aria-hidden="true">✓</span>
                        Support licensing and collaboration decisions
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary" aria-hidden="true">✓</span>
                        Improve internal alignment on innovation strategy
                    </li>
                </ul>
            </div>
        </section>
    );
}
