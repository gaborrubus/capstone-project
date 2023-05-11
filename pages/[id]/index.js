import styled from "styled-components";
import { Header } from "@/components/StyledHeader";
import { StyleBox } from "@/components/StyledBox";
import { StyleList } from "@/components/StyledList";
import { useRouter } from "next/router";
import Card from "@/components/Card";
import { DeleteButton } from "@/components/StyledDeleteButton";
import { StyledLink } from "@/components/StyledLink";

const StyleDetailMain = styled.main`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  gap: 0.5rem;
  background-color: white;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-block-end: 4rem;
  padding-block-start: 4rem;
`;
const FixedLink = styled(StyledLink)`
  margin: auto;
  width: 50%;
  text-align: center;
  padding: 10px;
  border-radius: 0.75rem;
  background-color: white;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
`;

const FixedBackLink = styled(StyledLink)`
  position: fixed;
  bottom: 30px;
  left: 30px;
  background-color: white;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
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

        <span>
          <FixedLink href={`/${activity.id}/edit`}>Edit</FixedLink>
        </span>

        <span>
          <DeleteButton type="button" onClick={() => handleDeleteActivity(id)}>
            Delete
          </DeleteButton>
        </span>
        <span>
          <FixedBackLink href={`/allActivities`}>Back</FixedBackLink>
        </span>
      </StyleList>
    </StyleDetailMain>
  );
}
