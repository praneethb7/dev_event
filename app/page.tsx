import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";

const Page = async () => {

    const response = await fetch(
        `${process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : "http://localhost:3000"}/api/events`,
        { cache: "no-store" }
    );

    const { events } = await response.json();

    return (
        <section>
            <h1 className="text-center">
                The Hub for Every Dev <br /> Event You Can't Miss
            </h1>

            <ExploreBtn />

            <ul className="events list-none">
                {events?.map((event: IEvent) => (
                    <li key={event.title}>
                        <EventCard {...event} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Page;