export default function CTASection() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="bg-background py-16 sm:py-20"
        >
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                <h2
                    id="contact-heading"
                    className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
                >
                    Let&apos;s Connect
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-neutral">
                    If your team is evaluating new technologies or partnerships,
                    we can help you move faster with more confidence.
                </p>
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <a
                        href="mailto:contact@connectcollective.com"
                        className="inline-block rounded-md bg-primary px-8 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        Email Us
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-md bg-secondary px-8 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-md bg-accent px-8 py-3 text-base font-semibold text-primary shadow transition-colors hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    >
                        Schedule a Call
                    </a>
                </div>
            </div>
        </section>
    );
}
