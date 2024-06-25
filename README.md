# React Markdown Previewer

This project is a Markdown Previewer built using React and the `marked` library. It allows users to input Markdown text in an editor and see a live preview of the rendered HTML.

## Features

- **Live Markdown Preview**: Instantly see the rendered HTML as you type in the Markdown editor.
- **Syntax Highlighting**: Supports syntax highlighting for code blocks within the Markdown text.
- **Expand/Collapse Views**: Both the editor and previewer components can be maximized for a more focused view.

## Getting Started

### Prerequisites

Before you begin, ensure you have installed the latest version of:

- [Node.js and npm](https://nodejs.org/en/)

### Installation

1. Clone the repository to your local machine
1. Install the necessary dependencies:
    1. NPM packages: `npm install`
    1. [marked](https://github.com/markedjs/marked?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library) library: `npm install -g marked`
    1. [Font Awesome](https://docs.fontawesome.com/apis/javascript/get-started) library:
        1. Install the Font Awesome SVG Core package: `npm install @fortawesome/fontawesome-svg-core`
        1. Install the icon content package: `npm install @fortawesome/free-solid-svg-icons`
1. Start the application: `npm start`
1. This will run the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload if you make edits.

### Built With
- [React](https://reactjs.org/) - The web framework used
- [marked](https://marked.js.org/) - Markdown parser and compiler

