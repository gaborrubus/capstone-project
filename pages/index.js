import { activities } from "@/db/users/activities/activities";
// import Link from "next/link";
import styled from "styled-components";
import { Header } from "@/components/StyledHeader";
import { StyleBox } from "@/components/StyledBox";
import { StyleList } from "@/components/StyledList";

const StyleMain = styled.main`
  margin-top: 7rem;
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
  text-color: green;
`;

export default function HomePage() {
  return (
    <StyleMain>
      <Header>Adventure list</Header>
      <h2 className="actions">
        {activities.map((activity) => {
          return (
            <>
              <StyleBox>
                <div>
                  <StyleList>
                    <li key={activity.id}>
                      <p>{activity.name}</p>
                    </li>
                  </StyleList>
                </div>
              </StyleBox>
            </>
          );
        })}
      </h2>
    </StyleMain>
  );
}
