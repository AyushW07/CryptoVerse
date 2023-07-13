import React, { Fragment, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptoQuery } from "../../services/cryptoAPI";

function Crypto() {
  const { data: cryptoList, isfetching } = useGetCryptoQuery();
  const [crypto, setCrypto] = useState(cryptoList?.data?.coins);

  console.log(crypto);

  return (
    <Fragment>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {crypto.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img src={currency.iconUrl} className="crypto-image" />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
}

export default Crypto;
