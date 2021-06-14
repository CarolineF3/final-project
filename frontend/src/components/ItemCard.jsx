import React from "react";
import styled from "styled-components";

const ItemCard = ({ image, name, price }) => {
  console.log("HEjsan");
  console.log(name, price);
  return (
    <Card>
      <Img src={image} alt='' />
      <Name>{name}</Name>
      <Price>{price}</Price>
    </Card>
  );
};

export default ItemCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-bottom: 30px;
`;

const Img = styled.img`
  width: 90%;
`;

const Name = styled.p`
  font-size: 12px;
  margin: 10px 0 5px 0;
`;

const Price = styled.p`
  font-size: 10px;
  margin: 0;
`;
