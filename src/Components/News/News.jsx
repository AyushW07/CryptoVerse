import React from "react";
import { Select, Row, Col, Avatar, Typography, Card } from "antd";
import moment from "moment";

import { useGetNewsQuery } from "../../services/newsAPI";

function News({ simplified }) {
  const { data: cryptoNews } = useGetNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 10 : 100,
  });

  if (!cryptoNews?.value) {
    return "Loading...";
  }

  console.log(cryptoNews);

  return <div>News</div>;
}

export default News;
