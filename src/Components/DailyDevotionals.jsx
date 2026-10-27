import { useState } from "react";

const devotionals = [
  {
    id: 1,
    day: "Monday",
    testament: "Old Testament",
    title: "Do Not Fear",
    verse:
      "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.",
    reference: "Isaiah 41:10",
    message:
      "Whatever you are facing this week, you do not face it alone. Open your Bible, speak to Jesus, and let His presence steady your heart.",
  },
  {
    id: 2,
    day: "Tuesday",
    testament: "New Testament",
    title: "Strength in Weakness",
    verse:
      "And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness.",
    reference: "2 Corinthians 12:9",
    message:
      "Your weakness is not the end of the story. Bring it to Jesus today; His grace is enough, and His strength shows best where ours runs out.",
  },
  {
    id: 3,
    day: "Wednesday",
    testament: "Old Testament",
    title: "God Is Near",
    verse:
      "The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.",
    reference: "Psalm 34:18",
    message:
      "If your heart is heavy, the Lord has not turned away. Draw close to Him in prayer and in His Word, and let His nearness comfort you.",
  },
  {
    id: 4,
    day: "Thursday",
    testament: "New Testament",
    title: "Rest for the Weary",
    verse:
      "Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls. For my yoke is easy, and my burden is light.",
    reference: "Matthew 11:28-30",
    message:
      "Tired, stretched, or carrying more than you can hold? Jesus invites you to come as you are. Spend a quiet moment with Him and receive His rest.",
  },
  {
    id: 5,
    day: "Friday",
    testament: "Old Testament",
    title: "New Mercies Every Morning",
    verse:
      "It is of the LORD'S mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.",
    reference: "Lamentations 3:22-23",
    message:
      "Yesterday may have been hard, but this morning comes with fresh mercy. Start the day in the Word and walk with Jesus through it.",
  },
  {
    id: 6,
    day: "Saturday",
    testament: "New Testament",
    title: "Peace Over Anxiety",
    verse:
      "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.",
    reference: "Philippians 4:6-7",
    message:
      "Instead of carrying your worries alone, turn them into prayers. Share them with the Lord and with your CU family, and let His peace guard your heart.",
  },
  {
    id: 7,
    day: "Sunday",
    testament: "Old Testament",
    title: "Enter With Thanksgiving",
    verse:
      "Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name. For the LORD is good; his mercy is everlasting; and his truth endureth to all generations.",
    reference: "Psalm 100:4-5",
    message:
      "Come with a thankful heart today. Gather with your fellowship, lift your voice in praise, and remember how good the Lord has been to you.",
  },
];

// JavaScript counts Sunday as 0, so this shifts it to Monday = 0 ... Sunday = 6.
function getTodayIndex() {
  return ((new Date().getDay() + 6) % 7) % devotionals.length;
}

export default function DailyDevotionals() {
  // Start on today's verse
  const [current, setCurrent] = useState(getTodayIndex);
  const total = devotionals.length;
  const item = devotionals[current];

  // Arrows: go forward or back, looping around at the ends
  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  // One dot per devotional (reuses your existing dot styles)
  const dots = devotionals.map((d, index) => (
    <button
      key={d.id}
      className={index === current ? "event-dot active" : "event-dot"}
      onClick={() => setCurrent(index)}
      aria-label={`Read ${d.day}'s devotional`}
    />
  ));

  return (
    <section className="devo-section" id="devotionals">
      <h2>Daily Devotionals</h2>
      <p className="devo-subtitle">Start your day with a word from God.</p>

      <div className="devo-wrap">
        <button
          className="devo-arrow left"
          onClick={prev}
          aria-label="Previous devotional"
        >
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </button>

        {/* key={item.id} makes the card fade in again each time it changes */}
        <article className="devo-card" key={item.id}>
          <span className="devo-tag">{item.testament}</span>
          <h3>{item.title}</h3>
          <span className="devo-day">
            {item.day}
            {current === getTodayIndex() && " · Today"}
          </span>
          <blockquote className="devo-verse">“{item.verse}”</blockquote>
          <cite className="devo-ref">— {item.reference} (KJV)</cite>
          <p className="devo-message">{item.message}</p>
        </article>

        <button
          className="devo-arrow right"
          onClick={next}
          aria-label="Next devotional"
        >
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>

      <div className="event-dots">{dots}</div>
    </section>
  );
}
