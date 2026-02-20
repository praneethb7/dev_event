import EventDetails from "@/components/EventDetails";

const EventDetailsPage = ({ params }: { params: { slug: string } }) => {
    return (
        <main>
            <EventDetails slug={params.slug} />
        </main>
    );
};

export default EventDetailsPage;