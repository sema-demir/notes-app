import React from "react";
import NoteForm from "./NoteForm";
import { Tag } from "../../types";

export type CreateNoteProps = {
  createTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const CreateNote = ({ createTag, availableTags }: CreateNoteProps) => {
  return (
    <div className="container py-5">
      <h1>Yeni Not Oluştur</h1>
      <NoteForm createTag={createTag} availableTags={availableTags} />
    </div>
  );
};

export default CreateNote;
