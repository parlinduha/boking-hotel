"use client";
import {AiOutlineMenu} from "react-icons/ai"
import Avatar from "../Avatar";
import {useCallback, useState} from "react"
import MenuItem from "./MenuItem";
import { SafeUser } from "app/types";
import { useRouter } from "next/navigation";


interface UserMenuProps {
  currentUser?: SafeUser | null
}

const Menu: React.FC<UserMenuProps>  = () => {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const toggleOpen = useCallback(() => {
      setIsOpen((value) => !value);
    }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Menu
        </div>
        <div onClick={toggleOpen} className="p-4 md:py-2 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
            <AiOutlineMenu/>
            <div className="hidden md:block">
                <Avatar/>
            </div>
        </div>
      </div>
      {isOpen && (
        <div className=" absolute rounded-xl  shadow-md w-[40vm] md:w-3/4 bg-white overflow_hidden right-0 top-12 text-sm">
          <>
            <MenuItem  label="Login" onClick={() => router.push('/')}/>
            <MenuItem  label="Daftar" onClick={() => router.push('/')}/>
          </>
        </div>
      )}
    </div>
  );
};

export default Menu;
