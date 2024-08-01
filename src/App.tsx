import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./components/MainPage";
import CreateNote from "./components/Form/CreateNote";

function App() {
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
