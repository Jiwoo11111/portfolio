import { motion } from "framer-motion";

function About() {
  return (
    <section className="section about" id="about">
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span>01</span>
        <h2>ABOUT ME</h2>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="about-label">
            FRONTEND-FOCUSED DEVELOPER
          </p>

          <h3>
            사용자 경험을 고민하고,
            <br />
            직접 구현하며 성장합니다.
          </h3>
        </motion.div>

        <motion.div
          className="about-description"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p>
            React와 TypeScript를 기반으로 
            다양한 웹 프로젝트를 구현하며 
            프론트엔드 개발 경험을 쌓았습니다.
          </p>

          <p>
            화면을 만드는 데 그치지 않고, 
            사용자의 흐름과 서비스가 동작하는 구조를 
            함께 이해하려고 노력해왔습니다.
          </p>

          <p>
            Node.js, Express, MongoDB를 활용해 
            API와 데이터 처리까지 직접 구현하며 
            프론트엔드와 백엔드를 연결하는 경험도 쌓았습니다.
          </p>
        </motion.div>
      </div>

      
    </section>
  );
}

export default About;