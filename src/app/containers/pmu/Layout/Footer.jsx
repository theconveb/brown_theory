import { Poiret_One } from "next/font/google";

const poiret = Poiret_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  const poiretRegular = `${poiret.className} font-normal not-italic`;

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className={`${poiretRegular} text-2xl font-bold mb-2`}>
              BROWN THEORY
            </h3>
            <p className="text-gray-400 text-sm">
              Brows , lips , tattoo
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="/PMU" className="hover:text-white transition">
                  PMU
                </a>
              </li>
              <li>
                <a href="/TATTOO" className="hover:text-white transition">
                  TATTOO
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">
              Email: info@browntheory.com
            </p>
            <p className="text-gray-400 text-sm">
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2026 BROWN THEORY. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
