import React from "react";
import cartIcon from "../images/icon-cart.svg";

const Content = () => {
  return (
    <section className="product--content-info">
      <h4>Perfume</h4>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <p>
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div className="product--price">
        <span>$149.99</span>
        <s>$169.99</s>
      </div>
      <button className="product--add-to-cart-btn">
        <img src={cartIcon} alt="Cart Icon" /> <span>Add to Cart</span>
      </button>
    </section>
  );
};

export default Content;
