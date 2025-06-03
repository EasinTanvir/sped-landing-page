// components/FoodAdBanner.jsx
import { Link } from "@/i18n/routing";
import { Container } from "@/index";
import { FaHamburger } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

const SpedBanner = () => {
  return (
    <div className="py-16">
      <Container>
        <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 rounded-2xl sm:px-6 px-3 sm:py-16 py-10 overflow-hidden shadow-xl border border-dotted border-red-300">
          {/* Dotted background */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff66_1px,transparent_1px)] [background-size:16px_16px] opacity-30 z-0 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Section */}
            <div className="sm:space-y-12 space-y-8">
              <h2 className="sm:text-3xl  text-2xl md:text-4xl font-bold text-white  flex items-center gap-2 sm:justify-start justify-center">
                <FaHamburger className="sm:block hidden" />
                Make Order with Sped
              </h2>
              <p className="sm:text-base  text-sm mt-2 text-white sm:max-w-md">
                Craving something delicious? Get your favorite meals delivered
                fresh and fast. We partner with the best restaurants to satisfy
                your taste buds in no time.
              </p>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 sm:mt-0 mt-8">
              <MdDeliveryDining className="text-6xl text-yellow-500 animate-bounce" />
              <Link
                href={`${process.env.NEXT_PUBLIC_SPED_FRONTEND_BASE_URL}/`}
                target="_blank"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpedBanner;
