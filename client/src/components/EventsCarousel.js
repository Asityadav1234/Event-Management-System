import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function EventsCarousel() {
    const [events, setEvents] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/getallevents`
                );
                if (!response.ok) return;
                const data = await response.json();
                setEvents(data.slice(0, 6)); // show top 6 events
            } catch (e) {
                console.error("Error loading events for carousel", e);
            }
        };
        fetchEvents();
    }, []);

    useEffect(() => {
        if (!events.length) return;
        const id = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % events.length);
        }, 4000);
        return () => clearInterval(id);
    }, [events]);

    if (!events.length) return null;

    const active = events[activeIndex];

    return (
        <div className="mt-2">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--gray-color)]">
                    Now showing
                </h3>
                <div className="flex gap-1">
                    {events.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            className={`h-1.5 rounded-full transition-all ${
                                idx === activeIndex
                                    ? "w-6 bg-[color:var(--darker-secondary-color)]"
                                    : "w-2 bg-slate-600"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            <button
                onClick={() => router.push(`/event/${active.event_id}`)}
                className="group w-full flex items-stretch rounded-3xl overflow-hidden border border-slate-200 bg-[color:var(--white-color)] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left"
            >
                <div className="relative w-2/3 h-56 sm:h-72 md:h-80">
                    {active.profile && (
                        <Image
                            src={active.profile}
                            alt={active.name}
                            fill
                            className="object-cover"
                            sizes="(min-width: 768px) 50vw, 100vw"
                        />
                    )}
                </div>
                <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between bg-[color:var(--primary-color)]">
                    <div>
                        <p className="text-xs uppercase tracking-wide text-[color:var(--light-gray)] mb-1">
                            Upcoming event
                        </p>
                        <h3 className="text-xl font-semibold text-[color:var(--gray-color)] mb-1 line-clamp-2">
                            {active.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-[color:var(--light-gray)] mb-3 line-clamp-3">
                            {active.description}
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-[color:var(--light-gray)]">
                        <span>
                            <strong className="text-[color:var(--gray-color)]">
                                {active.date}
                            </strong>{" "}
                            at {active.time}
                        </span>
                        <span className="truncate">
                            {active.venue}
                        </span>
                        <span className="font-semibold text-[color:var(--darker-secondary-color)]">
                            ₹ {active.price}
                        </span>
                    </div>
                </div>
            </button>
        </div>
    );
}

export default EventsCarousel;


