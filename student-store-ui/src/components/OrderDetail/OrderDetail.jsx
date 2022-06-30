import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import "./OrderDetail.css";
import NotFound from "../NotFound/NotFound";
import OrderDisplay from "../OrderDisplay/OrderDisplay";

export default function OrderDetail(props) {
  const [order, setOrder] = useState({});

  // Extract productId parameter from the url
  let { orderId } = useParams();

  useEffect(() => {
    // Makes axios get request to get individual product info
    async function getInfo() {
      props.setIsFetching(true);
      await axios
        .get(`http://localhost:3001/orders/${orderId}`)
        .then((response) => {
          //
          setOrder(response.data.order);
          props.setIsFetching(false);
          //
        })
        .catch((error) => {
          <NotFound />;
        });
    }
    getInfo();
  }, []);

  if (props.isFetching) {
    // Renders loading page if still fetching
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <OrderDisplay
        id={order.id}
        name={order.name}
        email={order.email}
        order={order.order}
        total={order.total}
        products={props.products}
        time={order.createdAt}
        showDescription={true}
      />
    );
  }
}
