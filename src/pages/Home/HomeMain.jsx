import { lazy } from "react";
import "./HomeMain.css";

const Welcoming = lazy(() => import("../../components/Welcoming-Container/Welcoming.jsx"));
const BrandsScroll = lazy(() => import("../../components/Brands-Scroll/BrandsScroll.jsx"));

const HomeMain = () => {
  return (
    <main className="home-main">
      <Welcoming />
      <BrandsScroll />
    </main>
  );
}

export default HomeMain;
