import styled from "styled-components";
import { Header } from "@/components/StyledHeader";
import { StyleBox } from "@/components/StyledBox";
import { StyleList } from "@/components/StyledList";
import { activities } from "@/lib/users/activities/activities";
import { StyledImage } from "@/components/StyledImage";
import Link from "next/link";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import { useState } from "react";
import Card from "@/components/Card";

const StyleDetailMain = styled.main`
  margin-top: 7rem;
  background-color: beige;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 15rem;
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

{
  /* <p>{activity.name}</p>
<ImageContainer>
  <StyledImage src={activities.image} alt="" />
</ImageContainer>
<p>{activity.description}</p> */
}
