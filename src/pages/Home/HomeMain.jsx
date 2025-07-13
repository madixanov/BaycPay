import { lazy } from "react";
import "./HomeMain.css";

const Welcoming = lazy(() => import("../../components/Welcoming-Container/Welcoming.jsx"));
const BrandsScroll = lazy(() => import("../../components/Brands-Scroll/BrandsScroll.jsx"));
const Description = lazy(() => import("../../components/Description-Container/Description.jsx"));
const Statistics = lazy(() => import("../../components/Statistics-Container/Statistics.jsx"));
const Partners = lazy(() => import("../../components/Partners-Container/Partners.jsx"));

const HomeMain = () => {
  return (
    <main className="home-main">
      <Welcoming />
      <BrandsScroll />
      <Description />
      <Statistics />
      <Partners />
    </main>
  );
}

export default HomeMain;
