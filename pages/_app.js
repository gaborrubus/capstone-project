import GlobalStyle from "../styles";
import { activities } from "@/lib/users/activities/activities";
import { useState } from "react";
import { useRouter } from "next/router";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [activity, setActivity] = useState(activities);
  const [updatedActivity, setUpdatedActivity] = useState(null);
  const [activityId, setActivityId] = useState(null);
  const router = useRouter();

  function handleAddActivity(newActivity) {
    setActivity([...activity, { ...newActivity, id: uid() }]);
    router.push("/");
  }
  function handleDeleteActivity(idToRemove) {
    setActivity(activities.filter((x) => x.id !== idToRemove));
    router.push("/");
  }

  function handleEditActivity(id) {
    // const { id, name, points, description } = editedActivity;

    // const foundActivity = activity.find((activity) => activity.id === id);
    // if (!foundActivity) {
    //   console.log(`Activity with id ${id} not found`);
    //   return;
    // }
    // const updatedActivity = {
    //   ...foundActivity,
    //   name,
    //   points,
    //   description,
    // };
    // const updatedActivities = activity.map((activity) =>
    //   activity.id === id ? updatedActivity : activity
    // );

    // setActivity(updatedActivities);
    // setUpdatedActivity(updatedActivity);
    // router.push(`/activity/${id}`);
    setActivityId(id);
    console.log(handleEditActivity);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        handleAddActivity={handleAddActivity}
        handleDeleteActivity={handleDeleteActivity}
        handleEditActivity={handleEditActivity}
        activities={activity}
        updatedActivity={updatedActivity}
      />
    </>
  );
}
