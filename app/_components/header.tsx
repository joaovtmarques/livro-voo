import Image from "next/image";

import logo from "@/public/6bil.png";

const Header = () => {
  return (
    <header className="w-full py-6 bg-green1 flex items-center justify-center border-solid border-b-green2 border-b-[25px]">
      <div className="flex gap-3">
        <Image
          src={logo}
          alt="6º BIL"
          height={77}
          width={62}
          className="w-[42px] h-[57px] md:w-[52px] md:h-[67px] lg:w-[62px] lg:h-[77px]"
        />
        <div className="flex flex-col gap-2">
          <h4 className="text-white text-xs md:text-sm lg:text-sm">
            Seção de Informática
          </h4>
          <h1 className="text-white text-lg hidden md:flex lg:flex md:text-xl lg:text-2xl font-bold">
            6º Batalhão de Infantaria Leve (Aeromóvel)
          </h1>
          <h1 className="flex md:hidden lg:hidden text-white text-lg font-bold">
            6º BIL (Amv)
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
