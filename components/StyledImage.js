import Image from "next/image.js";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  object-fit: cover;
  width: 200px;
  height: 300px;
  margin-top: 1rem;
  margin-right: 3rem;
  border-radius: 0.8rem;
`;
