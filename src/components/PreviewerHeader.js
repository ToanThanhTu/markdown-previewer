import '../styles/Header.css';

// Importing FontAwesomeIcon component and specific icons (Maximize and Minimize) for use in buttons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize, faMinimize } from '@fortawesome/free-solid-svg-icons';

/* PreviewerHeader component definition. Props: 
    - isPreviewerMaximized: boolean to determine button visibility
    - onPreviewerExpandCollapseClick: Maximize/Minimize button click handler function */
function PreviewerHeader({ isPreviewerMaximized, onPreviewerExpandCollapseClick }) {
    return <div className="header">
        <h2 className='title'>&#x2022; Previewer</h2>
        <div className='button-container'>
            {isPreviewerMaximized
                ? ( // If the editor is maximized, show the minimize button
                    <button className='collapse-btn' onClick={onPreviewerExpandCollapseClick}>
                        {/* FontAwesome minimize icon */}
                        <FontAwesomeIcon icon={faMinimize} />
                    </button>)
                : ( // If the editor is not maximized, show the maximize button
                    <button className='expand-btn' onClick={onPreviewerExpandCollapseClick}>
                        {/* FontAwesome maximized icon */}
                        <FontAwesomeIcon icon={faMaximize} />
                    </button>)
            }
        </div>
    </div>;
}

export default PreviewerHeader;