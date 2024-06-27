import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./Top";
import Create from "./Create";
import Show from "./Show";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = {`/`} element = {<Top />} />
        <Route path = {`/create/`} element = {<Create />} />
        <Route path = {`/show/`} element = {<Show />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
