import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import CreateNote from "./components/Form/CreateNote";
import { NoteData, RawNote, Tag } from "./types";
import { useLocaleStorage } from "./useLocaleStorage";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [notes, setNotes] = useLocaleStorage<RawNote[]>("notes", []);
  const [tags, setTags] = useLocaleStorage<Tag[]>("tags", []);
  const addNote = ({ tags, ...data }: NoteData) => {
    setNotes((prev) => {
      return [
        ...prev,
        {
          ...data,
          id: uuidv4(),
          //elemanın etiketlerini dön ve diziye aktar
          //tagIds: tags.map((tag) => tag.id),
        },
      ];
    });
  };
  console.log(notes);
  const createTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage availableTags={tags} />} />
        <Route
          path="/new"
          element={
            <CreateNote
              onSubmit={addNote}
              createTag={createTag}
              availableTags={tags}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
