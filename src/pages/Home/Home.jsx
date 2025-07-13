import { lazy } from "react"

const Header = lazy(() => import ("../../components/Header/Header.jsx"));
const Footer = lazy(() => import ("../../components/Footer/Footer.jsx"));

const Home = () => {
    return (
        <>
            <Header />
            <Footer />
        </>
    )
}

export default Home;