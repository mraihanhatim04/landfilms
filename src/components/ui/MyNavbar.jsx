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
        <NavbarContent className="text-slate-600 gap-4" justify="center">
          <NavbarItem>
            <a
              href=""
              className="text-lg font-bold tracking-wider bg-gradient-to-r from-slate-900 via-sky-700 to-red-500 bg-clip-text text-transparent"
            >
              In Theaters
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              href=""
              className="text-lg font-bold tracking-wider bg-gradient-to-r from-slate-900 via-sky-700 to-red-500 bg-clip-text text-transparent"
            >
              On TV
            </a>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default MyNavbar;
