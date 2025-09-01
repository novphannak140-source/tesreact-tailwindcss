import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Card = ({ nak }) => {
  const { id } = useParams(0);
  const navigaate = useNavigate();
  const data = nak.find((i) => i.id === parseInt());
  return <div></div>;
};

export default Card;
