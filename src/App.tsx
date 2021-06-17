import React, {FC} from 'react';
import './App.scss';
import ShoppingSite from "./views/ShoppingSite";
import Checkout from "./views/Checkout";

const App: FC = () => {
  return (
    <ShoppingSite/>
    //<Checkout />
  );
}

export default App;