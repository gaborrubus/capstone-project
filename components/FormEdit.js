import styled from "styled-components";
import { FixedLink } from "./FixedLink";
import { StyledButton } from "@/components/StyledButton";
import { activities } from "@/lib/users/activities/activities";
import { BackLink } from "./StyledBackLink";
import { StyledLink } from "./StyledLink";

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

export default function FormActivityForEdit({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>Activity name </Label>
      <Input name="name" type="text" required />
      <Label>Activity points </Label>
      <Input name="points" type="numbers" min={0} max={100} required />
      <Label>Activity description </Label>
      <Textarea name="description" type="text" cols="30" rows="10" required />
      <StyledButton type="submit">Save</StyledButton>
      <p>
        <FixedBackLink href={`/allActivities`}>Back</FixedBackLink>
      </p>
    </FormContainer>
  );
}
