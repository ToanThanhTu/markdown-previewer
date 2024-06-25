import { useEffect, useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { marked } from 'marked'; // Importing the marked library for parsing markdown text

// Default text to display in the editor upon initialization
const defaultTextInput = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";

// The main App component
function App() {
  // States for the text input in the editor, the markdown text to display in the previewer, and whether the editor or previewer is maximized
  const [textInput, setTextInput] = useState(defaultTextInput);
  const [markdownText, setMarkdownText] = useState("");
  const [isEditorMaximized, setIsEditorMaximized] = useState(false);
  const [isPreviewerMaximized, setIsPreviewerMaximized] = useState(false);

  // Effect hook to update the markdown text whenever the text input changes
  useEffect(() => {
    updateMarkdown();
  }, [textInput]);

  // Function to parse the markdown text and update the state
  function updateMarkdown() {
    const markedText = marked.parse(textInput);
    setMarkdownText(markedText);
  }

  // Rendering the App component
  return (
    <div className="App">
      {/* Editor component with props passed for managing its state and behavior */}
      <Editor
        textInput={textInput} // text input state prop
        onTextInputChange={setTextInput} // text input change handler prop
        isEditorMaximized={isEditorMaximized} 
        isPreviewerMaximized={isPreviewerMaximized}
        onEditorExpandCollapseClick={() => setIsEditorMaximized(!isEditorMaximized)} // Prop to toggle the maximized state of the Editor
      />
      <Previewer
        markdown={markdownText} // markdown text state prop
        isEditorMaximized={isEditorMaximized}
        isPreviewerMaximized={isPreviewerMaximized}
        onPreviewerExpandCollapseClick={() => setIsPreviewerMaximized(!isPreviewerMaximized)} // Prop to toggle the maximized state of the Previewer 
      />
    </div>
  );
}

export default App;
