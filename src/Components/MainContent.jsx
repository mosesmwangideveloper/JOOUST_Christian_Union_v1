import { useState, useRef } from "react";
import ExecutiveCard from "./ExecutiveCard";
import ExecutiveData from "./Executive_data";
import useScrollReavel from "/src/Components/useScrollReveal.js";
import LatestEvents from "./LatestEvents";
import DailyDevotionals from "./DailyDevotionals";

export default function MainContent() {
  useScrollReavel();

  const stages = [4, 8, ExecutiveData.length];

  const [stage, setStage] = useState(0);

  const visibleMembers = ExecutiveData.slice(0, stages[stage]);

  const isLastStage = stage === stages.length - 1;

  const ExecutiveCards = visibleMembers.map((member) => (
    <ExecutiveCard key={member.id} {...member} />
  ));

  const execSectionRef = useRef(null);

  function handleToggle() {
    if (isLastStage) {
      execSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setStage(0);
    } else {
      setStage((prev) => prev + 1);
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h2>Where Every Student Finds A Family.</h2>
          <p>
            Whether it's your first Sunday on campus or your hundredth, there's
            a seat with your name on it. Come as you are — leave changed.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-secondary">
              Our Story <i className="fa fa-book" aria-hidden="true"></i>
            </a>
            <a href="#work" className="btn-primary">
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>{" "}
              Join Us This Sunday
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="about-text">
          <h2>WHO WE ARE</h2>
          <p>
            We are a family of believers at Jaramogi Oginga Odinga University of
            Science and Technology, committed to raising a generation shaped
            <strong> #InPursuitOfEternalGlory </strong>— rooted in the Word,
            growing in worship, and walking out our faith on campus and beyond.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-secondary">
              Read More <i className="fa fa-book" aria-hidden="true"></i>
            </a>
            <a href="#work" className="btn-primary">
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>{" "}
              Our Mission
            </a>
          </div>
        </div>
        <div className="about-image">
          <img
            src="./src/Images/JOOUST_CU_Family_v4.jpg"
            alt="JOOUST Family Of Christians"
            className="about-family-image"
          />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="about-section what-we-do">
        <div className="about-text">
          <h2>WHAT WE DO ?</h2>
          <p>
            Life at JOOUST Christian Union is more than a Sunday service.
            Wherever you are on your faith journey, there's a place for you to
            grow, serve and belong. We do activities and events like:
          </p>
          <ul>
            <li>Sunday and midweek services</li>
            <li>Bible Study & Discipleship Sessions</li>
            <li>Inreach, Outreach & Missions</li>
            <li>MSM(Drama), Injoy, Compassionate Ministries </li>
          </ul>

          <div className="hero-buttons">
            <a href="#work" className="btn-primary">
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>{" "}
              Contact Us{" "}
            </a>
            <a href="#contact" className="btn-secondary">
              Read More <i className="fa fa-book" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="about-image">
          <img
            src="./src/Images/JOOUST_CU_Family_v2.jpg"
            alt="JOOUST Family Of Christians"
            className="about-family-image"
          />
        </div>
      </section>

      {/* What's Happening Section */}
      <LatestEvents />

      {/* Meet The Executive Committee */}
      <section className="exec-section" ref={execSectionRef}>
        <h2>Meet The Executive Committee</h2>
        <p>Meet the leaders who serve faithfully</p>
        <div className="exec-grid">{ExecutiveCards}</div>

        <div className="exec-more-wrap">
          <button className="exec-more-btn" onClick={handleToggle}>
            {isLastStage ? "Show Less" : "Show More"}{" "}
            <i
              className={isLastStage ? "fa fa-angle-up" : "fa fa-angle-down"}
            ></i>
          </button>
        </div>
      </section>

      {/* Devotionals Section */}
      <DailyDevotionals />
    </>
  );
}
