import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Chat from "./pages/Chat";
import CropDoctor from "./pages/CropDoctor";
import CostCalculator from "./pages/CostCalculator";
import Weather from "./pages/Weather";
import CropDiary from "./pages/CropDiary";
import GovernmentSchemes from "./pages/GovernmentSchemes";
import Livestock from "./pages/Livestock";
import Marketplace from "./pages/Marketplace";
import Dashboard from "./pages/Dashboard";
import Planner from "./pages/Planner";
import Profile from "./pages/Profile";

function App() {

  const [language, setLanguage] = useState("English");

  const [selectedCrop, setSelectedCrop] = useState("🌾 Wheat");

  return (

    <Routes>

      <Route
        path="/"
        element={
          <Home
            language={language}
            setLanguage={setLanguage}
            selectedCrop={selectedCrop}
            setSelectedCrop={setSelectedCrop}
          />
        }
      />

      <Route
        path="/chat"
        element={
          <Chat
            language={language}
            selectedCrop={selectedCrop}
          />
        }
      />

      <Route
        path="/cropdoctor"
        element={
          <CropDoctor
            language={language}
          />
        }
      />

      <Route
        path="/calculator"
        element={
          <CostCalculator
            language={language}
          />
        }
      />

      <Route
        path="/weather"
        element={
          <Weather
            language={language}
          />
        }
      />

      <Route
        path="/diary"
        element={
          <CropDiary
            language={language}
          />
        }
      />

      <Route
        path="/schemes"
        element={
          <GovernmentSchemes
            language={language}
          />
        }
      />

      <Route
        path="/livestock"
        element={
          <Livestock
            language={language}
          />
        }
      />

      <Route
        path="/marketplace"
        element={
          <Marketplace
            language={language}
          />
        }
      />

      <Route
        path="/dashboard"
        element={
          <Dashboard
            language={language}
          />
        }
      />

      <Route
        path="/planner"
        element={
          <Planner
            language={language}
          />
        }
      />

      <Route
        path="/profile"
        element={
          <Profile
            language={language}
          />
        }
      />

    </Routes>

  );

}

export default App;