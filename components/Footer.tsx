import Link from "next/link";

export default function Footer(){
    return (
    <footer className="bg-black-800 text-[#CCFF00] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Links Section */}
          <div className="mb-6 md:mb-0">
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/hombre" className="hover:underline">
                  Hombre
                </Link>
              </li>
              <li>
                <Link href="/mujer" className="hover:underline">
                  Mujer
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:underline">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Media Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Síguenos</h2>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-400">
                Facebook
              </Link>
              <Link href="#" className="hover:text-gray-400">
                Twitter
              </Link>
              <Link href="#" className="hover:text-gray-400">
                Instagram
              </Link>
              <Link href="#" className="hover:text-gray-400">
                LinkedIn
              </Link>
            </div>
          </div>
          {/* Copyright Section */}
          <div className="text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} JustFit. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}