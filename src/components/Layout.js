import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";

import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
  } from "./layout.module.css";
  
function Layout({ pageTitle, children }) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                title
                description
                }
            }
        }
    `);
  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link className={navLinkText} to="/">
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link className={navLinkText} to="/aboutme">
            About
          </Link>
        </li>
        <li className={navLinkItem}>
            <Link className={navLinkText} to="/blog">
                Blog
            </Link>
        </li>
      </ul>
    </nav>

    <main>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
    <div>Copyright All Rights</div>
    </div>
  );
}

export default Layout;


// 원래 gnb
// <div style={{ display: "flex", gap: 10 }}>
// <Link to="/">홈</Link>
// <Link to="/about">어바웃</Link>
// <Link to="/test">테스트</Link>
// <Link to="/test-space">테스트-스페이스</Link>
// </div>