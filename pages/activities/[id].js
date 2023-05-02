import styled from "styled-components";
import { Header } from "@/components/StyledHeader";
import { StyleBox } from "@/components/StyledBox";
import { StyleList } from "@/components/StyledList";
import { activities } from "@/lib/users/activities/activities";
import { useRouter } from "next/router";
import Card from "@/components/Card";

const StyleDetailMain = styled.main`
  margin-top: 7rem;
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function DetailedPage() {
  const router = useRouter();
  const id = router.query.id;

  const activity = activities.find((activity) => activity.id === id);

  if (!activity) {
    return <h1>Loading...</h1>;
  }

  return (
    <StyleDetailMain>
      <Header>Adventure list</Header>
      <h2 className="actions">
        <StyleList>
          <StyleBox key={activity.id}>
            <li>
              <Card
                taskNumber={activity.taskNumber}
                name={activity.name}
                image={activity.image}
                points={activity.points}
                description={activity.description}
                id={activity.id}
              />
            </li>
          </StyleBox>
        </StyleList>
      </h2>
    </StyleDetailMain>
  );
}
