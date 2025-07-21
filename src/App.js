import Login from "./screens/login";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import './styles/app.css';


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

