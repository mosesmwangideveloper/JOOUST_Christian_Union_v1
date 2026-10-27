export default function ExecutiveCard({
  name,
  role,
  bio,
  photo,
  email,
  phone,
}) {
  return (
    <article className="exec-card" tabIndex={0}>
      <img src={photo} alt={name} className="exec-photo" />

      <div className="exec-info">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>

      <div className="exec-overlay">
        <p className="exec-bio">{bio}</p>

        <div className="exec-actions">
          {email && (
            <a href={`mailto:${email}`} className="exec-btn  ">
              <i className="fa fa-envelope"></i> Email
            </a>
          )}

          {phone && (
            <a href={`tel:${phone}`} className="exec-btn  ">
              <i className="fa fa-phone"></i> Call
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
