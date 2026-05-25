
import Banner from "./component/Banner";


import Why from "./component/Why";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Boys Hostel Near Christ University | Safe & Affordable Student Accommodation",
  description:
    "Looking for a boys hostel near Christ University? HappiLiv Hostels offers safe, affordable, and fully furnished accommodation with food, WiFi, and modern amenities for students.",
};

const BulletGrid = ({ items }: { items: string[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5 mt-6">
    {items.map((item, index) => (
      <div key={index} className="flex items-start gap-3">
        <span className="text-[#EE1C4C] text-xl leading-none">•</span>
        <span className="text-gray-700">{item}</span>
      </div>
    ))}
  </div>
);

export default function BoysHostelChristUniversity() {
  return (
    <>
      <Banner />

      {/* MAIN CONTENT */}
      <section className="px-6 md:px-16 py-12 space-y-14">

        {/* H1 */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Boys Hostel Near Christ University
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            Finding comfortable and affordable accommodation is important for
            students moving to Bangalore for higher education. If you are
            searching for a boys hostel near Christ University, HappiLiv
            Hostels offers a safe, student-friendly, and well-maintained living
            environment designed specifically for students.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Conveniently located near Christ University Kengeri campus, our
            hostel provides easy access to colleges, transportation facilities,
            restaurants, supermarkets, and other essential services.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With modern amenities, furnished rooms, hygienic food, and reliable
            facilities, we ensure students enjoy a convenient and stress-free
            stay throughout their academic journey.
          </p>
        </div>

        {/* IMAGE 1 */}
        <div className="relative w-full h-[320px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room1.webp"
            alt="Room Facilities"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Safe & Secure Boys Hostel Near Christ University
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Safety and comfort are important factors when choosing student
            accommodation. At HappiLiv Hostels, we provide a secure and peaceful
            environment where students can stay comfortably and focus on
            academics.
          </p>

          <BulletGrid
            items={[
              "24/7 CCTV surveillance",
              "Secure entry access",
              "Dedicated hostel support staff",
              "Safe and student-friendly atmosphere",
              "Regular monitoring and maintenance",
            ]}
          />
        </div>

        {/* SECTION 2 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Affordable Student Accommodation with Modern Amenities
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Students often look for accommodation that combines affordability
            with essential facilities and comfort.
          </p>

          <BulletGrid
            items={[
              "Fully furnished rooms",
              "Comfortable beds and storage spaces",
              "High-speed WiFi connectivity",
              "Daily housekeeping services",
              "Laundry facilities",
              "Hygienic washrooms",
              "Reliable power backup",
            ]}
          />
        </div>

        {/* IMAGE 2 */}
        <div className="relative w-full h-[320px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room2.webp"
            alt="Boys Hostel"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 3 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Boys Hostel with Food Near Christ University
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Good food and hygiene play an important role in maintaining a
            healthy student lifestyle.
          </p>

          <BulletGrid
            items={[
              "Fresh vegetarian and non-vegetarian meals",
              "Hygienic kitchen and dining facilities",
              "Balanced meal options",
              "Quality-focused meal preparation",
            ]}
          />
        </div>

        {/* IMAGE 3 */}
        <div className="relative w-full h-[320px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room3.webp"
            alt="Hostel Facilities"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 4 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Prime Location Near Christ University Kengeri
          </h2>

          <p className="text-gray-600 leading-relaxed">
            One of the biggest advantages of staying at HappiLiv Hostels is our
            convenient location near Christ University Kengeri campus.
          </p>

          <BulletGrid
            items={[
              "Christ University Kengeri Campus",
              "Public transportation facilities",
              "Restaurants and cafes",
              "Supermarkets and medical stores",
              "Student-friendly surroundings",
            ]}
          />
        </div>

        {/* COMPONENTS */}
       
       
        <Why />
       
       

        {/* SECTION 5 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose HappiLiv Hostels?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            At HappiLiv Hostels, we understand the daily needs of students
            living away from home.
          </p>

          <BulletGrid
            items={[
              "Safe and secure accommodation",
              "Affordable pricing options",
              "Prime location near Christ University",
              "Student-friendly atmosphere",
              "Modern amenities and facilities",
              "Hygienic food and clean surroundings",
              "Reliable hostel management support",
            ]}
          />
        </div>

      </section>

      {/* MAP SECTION */}
      <section className="w-full bg-white pb-16 px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 items-stretch">

          {/* GOOGLE MAP */}
          <div className="h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.709270117793!2d77.43257937358699!3d12.862045017273731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae38c490000001%3A0xaebe47889363e5de!2sHappiLiv%20Hostel!5e0!3m2!1sen!2sin!4v1770802434571!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-2xl border-0"
            ></iframe>
          </div>

          {/* CONTACT CARD */}
          <div className="bg-[#EE1C4C] rounded-2xl p-8 text-white h-[450px] flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6">
              Contact HappiLiv Hostels
            </h3>

            <div className="space-y-5">

              <div className="bg-[#FFFFFF2A] p-4 rounded-xl">
                <p className="font-semibold mb-1">Phone</p>
                <p>+91 63630 98384</p>
                <p>+91 63661 24184</p>
              </div>

              <div className="bg-[#FFFFFF2A] p-4 rounded-xl">
                <p className="font-semibold mb-1">WhatsApp</p>
                <p>+91 78928 81368</p>
              </div>

              <div className="bg-[#FFFFFF2A] p-4 rounded-xl">
                <p className="font-semibold mb-1">Email</p>
                <p>happilivhostels@gmail.com</p>
                <p>vibashappilivhostel@gmail.com</p>
              </div>

            </div>
          </div>

        </div>
      </section>


    </>
  );
}
