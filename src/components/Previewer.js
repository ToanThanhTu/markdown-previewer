import PreviewerHeader from "./PreviewerHeader";
import '../styles/Previewer.css';

function Previewer({ markdown, isEditorMaximized, isPreviewerMaximized, onPreviewerExpandCollapseClick }) {
    return <div id="previewer" className={isEditorMaximized ? "hidden" : ""}>
        <PreviewerHeader
            isPreviewerMaximized={isPreviewerMaximized}
            onPreviewerExpandCollapseClick={onPreviewerExpandCollapseClick} />
        <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
    </div>;
}

export default Previewer;