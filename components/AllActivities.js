import { activities } from "@/db/users/activities/activities";
import styled from "styled-components";
import Link from "next/link";

const Article = styled.article`
  border: 10px solid green;
  border-radius: 0.6rem;
  padding: 0.5rem;
`;
const ScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
const Figure = styled.figure`
  position: relative;
  margin: 0;
`;

const Anchor = styled.a`
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export default function AllActivities({ id, name, description }) {
  return (
    <Article>
      <p>name: {activities.name}</p>
      <p>description: {activities.description}</p>
      <Link href={`places/${id}`} passHref legacyBehavior>
        <Anchor>
          <ScreenReaderOnly>More </ScreenReaderOnly>
        </Anchor>
      </Link>
    </Article>
  );
}
