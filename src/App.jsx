import { Routes, Route } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import AddCreator from "./pages/AddCreator";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShowCreators />} />
      <Route path="/new" element={<AddCreator />} />
      <Route path="/creator/:id" element={<ViewCreator />} />
      <Route path="/creator/:id/edit" element={<EditCreator />} />
    </Routes>
  );
}

export default App;
