import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { faMinimize } from '@fortawesome/free-solid-svg-icons';

function PreviewerHeader({ isPreviewerMaximized, onPreviewerExpandCollapseClick }) {
    return <div className="header">
        <h2 className='title'>&#x2022; Previewer</h2>
        <div className='button-container'>
            {isPreviewerMaximized
                ? (<button className='collapse-btn' onClick={onPreviewerExpandCollapseClick}>
                    <FontAwesomeIcon icon={faMinimize} />
                </button>)
                : <button className='expand-btn' onClick={onPreviewerExpandCollapseClick}>
                    <FontAwesomeIcon icon={faMaximize} />
                </button>}
        </div>
    </div>;
}

export default PreviewerHeader;