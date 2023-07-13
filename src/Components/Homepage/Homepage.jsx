import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptoQuery } from "../../services/cryptoAPI";

function Homepage() {
  const { data, isfetching } = useGetCryptoQuery();
  const globalStat = data?.data?.stats;

  console.log(data);

  if (isfetching) {
    return "Loading...";
  }

  return (
    <div>
      <Typography.Title level={2} className="heading">
        Global Crypto Stats
      </Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStat.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total MarketCap" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24Hr Volume" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market" value="5" />
        </Col>
      </Row>
    </div>
  );
}

export default Homepage;
