import { FaEnvelope, FaPhone, FaCalendar, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">

      {/* Profile */}
      <div className="profile">
        <img src="/profile.jpg" alt="Sai Kiran" />
        <h2>Sai Kiran</h2>
        <p className="role">Full Stack Developer</p>
      </div>
      <hr className="divider" />

      {/* Info */}
      <div className="info">

        <div className="info-box">
          <FaEnvelope />
          <div>
            <span className="label">EMAIL</span>
            <p>saikiran.7300@gmail.com</p>
          </div>
        </div>

        <div className="info-box">
          <FaPhone />
          <div>
            <span className="label">PHONE</span>
            <p>9949072310</p>
          </div>
        </div>

        <div className="info-box">
          <FaCalendar />
          <div>
            <span className="label">BIRTHDAY</span>
            <p>July 16, 2004</p>
          </div>
        </div>

        <div className="info-box">
          <FaMapMarkerAlt />
          <div>
            <span className="label">LOCATION</span>
            <p>India</p>
          </div>
        </div>

      </div>

      {/* Socials */}
      <div className="socials">
        <FaGithub />
        <FaLinkedin />
        <FaInstagram />
      </div>

    </div>
  );
}

export default Sidebar;