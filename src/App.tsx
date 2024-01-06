import AOS from "aos";

import Layout from "./components/Layout";
import PreloadImages from "./components/PreloadImages";

import "./styles/global.css";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <>
      <PreloadImages />
      <Layout />
    </>
  );
}

export default App;
