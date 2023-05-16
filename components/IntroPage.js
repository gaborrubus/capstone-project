import React, { useEffect, useState } from "react";
import { StyledImage } from "./StyledImage";
import styled from "styled-components";
import Link from "next/link";
import { StyleBox } from "./StyledBox";

const ImageContainer = styled.div`
  position: relative;
  height: 25rem;
  margin: 0rem;
  padding: 1rem;
`;

const PlayLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border: none;
  background: lightcyan;
  font-weight: bold;
  font-size: medium;
  border-radius: 50%;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: fixed;
  bottom: calc(20%);
  left: 50%;
  transform: translateX(-50%);
  text-decoration: none;
  color: black;
`;

const SettingsLink = styled(Link)`
  display: block;
  width: 80px;
  height: 80px;
  border: none;
  background: lightcyan;
  font-weight: bold;
  font-size: medium;
  border-radius: 50%;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: fixed;
  bottom: calc(5%);
  left: 50%;
  transform: translateX(-50%);
`;

function IntroPage() {
  return (
    <div className="intro-page">
      <StyleBox>Wheel of Friendly Adventures</StyleBox>
      <ImageContainer>
        <StyledImage
          src="/wheel-of-fortune.png"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt=""
        />
      </ImageContainer>

      <PlayLink href={`/wheelPage`}>Play</PlayLink>

      <SettingsLink href={`/allActivities`} aria-label="All Activities">
        <StyledImage src="/sign.png" height="60" width="60" alt="" />
      </SettingsLink>
    </div>
  );
}

export default IntroPage;
