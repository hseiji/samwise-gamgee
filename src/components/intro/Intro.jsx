import './intro.css';
import ProfilePic from '../../images/samwise-profile.png';

export default function Intro() {

    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    
                    <h1 className="i-name">Samwise Gamgee</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Member of the Fellowship of the Ring</div>
                            <div className="i-title-item">A Hobbit of the Shire</div>
                            <div className="i-title-item">Best Friend</div>
                            <div className="i-title-item">Writer</div>
                            <div className="i-title-item">Gardener</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        “But in the end, it's only a passing thing, this shadow. Even darkness must pass. A new day will come. And when the sun shines it will shine out the clearer.”
                    </p>
                </div>
            </div>
            
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={ProfilePic} alt="" className="i-img"/>
            </div>  
        </div>
    )
}
