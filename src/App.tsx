import React, {FC} from 'react';
import './App.scss';
import ShoppingSite from "./views/ShoppingSite";
import Checkout from "./views/Checkout";
import ProductCartSection from "./components/ProductCartSection/SearchBarSection";
import ProductCartSectionDOM from "./components/ProductCartSection/ProductCartSectionDOM";

const App: FC = () => {
  return (
    // <ShoppingSite/>
    // <Checkout />
      <ProductCartSectionDOM/>
  );
}

export default App;