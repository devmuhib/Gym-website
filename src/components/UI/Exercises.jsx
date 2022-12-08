import React from "react";
import "../../styles/exercises.css";
import lunges from "../../assets/img/lunges.png";
import yoga from "../../assets/img/yoga-pose.png";
import extended from "../../assets/img/extended.png";

const Exercises = () => {
  return (
    <section id="schedule">
      <div className="container exercise__container">
        <div className="exercise__top">
          <h2 className="section__title">
            Benefits of <span className="highlights">Exercise</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing <br />
            elit. Error quidem, nam nihil expedita atque modi
          </p>
        </div>

        {/* ========== exercise list ======== */}
        <div className="exercise__wrapper">
          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={lunges} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Healthy Life</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>

          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={yoga} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Increased Flexibility</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>

          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={extended} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Reducing Blood Pressure</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
