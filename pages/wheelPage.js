import React, { useState } from "react";
import { useEffect } from "react";
import { StyledImage } from "@/components/StyledImage";
import styled from "styled-components";
import { StyleBox } from "@/components/StyledBox";
import { StyledLink } from "@/components/StyledLink";
import Link from "next/link";
import { activities } from "@/lib/users/activities/activities";

const ImageContainer = styled.div`
  position: relative;
  height: 25rem;
  margin: 0rem;
  padding: 1rem;
`;

const PlayButton = styled.button`
  display: block;
  width: 80px;
  height: 80px;
  border: none;
  background: lightcyan;
  font-weight: bold;
  font-size: large;
  border-radius: 50%;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: fixed;
  bottom: calc(5%);
  left: 50%;
  transform: translateX(-50%);
`;
const BoxLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const FixedBackLink = styled(StyledLink)`
  position: fixed;
  bottom: 30px;
  left: 30px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
`;

function Wheel() {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    if (spin) {
      const spinTimeout = setTimeout(() => {
        setSelectedActivity(
          activities[Math.floor(Math.random() * activities.length)]
        );
        setSpin(false);
      }, 5000);

      return () => clearTimeout(spinTimeout);
    }
  }, [spin]);

  const handleSpinClick = () => {
    setSelectedActivity(null);
    setSpin(true);
  };

  return (
    <div>
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
      <PlayButton onClick={handleSpinClick} disabled={spin}>
        {spin ? "Spinning..." : "Spin the wheel!"}
      </PlayButton>
      <StyleBox>
        {selectedActivity && <p>Your next Adventure is:</p>}
        <BoxLink href={`/${selectedActivity?.id}`}>
          {selectedActivity?.name}
        </BoxLink>
      </StyleBox>
      <FixedBackLink href={`/`}>Back</FixedBackLink>
    </div>
  );
}

export default Wheel;
