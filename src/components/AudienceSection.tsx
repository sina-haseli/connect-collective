export default function AudienceSection() {
    return (
        <section
            id="audience"
            aria-labelledby="audience-heading"
            className="py-16 sm:py-20 bg-background"
        >
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <h2
                    id="audience-heading"
                    className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
                >
                    Who We Work With
                </h2>

                <ul className="mt-6 space-y-3 text-lg text-neutral">
                    <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary" aria-hidden="true">•</span>
                        Industrial and manufacturing companies
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary" aria-hidden="true">•</span>
                        Advanced materials and engineering firms
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary" aria-hidden="true">•</span>
                        Healthcare and medtech organizations
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary" aria-hidden="true">•</span>
                        Corporate innovation teams
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 text-secondary" aria-hidden="true">•</span>
                        Business development and strategy groups
                    </li>
                </ul>
            </div>
        </section>
    );
}
