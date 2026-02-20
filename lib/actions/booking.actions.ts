'use server';
import connectDB from "@/lib/mongodb";
import {Booking} from "@/database";

export const createBooking = async ({eventId, slug, email}:{eventId:string,slug:string,email:string}) => {
    try {
        await connectDB();
        const booking = (await Booking.create({eventId, slug, email})).lean();
        return {success: true};
    } catch (e) {
        console.error(e);
        return {success: false};
    }
}