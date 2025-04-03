import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import Cart from "./components/pages/Cart.tsx";
import Contacts from "./components/pages/Contacts.tsx";
import Faq from "./components/pages/Faq.tsx";
import Gift from "./components/pages/Gift.tsx";
import Journal from "./components/pages/Journal.tsx";
import OurImpact from "./components/pages/OurImpact.tsx";
import OurTeam from "./components/pages/OurTeam.tsx";
import Shop from "./components/pages/Shop.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/gift" element={<Gift />}></Route>
        <Route path="/journal" element={<Journal />}></Route>
        <Route path="/impact" element={<OurImpact />}></Route>
        <Route path="/team" element={<OurTeam />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
