import React from "react";
import { Hero, HeroBody, Container, Columns, Column, Button } from "bloomer";
import ParrotPic from '../../../../assets/images/parrot-captain.svg'
import styled from '@emotion/styled'
import { Link } from "react-router-dom";
import LandingBody from "./LandingBody";

const ParrotImg = styled.img`
  max-width: 50%;
`

const FrontPara = styled.p`
  font-size: 1.2rem;
  margin: 1em 0;
`

const SiteTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  margin: 1.5em 0;
`

const LandingIndex = () => {
  return (
    <Hero isSize="small">
      <HeroBody>
        <Columns>
          <Column isSize={{ mobile: 12, default: 6 }}>
            <Container hasTextAlign="centered">
              <ParrotImg src={ParrotPic}/>
            </Container>
          </Column>
          <Column isSize={{ mobile: 12, default: 6 }}>
            <Container hasTextAlign="centered">
              <SiteTitle className="is-size-2">Smidgeon Analytics</SiteTitle>
              <FrontPara>A small, dead-simple, and open source analytics tool that tracks page views on your website or blog.</FrontPara>
              <FrontPara>Include the script, and let ‘er rip.</FrontPara>
              <Link to="/websites"><Button isColor="info">Start Now</Button></Link>
            </Container>
          </Column>
        </Columns>
        <LandingBody/>
      </HeroBody>
    </Hero>
  );
};

export default LandingIndex;
