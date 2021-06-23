import React, { useEffect, useState } from "react";

export const useFetchForShop = (query) => {
  const [itemList, setItemList] = useState([]);
  let API_URL = `http://localhost:8080/items`;
  if (query) {
    API_URL += `?category=${query} `;
  }

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setItemList(data.items))
      .catch((err) => alert(`Error while loading items:${err}`));
  };

  return { itemList };
};
