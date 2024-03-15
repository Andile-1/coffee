import React from "react";

const Place = () => {
  return (
    <section className="place section" id="place">
      <div className="place__container container">
        <h2 className="section__title">
          Make you feels good With <br />
          our comfy fasilities
        </h2>

        <div className="place__content grid">
          <div className="place__images">
            <img
              src="./assets/media/place1.jpg"
              alt=""
              className="place__img-big"
            />
            <div className="place__img-smalls">
              <img
                src="./assets/media/place1.jpg"
                alt=""
                className="place__img-small active"
              />
              <img
                src="./assets/media/place2.jpg"
                alt=""
                className="place__img-small"
              />
              <img
                src="./assets/media/place3.jpg"
                alt=""
                className="place__img-small"
              />
            </div>
          </div>

          <div className="place__data">
            <h2 className="place__title">Find a place you love</h2>
            <p className="place__description">
              We provide the best place to stay productive <br />
              and focus with good vibes and beautiful design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Place;
