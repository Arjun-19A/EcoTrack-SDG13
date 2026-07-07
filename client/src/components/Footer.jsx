import "../styles/footer.css";
import { FaLeaf, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2>
            <FaLeaf />
            EcoTrack
          </h2>

          <p>
            Helping people reduce their carbon footprint through sustainable
            daily habits.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <a href="/">Home</a>

          <a href="/calculator">Calculator</a>

          <a href="/dashboard">Dashboard</a>
        </div>

        <div>
          <h3>Connect</h3>

          <div className="socials">
            <FaGithub />

            <FaLinkedin />
          </div>
        </div>
      </div>

      <p className="copyright">© 2026 EcoTrack | SDG 13 Climate Action</p>
    </footer>
  );
}
