import { format } from "date-fns";
import Card from "../_components/card";
import Menu from "../_components/menu";

const Admin = () => {
  const user = {
    id: "valid_id",
    name: "João Vitor da Silva Marques",
    warName: "Vitor Silva",
    rank: "Sd EV",
    phoneNumber: "12000000000",
    SU: "CCAp",
    militaryId: "0212535876",
  };

  const formattedDate = format(new Date(), "dd'/'MM'/'yyyy'");

  const trip = {
    id: "valid_id",
    destination: "any_destination",
    departureDate: formattedDate,
    returnDate: formattedDate,
    userId: user.id,
  };

  return (
    <div className="py-8 px-4">
      <div className="flex h-full">
        <div className="w-[254px] h-screen border-r border-b px-4 border-gray3/50 pb-8">
          <Menu />
        </div>
        <div className="px-8 w-full">
          <Card user={user} trip={trip} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
