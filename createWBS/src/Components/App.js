import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./Top";
import Create from "./Create";
import Show from "./Show";
import '../app.css';

function App() {
  return (
      <div className="content">
          <BrowserRouter>
              <Routes>
                  <Route path={`/`} element={<Top />} />
                  <Route path={`/create/`} element={<Create />} />
                  <Route path={`/show/`} element={<Show />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
