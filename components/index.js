export { default as Homepage } from "./Homepage";
export { default as Navbar } from "./Navbar";
export { default as News } from "./News";
export { default as Cryptocurriencies } from "./Cryptocurriencies";
export { default as Exchanges } from "./Exchanges";
export { default as CryptoDetails } from "./CryptoDetails";

// import React, { useState } from "react";
// import millify from "millify";
// import { Link } from "react-router-dom";
// import { Card, Row, Col, Input } from "antd";

// import { useGetCryptosQuery } from "../services/cryptoApi";

// const Cryptocurrencies = () => {
//   const { data: cryptosList, isFetching } = useGetCryptosQuery();
//   const [cryptos, setcryptos] = useState(cryptosList?.data?.coins);
//   console.log(cryptos);

//   return <div>cryptocurrencies</div>;
// };

// export default Cryptocurrencies;
