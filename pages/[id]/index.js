import styled from "styled-components";
import { Header } from "@/components/StyledHeader";
import { StyleBox } from "@/components/StyledBox";
import { StyleList } from "@/components/StyledList";
import { useRouter } from "next/router";
import Card from "@/components/Card";
import { DeleteButton } from "@/components/StyledDeleteButton";
import { StyledLink } from "@/components/StyledLink";
import { activities } from "@/lib/users/activities/activities";

const StyleDetailMain = styled.main`
  background-color: beige;
  justify-content: center;
  align-items: center;
`;
const FixedLink = styled(StyledLink)`
  margin: auto;
  width: 50%;
  text-align: center;
  padding: 10px;
  border: 1px solid white;
  border-radius: 0.75rem;
  background-image: linear-gradient(yellow, lightblue);
  font-weight: bold;
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
        <FixedLink href={`/${activity.id}/edit`}>Edit</FixedLink>

        <DeleteButton type="button" onClick={() => handleDeleteActivity(id)}>
          Delete
        </DeleteButton>
      </StyleList>
    </StyleDetailMain>
  );
}
