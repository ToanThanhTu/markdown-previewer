import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMaximize } from '@fortawesome/free-solid-svg-icons';
import { faMinimize } from '@fortawesome/free-solid-svg-icons';

function Header({ name }) {
    return <div className="header">
        <h2 className='title'>&#x2022; {name}</h2>
        <div className='button-container'>
            <button className='expand-btn'>
                <FontAwesomeIcon icon={faMaximize} />
            </button>
            <button className='collapse-btn'>
                <FontAwesomeIcon icon={faMinimize} />
            </button>
        </div>
    </div>;
}

export default Header;