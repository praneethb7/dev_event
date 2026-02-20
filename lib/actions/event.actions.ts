'use server';

import connectDB from "@/lib/mongodb";
import Event from "@/database/event.model";

export const getSimilarEventBySlug = async (slug: string) => {
    try {
        await connectDB();

        const event = await Event.findOne({ slug }).lean();
        if (!event) return [];

        const similarEvents = await Event.find({
            _id: { $ne: event._id },
            tags: { $in: event.tags },
        }).lean();

        return similarEvents.map((e) => ({
            ...e,
            _id: e._id.toString(),
            createdAt: e.createdAt?.toISOString(),
            updatedAt: e.updatedAt?.toISOString(),
        }));

    } catch {
        return [];
    }
};