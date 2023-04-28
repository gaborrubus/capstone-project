import styled from "styled-components";
import { Header } from "@/components/StyledHeader";
import { StyleBox } from "@/components/StyledBox";
import { StyleList } from "@/components/StyledList";
import { activities } from "@/lib/users/activities/activities";
// import Link from "next/link";

const StyleMain = styled.main`
  margin-top: 7rem;
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function HomePage() {
  return (
    <StyleMain>
      <Header>Adventure list</Header>
      <h2 className="actions">
        {activities.map((activity) => {
          return (
            <StyleBox key={activity.id}>
              <StyleList>
                <li>
                  <p>{activity.name}</p>
                </li>
              </StyleList>
            </StyleBox>
          );
        })}
      </h2>
    </StyleMain>
  );
}
