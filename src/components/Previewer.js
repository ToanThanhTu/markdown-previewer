import PreviewerHeader from "./PreviewerHeader";
import '../styles/Previewer.css';

/* Define the Previewer component. Props:
    - markdown: Markdown output text
    - isEditorMaximized: boolean to determine the component visibility
    - isPreviewerMaximized: boolean passed to PreviewerHeader
    - onPreviewerExpandCollapseClick: function passed to PreviewerHeader */
function Previewer({ markdown, isEditorMaximized, isPreviewerMaximized, onPreviewerExpandCollapseClick }) {
    return <div id="previewer" className={isEditorMaximized ? "hidden" : ""}>
        {/* PreviewerHeader component */}
        <PreviewerHeader
            isPreviewerMaximized={isPreviewerMaximized}
            onPreviewerExpandCollapseClick={onPreviewerExpandCollapseClick} />
        {/* Div to display the markdown content, using dangerouslySetInnerHTML for HTML rendering */}
        <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
    </div>;
}

export default Previewer;