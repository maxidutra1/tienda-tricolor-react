import React from "react";
import {
  CheckoutContainer,
  ProductsContainer,
  ProductsUl,
  ProductsGrid,
  ProductImg,
  ProductInfo,
  ProductPrice,
  CostResume,
  CostLi,
  BtnContainer,
  CheckoutBtn,
  CheckModal,
  ShadowModal,
} from "./CheckoutElements";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as cartActions from "../../Redux/cart/cart-actions";
import { formatPrice } from "../../utils/formatPrice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CheckoutResume = () => {
  let productos = useSelector((state) => state.cart.cartItems);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const total = productos.reduce((acc, item) => {
    return acc + item.precio * item.quantity;
  }, 0);

  const [pagado, setPagado] = useState(false);

  const finishCheckout = () => {
    setPagado(false);
    dispatch(cartActions.clearCart());
    navigate(`/`);
  };

  return (
    <CheckoutContainer>
      <h2>Tu pedido:</h2>
      <ProductsContainer>
        <h3>Productos:</h3>
        <ProductsUl>
          {productos.map((item) => (
            <ProductsGrid>
              <ProductImg img={item.foto} />
              <ProductInfo>{item.nombre}</ProductInfo>
              <ProductPrice>
                <span>{item.quantity}u</span>
                <span>{formatPrice(item.precio * item.quantity)}</span>
              </ProductPrice>
            </ProductsGrid>
          ))}
        </ProductsUl>
      </ProductsContainer>
      <CostResume>
        <h3>Costos:</h3>
        <ProductsUl>
          <CostLi>
            <p>Costo de los productos</p> <span>{formatPrice(total)}</span>
          </CostLi>
          <CostLi>
            <p>Costo de envío</p> <span>{formatPrice(650)}</span>
          </CostLi>
          <CostLi>
            <p>Total</p> <span>{formatPrice(total + 650)}</span>
          </CostLi>
        </ProductsUl>
      </CostResume>
      <BtnContainer>
        <CheckoutBtn>
          <Link to="/">VOLVER</Link>
        </CheckoutBtn>
        <CheckoutBtn onClick={() => setPagado(true)}>PAGAR</CheckoutBtn>
      </BtnContainer>
      {pagado && <ShadowModal />}
      {pagado && (
        <CheckModal>
          <h2>¡Tu compra fue realizada exitosamente!</h2>
          <h3>Gracias por confiar en nosotros</h3>
          <CheckoutBtn
            onClick={finishCheckout}
            style={{ backgroundColor: "rgb(152, 151, 153)", height: "40px" }}
          >
            VOLVER AL MENU
          </CheckoutBtn>
        </CheckModal>
      )}
    </CheckoutContainer>
  );
};

export default CheckoutResume;
