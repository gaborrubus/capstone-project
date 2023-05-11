import styled from "styled-components";
import { Header } from "@/components/StyledHeader";
import { StyleBox } from "@/components/StyledBox";
import { StyleList } from "@/components/StyledList";
import { StyledLink } from "@/components/StyledLink";
import Link from "next/link";

const StyleMain = styled.main`
  background-color: white;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-block-end: 4rem;
  padding-block-start: 4rem;
`;

const FixedLink = styled(StyledLink)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: DarkSeaGreen;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
`;
const FixedBackLink = styled(StyledLink)`
  position: fixed;
  bottom: 30px;
  left: 30px;
  background-color: white;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
`;

const BoxLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export default function HomePage({ activities }) {
  return (
    <StyleMain>
      <Header>Adventure List</Header>
      {activities.map((activity) => {
        return (
          <StyleList key={activity.id}>
            <StyleBox>
              <li>
                <BoxLink href={`/${activity.id}`}>{activity.name}</BoxLink>
              </li>

              <FixedLink href="/create">Add</FixedLink>
            </StyleBox>
          </StyleList>
        );
      })}
      <p>
        <FixedBackLink href={`/`}>Back</FixedBackLink>
      </p>
    </StyleMain>
  );
}
