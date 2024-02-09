import { useState } from 'react';
import FrontCard from './cards/front-card.tsx';
import BackCard from './cards/back-card.tsx';
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
                    {isFront ? '裏面へ' : '表面へ'}
                </button>
            </div>
        </>
    );
};

export default Turn;
