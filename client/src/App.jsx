import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";

import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <main className="container">
        <Navbar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
