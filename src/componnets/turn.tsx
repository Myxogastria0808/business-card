import { useState } from 'react';
import FrontCard from './cards/front-card.tsx';
import BackCard from './cards/back-card.tsx';
import { ImLoop } from 'react-icons/im';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import './turn.css';

const Turn = () => {
    const [isFront, setIsFront] = useState(true);
    const handleClick = () => {
        setIsFront(!isFront);
    };
    return (
        <>
            {isFront ? <FrontCard /> : <BackCard />}
            {isFront ? (
                <div className="wrapper">
                    <div className="button-wrapper">
                        <button className="front-button" onClick={handleClick}>
                            <IconContext.Provider value={{ color: '#fff', size: '35px', className: 'loop-icon' }}>
                                <ImLoop />
                            </IconContext.Provider>
                        </button>
                    </div>
                    <div className="download download-front">
                        <a href="/business-card-front.png" download="business-card-front.png">
                            <IconContext.Provider value={{ color: '#fff', size: '35px', className: 'loop-icon' }}>
                                <IoCloudDownloadOutline />
                            </IconContext.Provider>
                        </a>
                    </div>
                </div>
            ) : (
                <div className="wrapper">
                    <div className="button-wrapper">
                        <button className="back-button" onClick={handleClick}>
                            <IconContext.Provider value={{ color: '#000', size: '35px', className: 'loop-icon' }}>
                                <ImLoop />
                            </IconContext.Provider>
                        </button>
                    </div>
                    <div className="download download-back">
                        <a href="/business-card-back.png" download="business-card-back.png">
                            <IconContext.Provider value={{ color: '#000', size: '35px', className: 'loop-icon' }}>
                                <IoCloudDownloadOutline />
                            </IconContext.Provider>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Turn;
