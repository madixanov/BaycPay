import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react"; 

const Home = lazy(() => import("./pages/Home/Home.jsx"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;