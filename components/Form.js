import styled from "styled-components";
import { StyledButton } from "./StyledButton.js";
import { Header } from "./StyledHeader.js";
import { activities } from "@/lib/users/activities/activities.js";
import { BackLink } from "./StyledBackLink.js";
import { StyledLink } from "./StyledLink.js";

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
  border: 3px solid lightblue;
  border-radius: 0.5rem;
`;

const Textarea = styled.textarea`
  font-family: inherit;
  border: 3px solid lightblue;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const Label = styled.label`
  font-weight: bold;
  background-color: white;
`;

const FixedBackLink = styled(StyledLink)`
  position: fixed;
  bottom: 30px;
  left: 30px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
`;

export default function Form({ onSubmit, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor="taskNumber">Activity number</Label>
      <Input
        id="taskNumber"
        name="taskNumber"
        type="text"
        placeholder="0"
        defaultValue={defaultData?.taskNumber}
        required
      />
      <Label htmlFor="image-url">Image Url</Label>
      <Input
        id="image-url"
        name="image"
        type="image-url"
        placeholder="https://images.unsplash.com/photo-1508004680771-708b02aabdc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        defaultValue={defaultData?.image}
        required
      />

      <Label htmlFor="formName">Activity name</Label>
      <Input
        id="name"
        name="name"
        placeholder="Enter activity name"
        type="text"
        defaultValue={defaultData?.name}
        required
      />
      <Label htmlFor="points">Activity points</Label>
      <Input
        id="points"
        name="points"
        type="number"
        min={0}
        max={100}
        placeholder="0 points"
        required
      />
      <Label htmlFor="description">Activity description</Label>
      <Textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        placeholder="Enter activity description"
        defaultValue={defaultData?.description}
        required
      ></Textarea>
      <StyledButton type="submit">Add activity</StyledButton>
      <FixedBackLink href={`/allActivities`}>Back</FixedBackLink>
    </FormContainer>
  );
}
