import { useState, useEffect } from "react";
import EventsData from "./Latest_events_data";

export default function LatestEvents() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = EventsData.length;

  const [lightbox, setLightbox] = useState(null);

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    if (paused || lightbox) return;

    const timer = setInterval(next, 5000);

    return () => clearInterval(timer);
  }, [paused, current, lightbox]);

  useEffect(() => {
    const handlekey = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };

    window.addEventListener("keydown", handlekey);
    return () => window.removeEventListener("keydown", handlekey);
  }, []);

  const slides = EventsData.map((event) => (
    <article className="event-slide" key={event.id}>
      <img
        className="event-img"
        src={event.image}
        alt={event.title}
        onClick={() => setLightbox(event)}
      />
      <div className="event-info">
        <span className="event-date">{event.date}</span>
        <h3>{event.title}</h3>
        <p className="event-desc">{event.description}</p>
        <a
          className="event-download"
          href={event.image}
          download={event.downloadName}
        >
          Download <i className="fa fa-download" aria-hidden="true"></i>
        </a>
      </div>
    </article>
  ));

  const dots = EventsData.map((event, index) => (
    <button
      key={event.id}
      className={index === current ? "event-dot active" : "event-dot"}
      onClick={() => setCurrent(index)}
      aria-label={`Go to ${event.title}`}
    />
  ));

  return (
    <section
      className="latest-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <h2>See What's Happening ?</h2>
      <p>
        Feast Your Eyes On Some Thrilling Events & Activites That Happens Here
      </p>

      <div className="events-carousel">
        <button
          className="event-arrow left"
          onClick={prev}
          aria-label="Previous event"
        >
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </button>

        <div className="events-viewport">
          <div
            className="events-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides}
          </div>
        </div>

        <button
          className="event-arrow right"
          onClick={next}
          aria-label="Next event"
        >
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>

      <div className="event-dots">{dots}</div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>

          <img
            className="lightbox-img"
            src={lightbox.image}
            alt={lightbox.title}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
