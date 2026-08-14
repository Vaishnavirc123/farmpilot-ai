# 🌾 FarmPilot.ai

## AI-Powered Smart Farming Assistant for Indian Farmers

FarmPilot.ai is an AI-powered smart agriculture platform designed to help Indian farmers make better farming decisions through **AI assistance, crop management tools, farming guidance, and a simple multilingual interface**.

The platform brings multiple farming services together in one application, including **crop cultivation, fertilizer guidance, irrigation assistance, pest and disease management, crop planning, crop cost estimation, livestock assistance, weather guidance, market information, and harvesting support**.

> 🌱 **FarmPilot.ai — Smarter Farming, Better Decisions.**

---

## 🚀 Project Highlights

FarmPilot.ai provides a farmer-friendly interface where users can access different agricultural services from a single platform.

### 🌟 Key Features

#### 🤖 AI Farming Assistant
- Ask farming-related questions through an AI chat interface
- Get simple and practical farming guidance
- Supports text-based interaction
- Voice input and text-to-speech support

#### 🌱 Crop Cultivation
- Crop-specific cultivation guidance
- Sowing and planting recommendations
- Crop management suggestions
- Farming best practices

#### 🧪 Fertilizer & Soil Guidance
- Fertilizer recommendations
- Soil health guidance
- Nutrient management suggestions
- Crop-specific fertilizer information

#### 💧 Irrigation Assistance
- Water requirement guidance
- Irrigation recommendations
- Soil moisture considerations
- Water management suggestions

#### 🐛 Pest & Crop Disease Management
- Crop disease guidance
- Pest management information
- Crop image upload
- Crop disease analysis
- Treatment and prevention recommendations

#### 🌦 Weather Assistance
- Weather-related farming guidance
- Rain-related farming recommendations
- Irrigation considerations
- Weather-based farming suggestions

#### 💰 Market Price Information
- Crop price information
- Market price reference
- Helps farmers understand approximate crop values
- Supports better selling decisions

#### 🧮 Crop Cost Calculator
Calculate the estimated cultivation cost of a crop based on expenses such as:

- 🌱 Seeds
- 🧪 Fertilizers
- 🧴 Pesticides
- 👨‍🌾 Labour
- 💧 Irrigation
- 🚜 Other farming expenses

#### 📅 Crop Planner
Plan farming activities throughout the crop lifecycle:

- Crop selection
- Sowing
- Fertilization
- Irrigation
- Pest management
- Crop monitoring
- Harvesting

#### 🐄 Livestock Assistant
Provides basic assistance for livestock farming, including:

- Animal care guidance
- Feeding information
- Livestock management
- Common livestock-related questions

#### 🚜 Harvesting Guidance
- Harvest timing recommendations
- Crop maturity guidance
- Harvest preparation
- Post-harvest considerations

#### 🏛️ Government Scheme Information
Provides information and guidance related to agricultural government schemes and farmer-support programs.

#### 🎤 Voice Interaction
Farmers can interact with the application using:

- 🎤 Speech-to-text
- 🔊 Text-to-speech
- 🗣️ Voice-based farming questions

#### 🌐 Multilingual Support
Designed to support Indian farmers through multiple languages, including:

- 🇬🇧 English
- 🇮🇳 Hindi
- తెలుగు Telugu
- ಕನ್ನಡ Kannada
- தமிழ் Tamil
- മലയാളം Malayalam

---

# 🖥️ Application Modules

FarmPilot.ai is organized into different modules to make farming assistance easier to access.

| Module | Purpose |
|---|---|
| 💬 AI Chat | Ask farming questions and receive assistance |
| 🌱 Crop Management | Crop cultivation and management guidance |
| 🧮 Crop Cost Calculator | Estimate cultivation expenses |
| 📅 Crop Planner | Plan crop activities |
| 🐛 Crop Doctor | Crop disease and pest assistance |
| 🐄 Livestock Assistant | Livestock-related assistance |
| 🌦 Weather | Weather-based farming guidance |
| 💰 Market | Crop market price information |
| 🏛️ Government Schemes | Agricultural scheme information |
| 👤 Profile | Farmer profile and language preferences |

---

# 🛠️ Technologies Used

## Frontend

- ⚛️ React.js
- ⚡ Vite
- 🎨 CSS
- 🌐 JavaScript
- 🎤 Web Speech API
- 🔊 Speech Synthesis API

## AI & Backend

- 🤖 Generative AI
- 🐍 Python
- ⚡ FastAPI
- 🔐 Environment Variables / API Keys

## Development Tools

- 💻 Visual Studio Code
- 🐙 Git
- 🐙 GitHub
- 🌐 Chrome / Microsoft Edge
- 📦 npm

---

# 🏗️ Project Architecture

```text
                 ┌─────────────────────────┐
                 │       Farmer/User       │
                 └────────────┬────────────┘
                              │
                              ▼
                 ┌─────────────────────────┐
                 │     FarmPilot.ai UI     │
                 │     React + Vite        │
                 └────────────┬────────────┘
                              │
             ┌────────────────┼────────────────┐
             │                │                │
             ▼                ▼                ▼
       AI Assistant      Crop Tools       Farmer Tools
             │                │                │
             ▼                ▼                ▼
        AI Services    Crop Calculator   Crop Planner
                       Crop Doctor       Livestock
                       Weather           Market
                       Fertilizer        Schemes
                              │
                              ▼
                 ┌─────────────────────────┐
                 │      AI / Backend       │
                 │     FastAPI + AI        │
                 └─────────────────────────┘