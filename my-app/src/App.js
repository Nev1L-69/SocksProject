import './App.css';
import ShopingPage from "./Pages/ShopPage/ShopingPage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ScrollProvider} from "./Components/Scroll/Scroll";
import HomePage from "./Pages/Home/HomePage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
        <ScrollProvider>
            <Router>
                <Routes>
                    <Route path='/shoping' element={<ShopingPage/>}/>
                    <Route path='/' element={<HomePage/>}/>

                </Routes>
            </Router>
            <Footer/>
        </ScrollProvider>

  );
}

export default App;
