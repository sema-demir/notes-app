import React from "react";
import NoteForm from "./NoteForm";

const CreateNote = () => {
  return (
    <div className="container py-5">
      <h1>Yeni Not Oluştur</h1>
      <NoteForm />
    </div>
  );
};

export default CreateNote;
