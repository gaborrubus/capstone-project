
import { activities } from "@/lib/users/activities/activities";

import styled from "styled-components";
import Link from "next/link";

export default function AllActivities({ id, name, description }) {
  return (
    <>
      <p>name: {activities.name}</p>
      <p>description: {activities.description}</p>
    </>
  );
}
