import NoteForm from "./NoteForm";
import { NoteData, Tag } from "../../types";

export type CreateNoteProps = {
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
  onSubmit: (data: NoteData) => void;
};

const CreateNote = ({
  createTag,
  availableTags,
  onSubmit,
}: CreateNoteProps) => {
  return (
    <div className="container py-5">
      <h1>Yeni Not Oluştur</h1>
      <NoteForm
        createTag={createTag}
        onSubmit={onSubmit}
        availableTags={availableTags}
      />
    </div>
  );
};

export default CreateNote;
