import { useState } from 'react';
import FrontCard from './cards/front-card.tsx';
import BackCard from './cards/back-card.tsx';
import { ImLoop } from 'react-icons/im';
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
            <div className="button-wrapper">
                <button className="button" onClick={handleClick}>
                    {isFront ? (
                        <IconContext.Provider value={{ color: '#fff', size: '35px', className: 'loop-icon' }}>
                            <ImLoop />
                        </IconContext.Provider>
                    ) : (
                        <IconContext.Provider value={{ color: '#fff', size: '35px', className: 'loop-icon' }}>
                            <ImLoop />
                        </IconContext.Provider>
                    )}
                </button>
            </div>
        </>
    );
};

export default Turn;
