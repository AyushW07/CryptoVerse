import React, { Fragment, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptoQuery } from "../../services/cryptoAPI";
import { useEffect } from "react";

function Crypto({ simplified }) {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isfetching } = useGetCryptoQuery(count);
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState("");

  // console.log(crypto);

  useEffect(() => {
    const fileredData = cryptoList?.data?.coins?.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );

    setCrypto(fileredData);
  }, [cryptoList, search]);

  if (isfetching) {
    return "Loading...";
  }

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {crypto?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img src={currency.iconUrl} className="crypto-image" />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Crypto;
