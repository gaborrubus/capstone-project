import styled from "styled-components";
import { StyledButton } from "@/components/StyledButton";
import { StyledLink } from "./StyledLink";
import { activities } from "@/lib/users/activities/activities";
// import { BackLink } from "./StyledBackLink";
// import { FixedLink } from "./FixedLink";

const FormContainer = styled.form`
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

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border-radius: 0.5rem;
  border: 3px solid lightblue;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 3px solid lightblue;
`;

const Label = styled.label`
  font-weight: bold;
  background-color: white;
  padding: 0.5rem;
`;

const FixedBackLink = styled(StyledLink)`
  position: fixed;
  bottom: 30px;
  left: 30px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
`;

export default function FormEdit({ onSubmit, activity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>Activity name </Label>
      <Input
        name="name"
        type="text"
        required
        defaultValue={activity ? activity.name : ""}
      />

      <Label>Activity points </Label>
      <Input
        name="points"
        type="number"
        min={0}
        max={100}
        required
        defaultValue={activity ? activity.points : ""}
      />
      <Label>Activity description </Label>
      <Textarea
        name="description"
        type="text"
        cols="30"
        rows="10"
        required
        defaultValue={activity ? activity.description : ""}
      />
      <StyledButton type="submit">Save</StyledButton>
      <p>
        <FixedBackLink href={`/allActivities`}>Back</FixedBackLink>
      </p>
    </FormContainer>
  );
}
