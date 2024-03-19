import { useState } from "react";
import Link from "../Link/Link";
import { CgMenuLeft } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
const NavBar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Contact", path: "/contact" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4">
      <div onClick={() => setOpen(!open)} className="text-2xl md:hidden">
        {open ? <IoMdClose></IoMdClose> : <CgMenuLeft></CgMenuLeft>}
      </div>
      <ul
        className={`md:flex gap-8 absolute md:static w-[30%] rounded-md duration-1000 p-2 ${
          open ? "bg-purple-400 top-12" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
