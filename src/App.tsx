import "./styles/global.css";
import Layout from "./components/Layout";
import PreloadImages from "./components/PreloadImages";

function App() {
  return (
    <>
      <PreloadImages />
      <Layout />
    </>
  );
}

export default App;
