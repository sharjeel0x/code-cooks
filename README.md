# 🍳 CodeCooks — AI Recipe Generator

CodeCooks is a React web app that generates custom recipes based on the ingredients you have in your kitchen. Powered by Hugging Face’s Mixtral AI, it dynamically creates step-by-step cooking instructions.

## Features

* Add your own ingredients dynamically
* Generates short, clear recipes using mostly your ingredients
* Bold recipe title, brief description, and 12–15 actionable steps
* Typewriter effect while recipe is generated
* Loading state to indicate AI is working
* Default ingredients shown if no ingredients are added

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sharjeel0x/codecooks.git
cd codecooks
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Add your Hugging Face API key

Create a `.env` file in the project root:

```env
VITE_HF_ACCESS_TOKEN=your_huggingface_token_here
```

> **Important:** Do not commit this file. It is ignored by `.gitignore` to keep your key safe.

## Running the App

```bash
npm run dev
# or
yarn dev
```

Open your browser at `http://localhost:5173` and start adding ingredients. Click "Create Recipe" to generate your AI-powered recipe.

## Usage

1. Type ingredients you have into the input field.
2. Click **Add ingredient** to save them.
3. Click **Create Recipe** to fetch a recipe from the AI.
4. Watch the recipe appear with a typewriter animation in the recipe container.

## Project Structure

```
codecooks/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ Main.jsx
│  │  ├─ Recipe.jsx
│  │  └─ FakeIngredients.jsx
│  ├─ huggingface.js
│  ├─ App.jsx
│  └─ App.css
├─ .gitignore
├─ package.json
└─ README.md
```

## Technologies Used

* React 18 + Vite
* Hugging Face Inference API (Mixtral-8x7B-Instruct-v0.1) via `huggingface.js`
* CSS for styling and typewriter effect

## Security Notes

* Do not commit your `.env` file
* Anyone cloning this project will need their own Hugging Face API key
* Generate a token here: [Hugging Face Tokens](https://huggingface.co/settings/tokens)

## License

MIT License
