import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BSC from "./experience/Bsc";
import ScrollToTop from "./components/ScrollToTop";
import SiteFooter from "./components/SiteFooter";
import Cloudflare from "./experience/Cloudflare";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bsc" element={<BSC />} />
            <Route path="/cloudflare" element={<Cloudflare />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
