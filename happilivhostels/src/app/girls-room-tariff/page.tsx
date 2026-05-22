import BannerSection from "./Components/Banner";
import ContactFormSection from "./Components/ContactSection";
 
import BoysRoomSection from "./Components/Rooms";
  
import WhyChoose from "./Components/Why";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Girls Room Tariff - Safe & Comfortable Hostel Rooms",
  description:
    "Browse our girls room tariffs with premium facilities. Safe, comfortable, and well-maintained hostel rooms designed for female guests.",
};

export default function Girls() {
  return (
    <>
      <BannerSection />

      <BoysRoomSection />

      {/* HOSTEL PAGES CARDS */}
      <section className="px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore More Girls Hostel Options
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* CARD 1 */}
          <Link
            href="/girls-hostel-near-christ-university"
            className="bg-pink-100 hover:bg-pink-200 transition rounded-2xl p-8 shadow-md min-h-[180px] flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Girls Hostel Near Christ University
            </h3>

            <p className="text-gray-600">
              Safe, affordable, and fully furnished hostel accommodation near
              Christ University Kengeri campus.
            </p>
          </Link>

          {/* CARD 2 */}
          <Link
            href="/girls-hostel-in-kengeri"
            className="bg-gray-100 hover:bg-gray-200 transition rounded-2xl p-8 shadow-md min-h-[180px] flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Girls Hostel in Kengeri
            </h3>

            <p className="text-gray-600">
              Comfortable student accommodation with WiFi, food, and modern
              amenities in Kengeri Bangalore.
            </p>
          </Link>

          {/* CARD 3 */}
          <Link
            href="/pg-for-girls-near-christ-university"
            className="bg-gray-100 hover:bg-gray-200 transition rounded-2xl p-8 shadow-md min-h-[180px] flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Girls PG Near Christ University
            </h3>

            <p className="text-gray-600">
              Affordable and secure PG accommodation for girls near Christ
              University Bangalore.
            </p>
          </Link>

          {/* CARD 4 */}
          <Link
            href="/girls-hostel-near-kumbalagodu"
            className="bg-pink-100 hover:bg-pink-200 transition rounded-2xl p-8 shadow-md min-h-[180px] flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Girls Hostel Near Kumbalagodu
            </h3>

            <p className="text-gray-600">
              Student-friendly girls hostel near Kumbalagodu with food, safety,
              and modern facilities.
            </p>
          </Link>

        </div>
      </section>

    

      <ContactFormSection/> 

      <WhyChoose />
     
       
    </>
  );
}