import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./components/MainPage";
import CreateNote from "./components/Form/CreateNote";
import { Tag } from "./types";
import { useLocaleStorage } from "./useLocaleStorage";

function App() {
  const [tags, setTags] = useLocaleStorage<Tag[]>("tags", []);

  const createTag = (tag: Tag) => {};
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/new" element={<CreateNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
