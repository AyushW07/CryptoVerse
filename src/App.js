import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Crypto from "./Components/Crypto/Crypto";
import CryptoDetails from "./Components/Crypto/CryptoDetails";
import News from "./Components/News/News";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
            </Routes>
            <Routes>
              <Route exact path="/crypto" element={<Crypto />} />
            </Routes>
            <Routes>
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
            </Routes>
            <Routes>
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div
          className="footer"
          level={5}
          style={{ color: "white", textAlign: "left" }}
        >
          <Typography.Title style={{ textAlign: "center" }}>
            CryptoVerse <br />
            All right resesrved. <br />
            &copy; Ayush
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/crypto">Cryptocurrencies</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
