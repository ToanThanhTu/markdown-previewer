import '../styles/Header.css';

// Importing FontAwesomeIcon component and specific icons (Maximize and Minimize) for use in buttons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons';

/* EditorHeader component definition. Props:
    - isEditorMaximized: boolean to determine button visibility
    - onEditorExpandCollapseClick: Maximize/Minimize button click handler function */
function EditorHeader({ isEditorMaximized, onEditorExpandCollapseClick }) {
    return <div className="header">
        <h2 className='title'>&#x2022; Editor</h2>
        <div className='button-container'>
            {isEditorMaximized
                ? ( // If the editor is maximized, show the minimize button
                    <button className='collapse-btn' onClick={onEditorExpandCollapseClick}>
                        {/* FontAwesome minimize icon */}
                        <FontAwesomeIcon icon={faMinimize} />
                    </button>)
                : ( // If the editor is not maximized, show the maximize button
                    <button className='expand-btn' onClick={onEditorExpandCollapseClick}>
                        {/* FontAwesome maximized icon */}
                        <FontAwesomeIcon icon={faMaximize} />
                    </button>)
            }
        </div>
    </div>;
}

export default EditorHeader;