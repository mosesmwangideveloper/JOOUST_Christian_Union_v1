export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className="footer">
      <div className="footer-row">
        <div className="footer-col footer-brand">
          <img
            src="/src/Images/JOOUST_CU_Logo_v1.jpg"
            alt="JOOUST Logo"
            className="footer-logo"
            loading="lazy"
          />
          <p>
            Rooted in the Word. Alive in worship. Sent to shine. At JOOUST
            Christian Union, students gather, grow and go, all{" "}
            <strong>#InPursuitOfEternalGlory</strong>.
          </p>

          <h3 className="footer-follow">Follow Us</h3>
          <div className="footer-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61594156058725"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61594156058725"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <i className="fa fa-youtube-play" aria-hidden="true"></i>
            </a>

            <a
              href="https://www.tiktok.com/@jooustcu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                {/* Inline SVG because Font Awesome 4.7 has no TikTok icon.
                  fill="currentColor" makes it follow the same colour as the other icons */}
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>

            <a
              href="https://www.whatsapp.com/channel/0029VbE1MzXAjPXPIPYqwf3G"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whatsapp Channel"
            >
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>

            <li>
              <a href="#">Ministries</a>
            </li>
            <li>
              <a href="#">Blogs/Archives</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Leadership</a>
            </li>
            <li>
              <a href="">Give Online</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h2>Explore</h2>
          <ul>
            <li>
              <a href="">Sunday & Midweek Services</a>
            </li>
            <li>
              <a href="">Bible Study & Discipleship Sessions</a>
            </li>
            <li>
              <a href="">Inreach, Outreach & Missions</a>
            </li>
            <li>
              <a href="">MSM(Drama), Injoy, Compassionate Ministries</a>
            </li>
            <li>
              <a href="">Evangelistic Team</a>
            </li>
            <li>
              <a href="">Our Constitution</a>
            </li>
            <li>
              <a href="">Strategic Plan</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h2>Connect</h2>
          <ul className="footer-contact">
            <li>
              <a href="mailto:jooustchristianunion1@gmail.com">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                jooustchristianunion1@gmail.com
              </a>
            </li>

            <li>
              <a href="tel:+254743676768">
                <i className="fa fa-phone" aria-hidden="true"></i>
                Call us: 0743 676 768
              </a>
            </li>

            <li>
              <span>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                Bondo, Main Campus
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-row">
          <p>
            &copy; <span id="currentYear">{year} </span>
            JOOUST Christian Union. All rights reserved
          </p>

          <div className="footer-legal">
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </section>
  );
}
