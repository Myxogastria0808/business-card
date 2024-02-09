import './card.css';
import { FaGithubSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IconContext } from 'react-icons';

const BackCard = () => {
    return (
        // <div className="card back-card">
        //     <div className="back-content">
        //         <div className="link">
        //             <div className="qr-back"></div>
        //             <a href="https://yukiosada.work/"> https://yukiosada.work/ </a>
        //         </div>
        //     </div>
        //     <div className="back-bottom">
        //         <div className="back-bottom-upper">
        //             <div className="mountain"></div>
        //         </div>
        //         <div className="back-bottom-lower">
        //             <IconContext.Provider value={{ color: 'black', size: '25px', className: 'back-icon' }}>
        //                 <div className="link">
        //                     <FaGithubSquare />
        //                     <a href="https://twitter.com/yuki_osada0808/"> @yuki_osada0808 </a>
        //                 </div>
        //             </IconContext.Provider>
        //             <IconContext.Provider value={{ color: 'black', size: '25px', className: 'back-icon' }}>
        //                 <div className="link">
        //                     <FaSquareXTwitter />
        //                     <a href="https://github.com/Myxogastria0808"> Myxogastria0808 </a>
        //                 </div>
        //             </IconContext.Provider>
        //         </div>
        //     </div>
        // </div>
        <div className="card back-card">
            <div className="content back-content">
                <div className="stars s">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className="stars m">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className="stars l">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className="back-top-space"></div>
                <div className="link">
                    <div className="qr-back"></div>
                    <a href="https://yukiosada.work/"> https://yukiosada.work/ </a>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-upper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path
                            fill="rgb(0, 95, 142)"
                            fill-opacity="1"
                            d="M0,160L80,149.3C160,139,320,117,480,133.3C640,149,800,203,960,208C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                        ></path>
                        <path
                            fill="rgb(0, 95, 142)"
                            fill-opacity="0.5"
                            d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,165.3C672,181,768,171,864,138.7C960,107,1056,53,1152,64C1248,75,1344,149,1392,186.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                        <path
                            fill="rgb(0, 95, 142)"
                            fill-opacity="0.3"
                            d="M0,192L48,192C96,192,192,192,288,176C384,160,480,128,576,128C672,128,768,160,864,181.3C960,203,1056,213,1152,186.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </div>
                <div className="bottom-lower back-bottom-lower">
                    <IconContext.Provider value={{ color: '#fff', size: '25px', className: 'back-icon' }}>
                        <div className="link">
                            <FaSquareXTwitter />
                            <a href="https://twitter.com/yuki_osada0808/"> @yuki_osada0808 </a>
                        </div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ color: '#fff', size: '25px', className: 'back-icon' }}>
                        <div className="link">
                            <FaGithubSquare />
                            <a href="https://github.com/Myxogastria0808"> Myxogastria0808 </a>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    );
};

export default BackCard;
