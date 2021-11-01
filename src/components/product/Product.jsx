import "./product.css";

export default function Product({img, link, caption}) {
    return (
        <div className="p">
            <div>{caption}</div>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img"/>
            </a>           
        </div>
    )
}
