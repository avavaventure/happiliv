import Banner from "./Components/Banner";
import Content from "./Components/Content";
import Features from "./Components/Features";
import Offers from "./Components/Offers";
import VissionMission from "./Components/VissionMission";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About HappiLiv Hostels- Our Story & Mission',
  description: 'Learn about HappiLiv\'s mission to provide premium hostel accommodation. Discover our vision, values, and commitment to guest satisfaction.',
};

export default function About() {
    return (
        <>
            <Banner />
            <Content />
            <VissionMission />
            <Offers />
            <Features />
        </>
    );
}
