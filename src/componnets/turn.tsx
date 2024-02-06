import { useState } from 'react';
import FrontCard from './cards/front-card.tsx';
import BackCard from './cards/back-card.tsx';

const Turn = () => {
    const [isFront, setIsFront] = useState(true);
    const handleClick = () => {
        setIsFront(!isFront);
    };
    return (
        <>
            <button onClick={handleClick}>Click</button>
            {isFront ? <FrontCard /> : <BackCard />}
        </>
    );
};

export default Turn;
