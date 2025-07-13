import { lazy } from "react";
import "./HomeMain.css";
import Description from "../../components/Description-Container/Description.jsx";
import Statistics from "../../components/Statistics-Container/Statistics.jsx";

const Welcoming = lazy(() => import("../../components/Welcoming-Container/Welcoming.jsx"));
const BrandsScroll = lazy(() => import("../../components/Brands-Scroll/BrandsScroll.jsx"));

const HomeMain = () => {
  return (
    <main className="home-main">
      <Welcoming />
      <BrandsScroll />
      <Description />
      <Statistics />
    </main>
  );
}

export default HomeMain;
