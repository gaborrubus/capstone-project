import styled from "styled-components";
import { Header } from "@/components/StyledHeader";
import { StyleBox } from "@/components/StyledBox";
import { StyleList } from "@/components/StyledList";
import { StyledLink } from "@/components/StyledLink";
import Link from "next/link";

const StyleMain = styled.main`
  background-color: beige;
  justify-content: center;
  align-items: center;
`;

const FixedLink = styled(StyledLink)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-image: linear-gradient(yellow, orange);
`;

export default function HomePage({ activities, handleDeleteActivity }) {
  return (
    <StyleMain>
      <Header>Adventure list</Header>

      {activities.map((activity) => {
        return (
          <StyleList key={activity.id}>
            <StyleBox>
              <li>
                <Link href={`/activities/${activity.id}`}>{activity.name}</Link>
              </li>
              <FixedLink href="/create">Add</FixedLink>
            </StyleBox>
          </StyleList>
        );
      })}
    </StyleMain>
  );
}
