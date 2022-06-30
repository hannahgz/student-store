import "./Orders.css";
import OrderDisplay from "../OrderDisplay/OrderDisplay";
import SearchBar from "../SearchBar/SearchBar";

export default function Orders(props) {
  return (
    <div className="orders">
      <h1 className="order-title"> Orders</h1>
      <p className="order-title">
        Click each order to learn more and get a description!
      </p>
      <p className="order-title">
        Use the search bar to filter orders by email.
      </p>
      <SearchBar
        searchBar={props.searchBar}
        handleOnSearchBarChange={props.handleOnSearchBarChange}
      />
      <div className="order-grid">
        {props.orders.map((order) => {
          return (
            <OrderDisplay
              id={order.id}
              name={order.name}
              email={order.email}
              order={order.order}
              total={order.total}
              time={order.createdAt}
              products={props.products}
              showDescription={false}
            />
          );
        })}
      </div>
    </div>
  );
}
