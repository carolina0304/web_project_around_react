//*import { useState } from 'react'
/*import reactLogo from "./assets/react.svg";*/
/*import viteLogo from "/vite.svg";*/
import "./App.css";
import Header from "./components/Header/Header";
import "./blocks/page.css";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
function App() {
  //*const [count, setCount] = useState(0)

  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
