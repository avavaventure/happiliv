import Banner from "./component/Banner";
import Why from "./component/Why";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Boys Hostel in Kengeri Bangalore | Safe & Affordable Student Accommodation",
  description:
    "Looking for a boys hostel in Kengeri Bangalore? HappiLiv Hostels offers safe, affordable, and fully furnished accommodation with food, WiFi, and modern amenities for students.",
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

export default function BoysHostelKengeri() {
  return (
    <>
      <Banner />

      {/* MAIN CONTENT */}
      <section className="px-6 md:px-16 py-12 space-y-14">

        {/* H1 */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Boys Hostel in Kengeri Bangalore
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            Finding the right accommodation is important for students
            relocating to Bangalore for education. If you are searching for a
            boys hostel in Kengeri Bangalore, HappiLiv Hostels offers a
            comfortable, affordable, and student-friendly living environment
            designed specifically for modern student needs.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Conveniently located near educational institutions including
            Christ University Kengeri campus, our hostel provides easy access
            to transportation facilities, supermarkets, restaurants, and
            essential services.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With furnished rooms, hygienic food, high-speed WiFi, and modern
            amenities, we ensure students enjoy a stress-free and comfortable
            stay throughout their academic journey.
          </p>
        </div>

        {/* IMAGE 1 */}
        <div className="relative w-full h-[320px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room1.webp"
            alt="Boys Hostel in Kengeri Bangalore"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Safe & Secure Boys Hostel in Kengeri
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Safety and comfort are essential when choosing student
            accommodation. At HappiLiv Hostels, we maintain a secure and
            peaceful environment where students can stay confidently and focus
            on academics.
          </p>

          <BulletGrid
            items={[
              "24/7 CCTV surveillance",
              "Secure entry systems",
              "Dedicated hostel support staff",
              "Safe and student-friendly surroundings",
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
            Students often look for accommodation that offers both
            affordability and comfort. HappiLiv Hostels provides
            well-maintained rooms and modern amenities at student-friendly
            pricing.
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
            alt="Student Hostel in Kengeri"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 3 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Boys Hostel with Food in Kengeri Bangalore
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Healthy and hygienic food is an important part of student life.
            We provide freshly prepared meals in a clean and hygienic
            environment to ensure students enjoy quality food every day.
          </p>

          <BulletGrid
            items={[
              "Fresh vegetarian and non-vegetarian meals",
              "Hygienic kitchen and dining area",
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
            Prime Location with Excellent Connectivity
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our hostel is strategically located in Kengeri Bangalore with
            excellent connectivity to educational institutions and essential
            services.
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

        {/* SECTION 5 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose HappiLiv Hostels?
          </h2>

          <p className="text-gray-600 leading-relaxed">
            At HappiLiv Hostels, we understand the daily needs of students
            living away from home. Our goal is to provide a comfortable,
            affordable, and supportive environment where students can focus on
            academics and personal growth.
          </p>

          <BulletGrid
            items={[
              "Safe and secure accommodation",
              "Affordable pricing options",
              "Prime location in Kengeri",
              "Student-friendly atmosphere",
              "Modern amenities and facilities",
              "Hygienic food and clean surroundings",
              "Reliable hostel management support",
            ]}
          />
        </div>

        <Why />

        {/* FAQ SECTION */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Which is the best boys hostel in Kengeri Bangalore?",
                a: "HappiLiv Hostels offers safe, affordable, and fully furnished accommodation for students in Kengeri Bangalore.",
              },
              {
                q: "Do you provide food facilities for students?",
                a: "Yes, we provide hygienic vegetarian and non-vegetarian meals for students.",
              },
              {
                q: "Is the hostel safe for students?",
                a: "Yes, our hostel includes CCTV surveillance, secure access systems, and dedicated hostel support staff.",
              },
              {
                q: "Is WiFi available in the hostel?",
                a: "Yes, high-speed WiFi is available for all residents.",
              },
              {
                q: "Is the hostel near Christ University?",
                a: "Yes, our hostel is conveniently located near Christ University Kengeri campus.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl p-5"
              >
                <h3 className="font-semibold text-lg text-black">
                  {faq.q}
                </h3>

                <p className="text-gray-600 mt-2 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
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
