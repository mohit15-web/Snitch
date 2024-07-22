import { Link } from "react-router-dom";
import backpack from "../../public/images/backpack.png";
import './Main.css'
const Main = () => {
  return (
    <main className="landing  container pt-44 px-20 xl:px-0">
      <div className="main-text">
        <h1>YOUR EVERYDAY ESSENTIALS DESERVE THE BEST.</h1>
        <p>
          PRESENTING YOU THE MOST AMAZING AND LUXURIOUS BACKPACKS THAT CAN BE
          USED FOR SCHOOL,COLLEGES,UNIVERSITIES BUSINESS TRIPS OR JUST A SIMPLE
          PICNIC.
        </p>
        <div className="main-btn">
            <Link to={"/search"}>
            
          <button>Shop Now</button>
            </Link>
            <Link to={"/cart"}>
            
          <button className="second-btn">Add to Cart</button>
            </Link>
        </div>
        <div className="links">
          <p>Available on</p>
          <div className="icons">
            <a href="https://www.amazon.com" target="_blank">
              <img
                src="/images/amazon.png"
                alt="Amazon image"
                className="amazon"
              />
            </a>
            <a href="https://www.flipkart.com" target="_blank">
              <img
                src="/images/flipkart.png"
                alt="Flipcart image"
                className="flipkart"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="main-image hidden xl:block">
        <img src={backpack} alt="img" className="bigimg" />
      </div>
    </main>
  );
};

export default Main;