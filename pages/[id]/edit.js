import FormEdit from "@/components/FormEdit.js";
import { useRouter } from "next/router";
import { Header } from "@/components/StyledHeader";
import { activities } from "@/lib/users/activities/activities";
import styled from "styled-components";
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
  border: 1px solid lightblue;
  border-radius: 0.75rem;
  background-color: white;
`;

export default function EditActionItemPage({ handleEditActivity }) {
  const router = useRouter();
  const { id } = router.query;
  const activity = activities.find((activity) => activity.id === id);
  console.log(activity);
  console.log(id);
  console.log(activities);
  return (
    <>
      <Header>Edit Adventure</Header>
      <FormEdit
        onSubmit={(editedActivity) =>
          handleEditActivity(editedActivity, id, activity)
        }
        activity={activity}
      />
    </>
  );
}
