import './about.css';

export default function About() {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://pbs.twimg.com/media/B67CnRYCIAA5Rcb?format=jpg&name=small" alt="" className="a-img"/>
                </div>

            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                “I can't carry it for you, but I can carry you!”
                </p>
                <p className="a-desc">
                        I was born and raised in Hobbitown. Surrounded by loving friends and family I've learnt the real meaning of hard work and loyalty. I am very curious which eventually has led me to my biggest adventure in life. I'm not physically strong, however, I guarantee my emotional strength is above average. I'm a big advocate for replanting trees and preserving nature as it is men's biggest legacy.
                </p>
            </div>
        </div>
    )
}
