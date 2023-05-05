import styled from "styled-components";
import { Header } from "@/components/StyledHeader";
import { StyleBox } from "@/components/StyledBox";
import { StyleList } from "@/components/StyledList";
import { useRouter } from "next/router";
import Card from "@/components/Card";
import { DelButton } from "@/components/StyledDELButton";

const StyleDetailMain = styled.main`
  background-color: beige;
  justify-content: center;
  align-items: center;
`;

export default function DetailedPage({ activities, handleDeleteActivity }) {
  const router = useRouter();
  const id = router.query.id;

  const activity = activities.find((activity) => activity.id === id);

  if (!activity) {
    return <h1>Loading...</h1>;
  }

  return (
    <StyleDetailMain>
      <Header>Adventure</Header>
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
        <DelButton type="button" onClick={() => handleDeleteActivity(id)}>
          Delete
        </DelButton>
      </StyleList>
    </StyleDetailMain>
  );
}
