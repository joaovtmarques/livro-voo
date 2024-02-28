import { db } from "./prisma";
import { IFormInput } from "../(home)/page";

export const useDb = () => ({
  registerUserTrip: async (data: IFormInput) => {
    const user = await db.user.create({
      data: {
        name: data.name,
        warName: data.warName,
        rank: data.rank,
        SU: data.su,
        phoneNumber: data.phoneNumber,
        militaryId: data.id,
      },
    });

    await db.trip.create({
      data: {
        userId: user.id,
        destination: data.destination,
        departureDate: data.departureDate.toString(),
        returnDate: data.returnDate.toString(),
      },
    });
  },
});
