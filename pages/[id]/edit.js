import FormEdit from "@/components/FormEdit.js";
import { useRouter } from "next/router";
import { Header } from "@/components/StyledHeader";
import { activities } from "@/lib/users/activities/activities";

export default function EditActionItemPage({ handleEditActivity }) {
  const router = useRouter();
  const { id } = router.query;
  const activity = activities.find((activity) => activity.id === id);

  return (
    <>
      <Header>Edit Adventure</Header>
      <FormEdit
        onSubmit={(editedActivity) => handleEditActivity(editedActivity, id)}
        activity={activity}
      />
    </>
  );
}
