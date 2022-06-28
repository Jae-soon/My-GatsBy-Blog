import { StaticImage } from "gatsby-plugin-image";
import * as React from "react"
import Layout from "../components/Layout";

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <img
          style={{ display: "block", width: "100%" }} // 이미지 크기의 너비가 적당하게 출력
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/clifford.jpg"
        />
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </main>
  );
};

export default IndexPage


// 원래 gnb
// <header style={{display: "flex"}}>
// <Link to="/" style={{padding:10}}>로고</Link>
// <div style={{flexGrow:1}}></div>
// <Link to="/test" style={{padding:10}}>테스트</Link>
// <Link to="/test-space" style={{padding:10}}>테스트 스페이스</Link>
// </header>