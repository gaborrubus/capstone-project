import GlobalStyle from "../styles";
import { activities } from "@/lib/users/activities/activities";
import { useState } from "react";
import { useRouter } from "next/router";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [activity, setActivity] = useState(activities);
  const router = useRouter();

  function handleAddActivity(newActivity) {
    setActivity([...activity, { ...newActivity, id: uid() }]);
    console.log(setActivity);
    router.push("/");
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        handleAddActivity={handleAddActivity}
        activities={activity}
      />
    </>
  );
}
