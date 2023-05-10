import styled from "styled-components";
import { Header } from "@/components/StyledHeader";
import { StyledButton } from "@/components/StyledButton";
import { activities } from "@/lib/users/activities/activities";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
  background-color: beige;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
  background-color: beige;
`;

export default function FormActivityForEdit({ onSubmit, id }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Header>Edit activity</Header>
      <Label>Activity name </Label>
      <Input name="name" required />
      <Label>Activity points </Label>
      <Input name="points" min={0} max={100} required />
      <Label>Activity description </Label>
      <Textarea name="description" cols="30" rows="10" />
      <StyledButton type="submit">Save</StyledButton>
    </FormContainer>
  );
}
// initialValues={{
//   name: activity.name,
//   points: activity.points,
//   description: activity.description,
// }}
