import { lazy } from "react"

const Header = lazy(() => import ("../../components/Header/Header.jsx"));
const HomeMain = lazy(() => import ("./HomeMain.jsx"));
const Footer = lazy(() => import ("../../components/Footer/Footer.jsx"));

const Home = () => {
    return (
        <>
            <Header />
            <HomeMain />
            <Footer />
        </>
    )
}

export default Home;