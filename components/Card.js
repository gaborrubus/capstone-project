import Link from "next/link.js";
import styled from "styled-components";
import { StyledImage } from "./StyledImage.js";
import { Box } from "./StyledSmallBox.js";

const Article = styled.article`
  border: 3px solid purple;
  border-radius: 0.8rem;
  padding: 1rem;
  margin: 1rem;
  padding: 1rem;
  width: screen;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 10rem;
  width: screen;
  margin: 0rem;
  padding: 1rem;
`;

const Figure = styled.figure`
  position: relative;
  width: screen;
  margin: 0rem;
  padding: 0.5rem;
`;

export default function Card({
  taskNumber,
  name,
  image,
  points,
  description,
  id,
}) {
  return (
    <Article>
      <Figure>
        <Box>{taskNumber}</Box>
        <ImageContainer>
          <StyledImage
            src={image}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            alt=""
          />
        </ImageContainer>
        <p>{name}</p>
      </Figure>
      <Box>{points}points</Box>

      <p>{description}</p>
    </Article>
  );
}
