import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";
import background from "../src/images/parchment_scroll_background.jpg";


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{
      backgroundColor: darkMode ? "#222" : "#FCF5E5", 
      color: darkMode && "white",
      // backgroundImage: "#FCF5E5",
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'cover'
    }}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
};

export default App;