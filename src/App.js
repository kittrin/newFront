import './App.css';
import {Button} from "antd";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {router} from "./router/router";

function App() {
    return (
        <main>
            <Navbar/>
            <Routes>
                {router.map(item => (
                    <Route element={item.element} path={item.path}/>
                ))}
            </Routes>
        </main>
    );
}

export default App;
