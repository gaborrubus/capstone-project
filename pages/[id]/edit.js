import { StyleList } from "@/components/StyledList.js";
import { Header } from "@/components/StyledHeader.js";
import FormActivityForEdit from "@/components/FormEdit.js";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function EditActionItemPage({ handleEditActivity }) {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (id) {
      handleEditActivity(id);
    }
  }, [id]);

  return (
    <>
      <Header>Edit Adventure</Header>
      <StyleList />
      <FormActivityForEdit onSubmit={handleEditActivity} id={id} />
    </>
  );
}
