import { lazy } from "react";
import "./HomeMain.css";

const Welcoming = lazy(() => import("../../components/Welcoming-Container/Welcoming.jsx"));

const HomeMain = () => {
  return (
    <main className="home-main">
      <Welcoming />
    </main>
  );
}

export default HomeMain;
