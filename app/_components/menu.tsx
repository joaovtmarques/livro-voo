import { LogOut, Users } from "lucide-react";

interface MenuProps {
  route?: string;
}

const Menu = ({ route }: MenuProps) => {
  const options = [
    {
      route: "/admin",
      title: "Militares",
      icon: Users,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-between h-full">
      <div className="flex flex-col gap-5 w-full">
        {options.map((option, key) => {
          return (
            <div
              key={key}
              className={`w-full ${
                route === option.route ? "bg-green2" : "bg-green1"
              } hover:opacity-75 duration-200 rounded-md flex items-center gap-3 p-3 cursor-pointer`}
            >
              <option.icon className="h-8 w-8 text-white" />
              <p className="font-open font-bold text-white text-sm">
                {option.title}
              </p>
            </div>
          );
        })}
      </div>
      <button className="w-full bg-gray1 hover:opacity-75 duration-200 rounded-md flex items-center gap-3 p-3 font-open font-bold text-black text-sm cursor-pointer">
        <LogOut className="h-8 w-8 text-black" />
        Sair
      </button>
    </div>
  );
};

export default Menu;
