import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../app.css'
import Create from './Create'
import Show from './Show'
import Top from './Top'

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
  )
}

export default App
