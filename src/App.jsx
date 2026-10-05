import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";


import Home from "./pages/Home.jsx";
import Quran from "./pages/Quran.jsx";
import Para from "./pages/Para.jsx";
import Saved from "./pages/Saved.jsx";
import Radio from "./pages/Radio.jsx";

function App() {
    return (
        <BrowserRouter>

            <Header />

            <Routes>

                {/* Home Page */}
                <Route
                    path="/"
                    element={
                        <>
                            <SearchBar />
                            <Home />
                        </>
                    }
                />


                {/* Other Pages */}
                <Route path="/quran" element={
                    <>
                      <SearchBar />  <Quran /> 
                    </>
                } />
                <Route path="/para" element={<Para />} />
                <Route path="/saved" element={<Saved />} />
                <Route path="/radio" element={<Radio />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;