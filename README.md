# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# To-Do App in React.js

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This is a simple and responsive To-Do application built using React.js. The app allows users to add, edit, delete, and mark tasks as completed, providing an intuitive and efficient task management experience.

## Features
- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed or pending
- Persist tasks using local storage (optional feature)
- Responsive design

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/todo-app-react.git
   ```
2. Navigate to the project folder:
   ```sh
   cd todo-app-react
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

The app should now be running at `http://localhost:3000/`.

## Usage
1. Type a new task into the input field and click "Add" to create a task.
2. Click on a task to mark it as completed.
3. Click the edit button to modify a task.
4. Click the delete button to remove a task.
5. The task list is automatically saved in local storage (if enabled).

## Technologies Used
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- React Hooks (useState, useEffect)

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-name
   ```
3. Make your changes and commit:
   ```sh
   git commit -m "Add new feature"
   ```
4. Push to your fork:
   ```sh
   git push origin feature-name
   ```
5. Create a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

