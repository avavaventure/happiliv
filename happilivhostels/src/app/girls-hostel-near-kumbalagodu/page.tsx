import BannerSection from "./Components/Banner";
import ContactFormSection from "./Components/ContactSection";
import WhyChoose from "./Components/Why";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Girls Hostel Near Kumbalagodu | Affordable Girls Hostel Near Kumbalagodu",
  description:
    "Looking for a Girls Hostel Near Kumbalagodu Bangalore? HappiLiv Hostels offers safe, affordable, and fully furnished accommodation with food, WiFi, and modern amenities for students.",
  keyword:
    "Girls hostel near Kumbalagodu, Affordable girls hostel near Kumbalagodu, Girls hostel with food near Kumbalagodu, Girls accommodation near Kumbalagodu Bangalore",
};

const BulletGrid = ({ items }: { items: string[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mt-6">
    {items.map((item, index) => (
      <div key={index} className="flex items-start gap-3">
        <span className="text-[#EE1C4C] text-xl leading-6">•</span>
        <span className="text-gray-700 leading-relaxed">{item}</span>
      </div>
    ))}
  </div>
);

export default function GirlsHostelKumbalagodu() {
  return (
    <>
      <BannerSection />

      <section className="px-6 md:px-16 py-12 space-y-12">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Girls Hostel in Kumbalagodu Bangalore
          </h1>

          <p className="text-gray-600 leading-relaxed mb-4">
            Finding safe and comfortable accommodation is important for
            students moving to Bangalore for higher education. If you are
            searching for a girls hostel in Kumbalagodu Bangalore,
            HappiLiv Hostels offers a secure, affordable, and student-friendly
            living environment with modern amenities and comfortable facilities.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Conveniently located near educational institutions and public
            transportation facilities, our hostel provides students with
            easy accessibility, hygienic food, secure accommodation,
            and a peaceful atmosphere.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We focus on creating a home-like environment where students
            can stay comfortably and concentrate on academics without stress.
          </p>
        </div>

        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room1.webp"
            alt="Girls Hostel in Kumbalagodu Bangalore"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Safe & Secure Girls Hostel in Kumbalagodu
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Student safety is one of the biggest priorities for parents
            and students when selecting accommodation. HappiLiv Hostels
            maintains a secure and peaceful environment for all residents.
          </p>

          <BulletGrid
            items={[
              "24/7 CCTV surveillance",
              "Secure entry access systems",
              "Dedicated wardens and support staff",
              "Peaceful student-friendly environment",
              "Regular monitoring and maintenance",
            ]}
          />
        </div>

        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room2.webp"
            alt="Girls Hostel Facilities"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 2 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Affordable Accommodation with Modern Amenities
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Students often look for accommodation that combines affordability,
            comfort, and convenience. Our hostel provides well-maintained rooms
            and modern facilities at student-friendly pricing.
          </p>

          <BulletGrid
            items={[
              "Fully furnished rooms",
              "Comfortable beds and storage spaces",
              "High-speed WiFi",
              "Daily housekeeping services",
              "Laundry support",
              "Hygienic washrooms",
              "Power backup facilities",
            ]}
          />
        </div>

        {/* SECTION 3 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Girls Hostel with Food in Kumbalagodu
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Healthy and hygienic food is essential for students staying
            away from home. We provide freshly prepared meals in a clean
            and hygienic environment.
          </p>

          <BulletGrid
            items={[
              "Fresh vegetarian and non-vegetarian meals",
              "Clean and hygienic kitchen",
              "Balanced and nutritious food",
              "Quality-focused meal preparation",
            ]}
          />
        </div>

        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/boys/room3.webp"
            alt="Student Accommodation"
            fill
            className="object-cover"
          />
        </div>

        {/* SECTION 4 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Convenient Location & Excellent Connectivity
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our hostel is strategically located in Kumbalagodu Bangalore,
            offering easy access to colleges, transportation facilities,
            supermarkets, restaurants, and healthcare services.
          </p>

          <BulletGrid
            items={[
              "Easy access to educational institutions",
              "Nearby bus and transport facilities",
              "Close to supermarkets and stores",
              "Restaurants and cafes nearby",
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
            HappiLiv Hostels focuses on providing students with a secure,
            comfortable, and supportive environment that improves their
            overall living experience.
          </p>

          <BulletGrid
            items={[
              "Safe and secure accommodation",
              "Affordable pricing options",
              "Comfortable student-friendly atmosphere",
              "Modern facilities and amenities",
              "Hygienic food and clean surroundings",
              "Reliable management support",
            ]}
          />
        </div>

        <WhyChoose />

        {/* SECTION 6 */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Comfortable Student Living Experience
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Moving to a new city can be challenging for students.
            Our hostel is designed to provide a home-like atmosphere
            where students can feel safe, comfortable, and supported.
          </p>

          <p className="text-gray-600 leading-relaxed">
            From spacious rooms to study-friendly surroundings,
            every facility is planned to improve convenience
            and student comfort.
          </p>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Which is the best girls hostel in Kumbalagodu Bangalore?",
                a: "HappiLiv Hostels offers safe, affordable, and fully furnished accommodation for students in Kumbalagodu Bangalore.",
              },
              {
                q: "Do you provide food facilities?",
                a: "Yes, we provide hygienic vegetarian and non-vegetarian meals for students.",
              },
              {
                q: "Is the hostel safe for female students?",
                a: "Yes, our hostel includes CCTV surveillance, secure entry systems, and dedicated support staff.",
              },
              {
                q: "Is WiFi available?",
                a: "Yes, high-speed WiFi is available for all residents.",
              },
              {
                q: "Is the hostel located near educational institutions?",
                a: "Yes, our hostel offers convenient access to colleges and transportation facilities.",
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
              </div>

            </div>
          </div>

        </div>
      </section>

       
    </>
  );
}
