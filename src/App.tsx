import { Routes, Route } from "react-router-dom";
import { Home, People, Person } from "./pages";
import { DefaultLayout, Layout } from "./layouts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />

          <Route path="/people" element={<Layout />}>
            <Route index element={<People />} />
            <Route path=":id" element={<Person />} />
          </Route>

          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
