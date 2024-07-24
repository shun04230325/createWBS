import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../app.css';
import Create from './Create';
import Show from './Show';
import Top from './Top';
import { WbsCreate } from './Create/WbsCreate';

function App() {
    return (
        <div className="content">
            <BrowserRouter>
                <Routes>
                    <Route path={`/`} element={<Top />} />
                    {/* しゅんが先に作ってくれたモック */}
                    {/* <Route path={`/create/`} element={<Create />} /> */}
                    <Route path={`/show/`} element={<Show />} />
                    <Route path={`/WbsCreate/`} element={<WbsCreate />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
