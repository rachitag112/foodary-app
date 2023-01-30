import Header from "../components/Header";
import Footer from "../components/Footer";
import bg_image from "../img/backg.jpg";
import burger_image from "../img/burger.jpg";
import roll_image from "../img/roll.jpg";
import egg_image from "../img/egg.jpeg";

const IndexPage = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="hero-container">
        <img src={bg_image} className="hero-image" alt="" />
        <div className="inner-hero-container">
          <h1 className="hero-title">Foodary</h1>
          <p className="hero-content-paragraph">
            What would you do if you have a thousand receipes just right in your
            pocket?
          </p>
          <div className="hero-button-container">
            <button className="hero-button">Learn More</button>
            <button className="hero-button">Foodary Community</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="inner-container">
          <div className="element-items">
            <img src={burger_image} className="element-image" alt="" />
            <p className="element-paragraph">
              Contributed by an amazing community of foodies. With hundreds of
              cuisines curated and tens of recipes created each day, start
              cooking and experience what you can do with your kitchen!
            </p>
          </div>
          <div className="element-items">
            <p className="element-paragraph">
              Contributed by an amazing community of foodies. With hundreds of
              cuisines curated and tens of recipes created each day, start
              cooking and experience what you can do with your kitchen!
            </p>
            <img src={roll_image} className="element-image" alt="" />
          </div>
          <div className="element-items">
            <img src={egg_image} className="element-image" alt="" />
            <p className="element-paragraph">
              Contributed by an amazing community of foodies. With hundreds of
              cuisines curated and tens of recipes created each day, start
              cooking and experience what you can do with your kitchen!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;
