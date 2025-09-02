import "./Hero.css"
import Illustration from './../../../public/Illustration.png'
function Hero({h1,h2,p}) {
    return (
        <>
            <div className="heroMain">
                <div className="heroLeft">
                    <h1>{h1}</h1>
                    <h2>{h2}</h2>
                    <p>{p}</p>
                    
                </div>
                <div className="heroRight">
                    <img src={Illustration} alt="Illustration" />
                </div>
            </div>
        </>
    )
}

export default Hero