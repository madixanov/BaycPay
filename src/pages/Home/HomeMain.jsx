import { lazy } from "react";
import "./HomeMain.css";

const Welcoming = lazy(() => import("../../components/Welcoming-Container/Welcoming.jsx"));
const BrandsScroll = lazy(() => import("../../components/Brands-Scroll/BrandsScroll.jsx"));
const Description = lazy(() => import("../../components/Description-Container/Description.jsx"));
const Statistics = lazy(() => import("../../components/Statistics-Container/Statistics.jsx"));
const Partners = lazy(() => import("../../components/Partners-Container/Partners.jsx"));
const Advantages = lazy(() => import("../../components/Advantages-Container/Advantages.jsx"));
const Countries = lazy(() => import("../../components/Countries-Scroll/Countries.jsx"));
const Offer = lazy(() => import("../../components/Offer-Container/Offer.jsx"));
const ContactUs = lazy(() => import("../../components/ContactUs-Container/ContactUs.jsx"))
const Telegram = lazy(() => import("../../components/TelegramBot-Container/Telegram.jsx"))

const HomeMain = () => {
  return (
    <main className="home-main">
      <Welcoming />
      <BrandsScroll />
      <Description />
      <Statistics />
      <Partners />
      <Advantages />
      <Countries />
      <Offer />
      <ContactUs />
      <Telegram />
    </main>
  );
}

export default HomeMain;
