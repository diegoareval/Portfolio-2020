import React from "react";
import styled from "@emotion/styled";
import backgroundImage from "../../assets/Web_Final_Col.jpg";
import NavComponent from "../Nav";
import FooterComponent from "../Footer";
import { keyframes } from "@emotion/core";

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}`;

const LandingPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImage});
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const HeroTextContainer = styled.div`
  animation: ${fadeInAnimation} ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  height: 80%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  color: #493a37;
  margin-left: 18%;
`;

const Heading = styled.h1`
  margin-top: 30%;
  font-size: 6em;
`;

const SubHeading = styled.h2`
  font-size: 3em;
`;

function LandingPage() {
  return (
    <LandingPageContainer>
      <NavComponent />
      <HeroTextContainer>
        <Heading>HELLO.</Heading>
        <SubHeading>my name's Chris.</SubHeading>
      </HeroTextContainer>
      <FooterComponent />
    </LandingPageContainer>
  );
}

export default LandingPage;
