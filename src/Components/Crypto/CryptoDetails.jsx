import React from "react";
import { useParams } from "react-router-dom";

function CryptoDetails() {
  const { coinId } = useParams();

  return <div>CryptoDetails {coinId}</div>;
}

export default CryptoDetails;