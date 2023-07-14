import React from "react";
import { Row, Col, Typography, Card } from "antd";

import { useGetNewsQuery } from "../../services/newsAPI";

function News({ simplified }) {
  const { data: cryptoNews } = useGetNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 6 : 12,
  });

  if (!cryptoNews?.value) {
    return "Loading...";
  }

  // console.log(cryptoNews);

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Typography.Title className="news-title" level={4}>
                  {news.name}
                </Typography.Title>
                <img src={news?.image?.thumbnail?.contentUrl} alt="News" />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default News;
