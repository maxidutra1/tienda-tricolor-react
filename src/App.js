import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";
import { Cart } from "./Components/Cart/Cart";
import Content from "./Components/Content/Content";
import { Footercontainer } from "./Components/Footer/Footercontainer";
import Header from "./Components/Header/Header";
import Shadow from "./Components/Shadow/Shadow";

import Wrapper from "./Components/Wrapper/Wrapper";
import Home from "./pages/Home";
import { GlobalStyle } from "./Styles/GlobalStyle";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import ConfirmModal from "./Components/ConfirmModal/ConfirmModal";

function App() {
  let mostrar = useSelector((state) => state.cart.show);
  let modal = useSelector((state) => state.cart.modal);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        {mostrar && <Shadow />}
        {modal && <ConfirmModal />}

        <Cart />
        <Wrapper>
          <Content>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/checkout" element={<Checkout />} />
            </Routes>
          </Content>
          <Footercontainer />
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
