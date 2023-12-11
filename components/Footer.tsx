import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-20 bg-black">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-2">
          <Image
            src="/companylogo.png"
            alt="logo"
            width={150}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-400">
            Deluxe Cars 1997 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link, index) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold text-amber-700">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-400"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-600 sm:px-16 px-6 py-10">
        <p>@2023 Carhub. All rights reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-400">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-400">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
