# 🧠 AI Trust Game# React + TypeScript + Vite



An interactive educational game that teaches users about responsible AI usage through real-world scenarios. Players make decisions about whether to trust AI in various situations and learn about the ethical implications of AI systems.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## 🎮 Live DemoCurrently, two official plugins are available:



[View Live Demo](https://ai-trust-game.vercel.app) <!-- Update with your actual deployment URL -->- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 📖 About

## React Compiler

**Would You Trust This AI?** is an engaging educational tool designed to help students and the general public understand:

- When AI can be trusted and when it cannotThe React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

- The difference between low-risk and high-risk AI applications

- The importance of human oversight in AI decision-makingNote: This will impact Vite dev & build performances.

- How AI bias and limitations can impact real-world outcomes

## Expanding the ESLint configuration

## ✨ Features

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- **12 Interactive Scenarios**: Real-world situations covering diverse AI applications

- **Instant Feedback**: Learn immediately why each decision matters```js

- **Pattern Recognition Quiz**: Test your understanding of AI principlesexport default defineConfig([

- **Reflection Questions**: Encourage critical thinking about AI ethics  globalIgnores(['dist']),

- **Score Tracking**: Earn badges (Gold, Silver, Bronze) based on performance  {

- **Beautiful UI**: Modern, responsive design with smooth animations    files: ['**/*.{ts,tsx}'],

- **Educational Focus**: Covers key AI ethics topics:    extends: [

  - Low-risk vs. high-risk AI applications      // Other configs...

  - Human-in-the-loop systems

  - Bias and fairness in AI      // Remove tseslint.configs.recommended and replace with this

  - Privacy concerns      tseslint.configs.recommendedTypeChecked,

  - Accountability and transparency      // Alternatively, use this for stricter rules

      tseslint.configs.strictTypeChecked,

## 🎯 Scenarios Include      // Optionally, add this for stylistic rules

      tseslint.configs.stylisticTypeChecked,

1. **Movie Recommendation System** - Low-risk personalization

2. **AI Study Reminder App** - Helpful automation      // Other configs...

3. **AI Grading Exams** - Fairness and context challenges    ],

4. **Spam Email Filter** - Pattern recognition    languageOptions: {

5. **AI Face Recognition for Attendance** - Human-in-the-loop oversight      parserOptions: {

6. **Weather Forecast App** - Probabilistic predictions        project: ['./tsconfig.node.json', './tsconfig.app.json'],

7. **AI Resume Ranking** - Hidden bias concerns        tsconfigRootDir: import.meta.dirname,

8. **AI Detecting Exam Cheating** - False accusation risks      },

9. **AI Medical Advice App** - High-risk decisions      // other options...

10. **AI Language Translation** - Communication and access    },

11. **AI Budget Insights** - Decision support  },

12. **AI Content Moderation** - Content safety at scale])

```

## 🚀 Getting Started

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

### Prerequisites

```js

- Node.js 16.x or higher// eslint.config.js

- npm or yarnimport reactX from 'eslint-plugin-react-x'

import reactDom from 'eslint-plugin-react-dom'

### Installation

export default defineConfig([

1. Clone the repository:  globalIgnores(['dist']),

```bash  {

git clone https://github.com/Sayam2122/AI-Trust-Game.git    files: ['**/*.{ts,tsx}'],

cd AI-Trust-Game    extends: [

```      // Other configs...

      // Enable lint rules for React

2. Install dependencies:      reactX.configs['recommended-typescript'],

```bash      // Enable lint rules for React DOM

npm install      reactDom.configs.recommended,

```    ],

    languageOptions: {

3. Start the development server:      parserOptions: {

```bash        project: ['./tsconfig.node.json', './tsconfig.app.json'],

npm run dev        tsconfigRootDir: import.meta.dirname,

```      },

      // other options...

4. Open your browser and navigate to `http://localhost:5173`    },

  },

## 🛠️ Built With])

```

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icon library

## 📦 Project Structure

```
ai-trust-game/
├── src/
│   ├── AITrustGame.tsx    # Main game component
│   ├── App.tsx             # App wrapper
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 🎓 Educational Use

This game is perfect for:
- **Schools and Universities**: Teaching AI ethics and responsible technology use
- **Workshops**: Interactive sessions on AI literacy
- **Self-Learning**: Understanding AI capabilities and limitations
- **Corporate Training**: Educating employees about AI systems

## 📊 Learning Outcomes

After completing the game, users will understand:
- ✅ AI works on data, not values
- ✅ AI can be biased and make mistakes
- ✅ Humans are responsible for AI decisions
- ✅ The importance of human oversight in high-stakes scenarios
- ✅ When AI is helpful vs. when it can be harmful

## 🤝 Contributing

Contributions are welcome! If you'd like to add more scenarios or improve the game:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sayam**
- GitHub: [@Sayam2122](https://github.com/Sayam2122)

## 🙏 Acknowledgments

- Inspired by the need for better AI literacy education
- Built to promote responsible AI usage
- Thanks to all contributors and educators using this tool

## 📧 Contact

For questions or feedback, please open an issue on GitHub or contact the repository owner.

---

**Remember**: AI is a powerful tool, but responsibility always lies with humans. 🧠✨
