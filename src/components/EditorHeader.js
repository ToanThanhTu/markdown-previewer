import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { faMinimize } from '@fortawesome/free-solid-svg-icons';

function EditorHeader({ isEditorMaximized, onEditorExpandCollapseClick }) {
    return <div className="header">
        <h2 className='title'>&#x2022; Editor</h2>
        <div className='button-container'>
            {isEditorMaximized
                ? (<button className='collapse-btn' onClick={onEditorExpandCollapseClick}>
                    <FontAwesomeIcon icon={faMinimize} />
                </button>)
                : <button className='expand-btn' onClick={onEditorExpandCollapseClick}>
                    <FontAwesomeIcon icon={faMaximize} />
                </button>}
        </div>
    </div>;
}

export default EditorHeader;