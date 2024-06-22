import EditorHeader from "./EditorHeader";
import '../styles/Editor.css';

function Editor({ textInput, onTextInputChange, isPreviewerMaximized, isEditorMaximized, onEditorExpandCollapseClick }) {
    return <div id="editor-wrap" className={isPreviewerMaximized ? "hidden" : ""}>
        <EditorHeader
            isEditorMaximized={isEditorMaximized}
            onEditorExpandCollapseClick={onEditorExpandCollapseClick} />
        <textarea
            id="editor"
            value={textInput}
            onChange={(e) => onTextInputChange(e.target.value)} />
    </div>;
}

export default Editor;