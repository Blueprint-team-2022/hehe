import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import MainPage from "./client/pages/MainPage.js"
import MusicPage from "./client/pages/MusicPage.js"
import MeditationPage from "./client/pages/MeditationPage.js"
import SceneryPage from "./client/pages/SceneryPage.js"
import DiaryPage from "./client/pages/DiaryPage.js"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/music" element={<MusicPage/>} />
        <Route exact path="/meditation" element={<MeditationPage/>} />
        <Route exact path="/scenery" element={<SceneryPage/>} />
        <Route exact path="/diary" element={<DiaryPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
