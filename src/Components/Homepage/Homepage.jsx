import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptoQuery } from "../../services/cryptoAPI";
import News from "../News/News";
import Crypto from "../Crypto/Crypto";

function Homepage() {
  const { data, isfetching } = useGetCryptoQuery(10);
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
          <Statistic
            title="Total Cryptocurrencies"
            // value={globalStat.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            // value={millify(globalStat.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total MarketCap"
            // value={millify(globalStat.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24Hr Volume"
            // value={millify(globalStat.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market"
            // value={millify(globalStat.totalMarkets)}
          />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Typography.Title>
        <Typography.Title level={3} className="show-more">
          <Link to="/crypto">Show More</Link>
        </Typography.Title>
      </div>
      <Crypto simplified={true} />

      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">
          Latest Crypto News
        </Typography.Title>
        <Typography.Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Typography.Title>
      </div>
      <News simplified />
    </div>
  );
}

export default Homepage;
