"use client";

import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import FormButton from "./FormBtn";

const AddToCart = ({
  product,
  selectedVariant = null,
  hasVariants = false,
  quantity = 1,
  loading = false,
  onAddToCart,
}) => {
  const isDisabled = hasVariants && !selectedVariant;

  const handleClick = () => {
    if (!isDisabled && onAddToCart) {
      onAddToCart();
    }
  };

  return (
    <FormButton
      type="button"
      loading={loading}
      disabled={loading || isDisabled}
      IsValid={!isDisabled}
      Icon={!loading ? <FaShoppingCart size={14} /> : null}
      onClick={handleClick}
    >
      {loading ? "" : "Add To Cart"}
    </FormButton>
  );
};

export default AddToCart;
