const Hero = () => {
  const orderNow = () => {
    window.scrollTo({
      top: 1150,
      behavior: "smooth",
    });
  };
  return (
    <sectioon
      className="hero section"
      id="home"
      style={{ backgroundImage: `url(./media/bg-hero.jpg)` }}
    >
      <h1 className="hero_title">
        start your day <br />
        with your favorite coffee <br />
        and cozy place.
      </h1>
      <button className="hero_button" onClick={orderNow}>
        Order Now
      </button>
    </sectioon>
  );
};
export default Hero;
