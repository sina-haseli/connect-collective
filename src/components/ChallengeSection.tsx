export default function ChallengeSection() {
    return (
        <section
            id="challenge"
            aria-labelledby="challenge-heading"
            className="py-16 sm:py-20 bg-white"
        >
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <h2
                    id="challenge-heading"
                    className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
                >
                    What We Do
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-neutral">
                    Companies today are overwhelmed by:
                </p>

                <ul className="mt-4 space-y-3 text-lg text-neutral">
                    <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary" aria-hidden="true">•</span>
                        Startup pitches
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary" aria-hidden="true">•</span>
                        Emerging technologies
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary" aria-hidden="true">•</span>
                        Vendor solutions
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary" aria-hidden="true">•</span>
                        Partnership opportunities
                    </li>
                </ul>

                <p className="mt-8 text-lg leading-relaxed text-neutral">
                    The challenge isn&apos;t access — it&apos;s clarity and
                    prioritization. With so many options competing for
                    attention, the real question is:
                </p>

                <p className="mt-6 text-2xl font-semibold text-primary sm:text-3xl">
                    &ldquo;What should you actually spend time on?&rdquo;
                </p>
            </div>
        </section>
    );
}
