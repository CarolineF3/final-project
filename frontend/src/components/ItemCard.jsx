import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemCard = ({ image, name, price, _id }) => {
  return (
    <Card>
      <ImgLink to={`products/${_id}`}>
        <Img src={image} alt='' />
        <Name>{name}</Name>
      </ImgLink>
      <Price>{price} SEK</Price>
    </Card>
  );
};

export default ItemCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%;
  margin-bottom: 2.143em;

  @media (min-width: 998px) {
    width: 25%;
  }
`;

const ImgLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: #a7a7a7;
    transition-delay: 0.1s;
  }
`;

const Img = styled.img`
  width: 90%;

  &:hover {
    filter: brightness(90%);
    transition: 0.2s ease-in-out;
  }
`;

const Name = styled.p`
  margin: 10px 0 5px 0;
  color: #373737;
  font-size: 1rem;
  letter-spacing: 0.08em;

  &:hover {
    color: #a7a7a7;
    transition-delay: 0.1s;
  }
`;

const Price = styled.p`
  margin: 0;
  font-size: 0.625;
  letter-spacing: 0.08em;
  color: #a7a7a7;
`;
