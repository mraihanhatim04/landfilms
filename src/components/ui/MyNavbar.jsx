import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

const MyNavbar = () => {
  return (
    <>
      <Navbar className="justify-items-center bg-sky-950">
        <NavbarBrand>
          <a
            href=""
            className="text-2xl font-bold tracking-wider bg-gradient-to-r from-sky-500 via-slate-50 to-sky-500 bg-clip-text text-transparent"
          >
            LAND FILMS
          </a>
        </NavbarBrand>
        <NavbarContent className="text-slate-600 gap-4" justify="center">
          <NavbarItem>
            <a
              href=""
              className="text-lg font-bold tracking-wider bg-gradient-to-r from-slate-200 via-sky-500 to-slate-50 bg-clip-text text-transparent"
            >
              MOVIES
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              href=""
              className="text-lg font-bold tracking-wider bg-gradient-to-r from-slate-200 via-sky-500 to-slate-50 bg-clip-text text-transparent"
            >
              TV
            </a>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default MyNavbar;
