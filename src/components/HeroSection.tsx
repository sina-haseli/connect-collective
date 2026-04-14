export default function HeroSection() {
    return (
        <section
            id="hero"
            aria-labelledby="hero-heading"
            className="min-h-screen pt-16 flex items-center justify-center bg-primary text-white"
        >
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                <h1
                    id="hero-heading"
                    className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                >
                    Connect Collective
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
                    Connecting the right technologies to the right decisions
                </p>
                <a
                    href="#contact"
                    className="mt-8 inline-block rounded-md bg-secondary px-8 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary"
                >
                    Start a Conversation
                </a>
            </div>
        </section>
    );
}
