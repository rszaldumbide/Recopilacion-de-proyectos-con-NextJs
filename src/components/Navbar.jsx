import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/imgs/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <Image src={Logo} alt="Logo" width={100} height={40} />
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <Link
                href="/"
                className="bg-orange-300 text-bg-gray-800 rounded-md mx-auto px-3 py-2 text-sm leading-5"
                aria-current="page"
              >
                Proyectos
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-32 pb-3 pt-2">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Link
            href="/"
            className="bg-orange-300 text-bg-gray-800 text-center w-auto block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Proyectos
          </Link>
        </div>
      </div>
    </nav>
  );
}
