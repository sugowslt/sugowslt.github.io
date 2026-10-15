import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import reset from "styled-reset";

const ResumeStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "SUIT";
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url("/fonts/SUIT-Variable.woff2") format("woff2");
  }

  @font-face {
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/SpaceMono-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url("/fonts/SpaceMono-Bold.ttf") format("truetype");
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    color-scheme: light;
  }

  body {
    margin: 0;
    background: #fcfcfc;
    color: #000;
    font-family: "SUIT", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a:focus-visible {
    outline: 2px solid #5249f4;
    outline-offset: 4px;
  }

  ::selection {
    background: rgba(73, 122, 244, 0.2);
  }
`;

const Main = styled.main`
  width: 100%;
  padding-bottom: 100px;
  letter-spacing: -0.02em;

  @media (max-width: 767px) {
    padding-bottom: 60px;
  }
`;

const ResumeLayout = ({ children }) => (
  <>
    <Helmet htmlAttributes={{ lang: "ko" }}>
      <link
        rel="preload"
        href="/fonts/SUIT-Variable.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </Helmet>
    <ResumeStyles />
    <Main>{children}</Main>
  </>
);

export default ResumeLayout;
