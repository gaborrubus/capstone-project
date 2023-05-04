import Form from "../components/Form.js";
import { StyleList } from "@/components/StyledList.js";
import { Header } from "@/components/StyledHeader.js";

export default function CreateActionItemPage({ handleAddActivity }) {
  return (
    <>
      <Header>Add Adventure</Header>
      <StyleList />
      <Form onSubmit={handleAddActivity} />
    </>
  );
}
