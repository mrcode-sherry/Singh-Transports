import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="mx-auto md:px-24 px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-9 h-9 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-blue-900">
              S
            </div>
            <span className="text-xl font-semibold tracking-wide">
              SinghTransports
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            SinghTransports provides reliable to and comfortable shuttle services
            from airport to hostel and vice versa. Your journey, our priority!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Quick Links
          </h3>
          <ul className="space-y-2 mt-4">
            <li>
              <a
                href="/"
                className="relative group hover:text-yellow-400 transition-colors duration-300 inline-block"
              >
                Home
                <span
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-500 group-hover:w-full"
                  style={{
                    transformOrigin: "left",
                  }}
                ></span>
              </a>
            </li>
            <li>
              <a
                href="/reservation"
                className="relative group hover:text-yellow-400 transition-colors duration-300 inline-block"
              >
                Reservation
                <span
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
                  style={{
                    transformOrigin: "left",
                  }}
                ></span>
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="relative group hover:text-yellow-400 transition-colors duration-300 inline-block"
              >
                Contact
                <span
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"
                  style={{
                    transformOrigin: "left",
                  }}
                ></span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Contact Us
          </h3>
          <div className="space-y-2 mt-4 text-gray-300 text-sm">
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" />{" "}
              info@singhtransports.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-400" /> +33 123 456 789
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <Link
              href="#"
              className="relative group hover:text-yellow-400 transition-colors duration-300 inline-block"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              className="relative group hover:text-yellow-400 transition-colors duration-300 inline-block"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="#"
              className="relative group hover:text-yellow-400 transition-colors duration-300 inline-block"
            >
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
