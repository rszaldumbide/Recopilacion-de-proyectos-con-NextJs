"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";

import {
  FcExpand,
  FcViewDetails,
  FcCalculator,
  FcConferenceCall,
  FcCursor,
  FcList,
} from "react-icons/fc";

import Image from "next/image";
import Logo from "@/assets/imgs/logo.png";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const icons = {
    Down: <FcExpand className="ml-1" size={16} />,
    Lista2: <FcViewDetails size={30} />,
    Calculadora: <FcCalculator size={30} />,
    Users: <FcConferenceCall size={30} />,
    Cursor: <FcCursor size={30} />,
    Lista1: <FcList size={30} />,
  };

  return (
    <Navbar shouldHideOnScroll isBordered onMenuOpenChange={setIsMenuOpen} className="bg-slate-900 py-3">
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <Image src={Logo} alt="Logo" width={100} />
          </Link>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-orange-400"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className="">
          <Link className="hover:text-orange-500 text-white" href="/">
            Inicio
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Link
                className="hover:text-orange-500 cursor-pointer  text-white"
              >
                Proyectos {icons.Down}
              </Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Proyectos"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Webcats"
              description="Descripción personal de los miembros de Webcats."
              startContent={icons.Users}
              href="/proyectos/proyecto_1"
            >
              <Link
                color="foreground"
                className="hover:text-orange-500"
                href="/proyectos/proyecto_1"
              >
                Webcats
              </Link>
            </DropdownItem>
            <DropdownItem
              key="Contador"
              description="Contador de Clicks, con botones de incremento, decremento y reiniciar."
              startContent={icons.Cursor}
              href="/proyectos/proyecto_2"
            >
              <Link
                color="foreground"
                className="hover:text-orange-500"
                href="/proyectos/proyecto_2"
              >
                Contador
              </Link>
            </DropdownItem>
            <DropdownItem
              key="Calculadora"
              description="Simulación de una calculadora de operaciones básicas."
              startContent={icons.Calculadora}
              href="/proyectos/proyecto_3"
            >
              <Link
                color="foreground"
                className="hover:text-orange-500"
                href="/proyectos/proyecto_3"
              >
                Calculadora
              </Link>
            </DropdownItem>
            <DropdownItem
              key="Lista"
              description="Lista de tareas con funcionalidades de agregar, eliminar y marcar como completada."
              startContent={icons.Lista1}
              href="/proyectos/proyecto_4"
            >
              <Link
                color="foreground"
                className="hover:text-orange-500"
                href="/proyectos/proyecto_4"
              >
                Lista
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu>
        <NavbarItem className="mt-10">
          <Link color="foreground" className="hover:text-orange-500" href="/">
            Inicio
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.Down}
                radius="sm"
                variant="light"
              >
                Proyectos
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Proyectos"
            className="w-[100%]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Webcats"
              description="Descripción personal de los miembros de Webcats."
              startContent={icons.Users}
              href="/proyectos/proyecto_1"
            >
              <Link
                color="foreground"
                className="hover:text-orange-500"
                href="/proyectos/proyecto_1"
              >
                Webcats
              </Link>
            </DropdownItem>
            <DropdownItem
              key="Contador"
              description="Contador de Clicks, con botones de incremento, decremento y reiniciar."
              startContent={icons.Cursor}
              href="/proyectos/proyecto_2"
            >
              <Link
                color="foreground"
                className="hover:text-orange-500"
                href="/proyectos/proyecto_2"
              >
                Contador
              </Link>
            </DropdownItem>
            <DropdownItem
              key="Calculadora"
              description="Simulación de una calculadora de operaciones básicas."
              startContent={icons.Calculadora}
              href="/proyectos/proyecto_3"
            >
              <Link
                color="foreground"
                className="hover:text-orange-500"
                href="/proyectos/proyecto_3"
              >
                Calculadora
              </Link>
            </DropdownItem>
            <DropdownItem
              key="Lista"
              description="Lista de tareas con funcionalidades de agregar, eliminar y marcar como completada."
              startContent={icons.Lista1}
              href="/proyectos/proyecto_4"
            >
              <Link
                color="foreground"
                className="hover:text-orange-500"
                href="/proyectos/proyecto_4"
              >
                Lista
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarMenu>
    </Navbar>
  );
}
