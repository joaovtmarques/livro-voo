import { User, Trip } from "@prisma/client";
import { Trash } from "lucide-react";

interface CardProps {
  user: User;
  trip: Trip;
}

const Card = ({ user, trip }: CardProps) => {
  return (
    <div
      className={`h-[70px] rounded-md bg-gray1 w-full flex items-center justify-between px-8 hover:opacity-90 duration-200 hover:scale-105`}
    >
      <div className="flex gap-7 items-center">
        <div className="flex gap-7 w-full">
          <div className="flex flex-col gap-1 w-auto">
            <p className="font-open font-bold text-black text-xs">Nome</p>
            <p className="font-open font-normal text-black text-xs truncate">
              {user.name}
            </p>
          </div>
          <div className="flex flex-col gap-1 w-[97px]">
            <p className="font-open font-bold text-black text-xs">
              Nome de guerra
            </p>
            <p className="font-open font-normal text-black text-xs truncate">
              {user.warName}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-open font-bold text-black text-xs">Graduação</p>
            <p className="font-open font-normal text-black text-xs">
              {user.rank}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-open font-bold text-black text-xs">SU/Cia</p>
            <p className="font-open font-normal text-black text-xs">
              {user.SU}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-open font-bold text-black text-xs">Telefone</p>
            <p className="font-open font-normal text-black text-xs">
              {user.phoneNumber}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-open font-bold text-black text-xs">Destino</p>
            <p className="font-open font-normal text-black text-xs">
              {trip.destination}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-open font-bold text-black text-xs">
              Data de partida
            </p>
            <p className="font-open font-normal text-black text-xs">
              {trip.departureDate.toString()}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-open font-bold text-black text-xs">
              Data de retorno
            </p>
            <p className="font-open font-normal text-black text-xs">
              {trip.returnDate.toString()}
            </p>
          </div>
        </div>
      </div>
      <Trash className="text-red" />
    </div>
  );
};

export default Card;
