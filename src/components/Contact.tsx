import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="section contact" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-title">
          <span>04</span>
          <h2>CONTACT</h2>
        </div>

        <div className="contact-content">
          <div>
            <p className="contact-subtitle">
              LET'S WORK TOGETHER
            </p>

            <h2 className="contact-title">
              새로운 프로젝트와
              <br />
              기회를 기다리고 있습니다.
            </h2>
          </div>

          <div className="contact-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <div>
                <FaGithub size={20} />
                <span>GitHub</span>
              </div>

              <ArrowUpRight size={20} />
            </a>

            <a
              href="mailto:your@email.com"
              className="contact-link"
            >
              <div>
                <Mail size={20} />
                <span>Email</span>
              </div>

              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </motion.div>

      <footer>
        <span>© 2026 JIWOO</span>

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          BACK TO TOP ↑
        </button>
      </footer>
    </section>
  );
}

export default Contact;