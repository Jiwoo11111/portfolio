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
            FRONTEND DEVELOPER
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
            프론트엔드 개발을 중심으로 다양한
            프로젝트를 경험했습니다.
          </p>

          <p>
            새로운 기술을 배우는 것에 그치지 않고,
            실제 문제에 어떻게 적용할 수 있는지
            고민하고 더 나은 사용자 경험으로
            연결하는 과정을 중요하게 생각합니다.
          </p>

          <p>
            React와 TypeScript를 기반으로
            재사용 가능한 컴포넌트를 만들고,
            협업 과정에서 더 좋은 구조와
            효율적인 개발 방법을 찾아왔습니다.
          </p>
        </motion.div>
      </div>

      
    </section>
  );
}

export default About;