export default function AboutSection() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="py-16 sm:py-20 bg-background"
        >
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <h2
                    id="about-heading"
                    className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
                >
                    About Us
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-neutral">
                    Connect Collective helps companies cut through the noise of
                    external innovation and focus on what truly matters. We work
                    at the intersection of technology, strategy, and partnerships
                    to help organizations evaluate external opportunities and
                    decide what is worth pursuing.
                </p>
            </div>
        </section>
    );
}
