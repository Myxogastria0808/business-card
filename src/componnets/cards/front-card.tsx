import './front-card.css';

const FrontCard = () => {
    return (
        <div className="card">
            <div className="content">
                <div className="top-space"></div>
                <div className="myface"></div>
                <h1>Yuki Osada</h1>
            </div>
            <div className="bottom">
                <div className="bottom-upper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path
                            fill="#0099ff"
                            fill-opacity="1"
                            d="M0,160L80,149.3C160,139,320,117,480,133.3C640,149,800,203,960,208C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                        ></path>
                        <path
                            fill="#0099ff"
                            fill-opacity="0.5"
                            d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,165.3C672,181,768,171,864,138.7C960,107,1056,53,1152,64C1248,75,1344,149,1392,186.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                        <path
                            fill="#0099ff"
                            fill-opacity="0.3"
                            d="M0,192L48,192C96,192,192,192,288,176C384,160,480,128,576,128C672,128,768,160,864,181.3C960,203,1056,213,1152,186.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </div>
                <div className="bottom-lower">
                    <div className="qr"></div>
                    <div className="link">
                        <a href="https://business-card.yukiosada.work"> https://business-card.yukiosada.work </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrontCard;
