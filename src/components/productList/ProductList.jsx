import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

export default function ProductList() {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">My journey so far...</h1>
                <p className="pl-desc">
                    Please check out my participation on these quests I am proud to be part of.
                </p>
            </div>
            <div className="pl-list">
                {products.map(element => (
                   <Product key={element.id} img={element.img} link={element.link} caption={element.caption}/> 
                ))}
                
            </div>
        </div>
    )
}
