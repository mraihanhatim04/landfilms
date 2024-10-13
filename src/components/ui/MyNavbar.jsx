import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

const MyNavbar = () => {
  return (
    <>
      <Navbar className="justify-items-center">
        <NavbarBrand>
          <a
            href=""
            className="text-2xl font-bold tracking-wider bg-gradient-to-r from-slate-900 via-sky-700 to-red-500 bg-clip-text text-transparent"
          >
            LAND FILMS
          </a>
        </NavbarBrand>
      </Navbar>
    </>
  );
};

export default MyNavbar;
