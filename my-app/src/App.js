import './App.css';
import ShopingPage from "./Pages/ShopingPage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ScrollProvider} from "./Components/Scroll/Scroll";
import HomePage from "./Pages/Home/HomePage";

function App() {
  return (
        <ScrollProvider>
            <Router>
                <Routes>
                    <Route path='/shoping' element={<ShopingPage/>}/>
                    <Route path='/' element={<HomePage/>}/>

                </Routes>
            </Router>
        </ScrollProvider>
  );
}

export default App;
