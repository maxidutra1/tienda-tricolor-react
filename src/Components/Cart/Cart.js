import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  CartContainer,
  CartContent,
  CartItem,
  ProductImg,
  ConfirmButton,
  CartFooter,
} from "./CartElements";
import { CartQuantity } from "./CartQuantity";
import { formatPrice } from "../../utils/formatPrice";
import * as cartActions from "../../Redux/cart/cart-actions";
import { Link } from "react-router-dom";

const StyledCart = styled.div`
  position: fixed;
  right: 0px;
  top: 65px;
  width: 340px;
  padding-bottom: 5vh;
  background-color: #252525;
  height: calc(100% - 65px);
  z-index: 10;
  display: flex;
  flex-direction: column;
  transform: ${({ show }) => (show ? `translateX(0)` : `translateX(100%)`)};
  transition-property: transform;
  transition-duration: 0.5s;
  z-index: 5;
`;

export const Cart = () => {
  let mostrar = useSelector((state) => state.cart.show);
  let productosCarrito = useSelector((state) => state.cart.cartItems);
  let activeUser = useSelector(
    (state) => state.user?.currentUser?.email?.value?.length
  );
  const dispatch = useDispatch();

  const cerrarCarrito = () => {
    dispatch(cartActions.toggleCart());
  };

  const total = productosCarrito.reduce((acc, item) => {
    return acc + item.precio * item.quantity;
  }, 0);

  return (
    <StyledCart show={mostrar}>
      {productosCarrito?.length === 0 ? (
        <CartContent>Tu carrito está vacío =( </CartContent>
      ) : (
        <CartContent>
          <CartContainer style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
            Tu pedido:
          </CartContainer>
          {productosCarrito.map((product) => (
            <CartContainer>
              <CartItem>
                <ProductImg img={product.foto} />
                <div style={{ marginLeft: "5px" }}>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      marginBottom: "5px",
                    }}
                  >
                    {product.nombre}
                  </div>
                  {formatPrice(product.precio * product.quantity)}
                </div>
                <CartQuantity product={product} />
              </CartItem>
            </CartContainer>
          ))}

          {activeUser ? (
            <CartFooter>
              <Link to="/checkout">
                <ConfirmButton onClick={() => cerrarCarrito()}>
                  Ir a pagar {formatPrice(total)}
                </ConfirmButton>
              </Link>
            </CartFooter>
          ) : (
            <CartFooter>
              <span
                style={{
                  marginTop: "10px",
                  letterSpacing: "0.2px",
                  fontSize: "0.9rem",
                }}
              >
                Debes iniciar sesión para poder finalizar tu compra
              </span>
            </CartFooter>
          )}
        </CartContent>
      )}
    </StyledCart>
  );
};
