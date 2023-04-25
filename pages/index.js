import AllActivities from "@/components/AllActivities";
import { activities } from "@/db/users/activities/activities";
import Link from "next/link";
import styled from "styled-components";
import { Header } from "@/components/StyledHeader";

const StyleMain = styled.main`
  margin-top: 7rem;
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
  text-color: green;
`;

// const StyledBox = styled.box`
//   text-align: center;
//   background-color: white;
//   border: 3px solid blue;
// `;

export default function HomePage() {
  return (
    <StyleMain>
      <Header>Adventure list</Header>
      <h2 className="actions">
        {activities.map((activity) => {
          return (
            <li key={activity.id}>
              <p>{activity.name}</p>
              {/* <p>{activity.description}</p> */}
              {/* <Link href=".db/users/activities/activities.js">
                {activity.name}
              </Link> */}
            </li>
          );
        })}
      </h2>
    </StyleMain>
  );
}
