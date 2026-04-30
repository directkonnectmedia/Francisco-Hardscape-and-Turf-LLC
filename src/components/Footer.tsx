import Link from "next/link";
import { Phone, MapPin, User } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black pt-16 pb-8 border-t border-brand-gray relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-black via-brand-green to-brand-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl mr-1">🌱</span>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-brand-green bg-clip-text text-transparent group-hover:from-white group-hover:to-brand-green-hover transition-all leading-tight">
                  Francisco Hardscape
                </span>
                <span className="text-xs text-brand-orange font-semibold tracking-widest uppercase">
                  & Turf LLC
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium hardscaping, turf installation, and landscaping services. 
              We transform your outdoor living spaces with expert craftsmanship 
              and meticulous attention to detail.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-brand-green transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-gray-400 hover:text-brand-green transition-colors text-sm"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="#reviews"
                  className="text-gray-400 hover:text-brand-green transition-colors text-sm"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="#quote"
                  className="text-gray-400 hover:text-brand-green transition-colors text-sm"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <User className="w-5 h-5 text-brand-green shrink-0" />
                <span className="font-medium">Owner: Francisco</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-brand-green shrink-0" />
                <a
                  href="tel:602-920-2015"
                  className="hover:text-brand-green transition-colors"
                >
                  (602) 920-2015
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-brand-green shrink-0" />
                <span>Serving the local Metro & Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-gray mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Francisco Hardscape and Turf LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-brand-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-green transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}