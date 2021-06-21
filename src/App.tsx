import React, {FC} from 'react';
import './App.scss';
import ShoppingSite from "./views/ShoppingSite";
import Checkout from "./views/Checkout";
import Footer from "./components/Footer";

const App: FC = () => {
  return (
      <>
        <ShoppingSite/>
        <Checkout/>
        <Footer/>
      </>

  );
}

export default App;