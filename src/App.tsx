import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import CreateNote from "./components/Form/CreateNote";
import { Tag } from "./types";
import { useLocaleStorage } from "./useLocaleStorage";

function App() {
  const [tags, setTags] = useLocaleStorage<Tag[]>("tags", []);

  const createTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage availableTags={tags} />} />
        <Route
          path="/new"
          element={<CreateNote createTag={createTag} availableTags={tags} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
