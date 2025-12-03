import EventsCarousel from "@/components/EventsCarousel";

function HeroHome() {
    return (
        <section className="bg-[color:var(--primary-color)]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-10 md:pt-28 md:pb-14">
                {/* Simple heading row */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-[color:var(--gray-color)]">
                            Discover events with{" "}
                            <span className="text-[color:var(--darker-secondary-color)]">
                                ZONE
                            </span>
                        </h1>
                        <p className="text-sm md:text-base text-[color:var(--light-gray)] mt-1">
                            Browse and book events happening around you.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <a
                            href="/users/signin"
                            className="btn-sm text-white bg-[color:var(--darker-secondary-color)] hover:bg-[color:var(--secondary-color)] shadow-md shadow-[color:var(--darker-secondary-color)]/40"
                        >
                            Sign in
                        </a>
                        <a
                            href="/users/signup"
                            className="btn-sm text-[color:var(--gray-color)] bg-[color:var(--white-color)] hover:bg-slate-100 border border-slate-300 shadow-md shadow-black/10"
                        >
                            Sign up
                        </a>
                    </div>
                </div>

                {/* Banner-style events slider */}
                <EventsCarousel />
            </div>
        </section>
    );
}

export default HeroHome;
