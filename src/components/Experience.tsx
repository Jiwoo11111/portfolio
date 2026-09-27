import { motion } from "framer-motion";

function Experience() {
  return (
    <section className="section experience" id="experience">
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="experience-number">04</span>

        <h2>EDUCATION & CERTIFICATE</h2>
      </motion.div>

      <div className="experience-grid">
        {/* EDUCATION */}

        <motion.div
          className="education-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
        >
          <div className="column-title">
            EDUCATION
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">
                2024.07 — 2025.02
              </span>

              <h3>
                코드잇 프론트엔드 부트캠프
              </h3>

              <p>
                JavaScript, React, TypeScript,
                Next.js, Git 등 프론트엔드 개발에
                필요한 심화 기술을 학습했습니다.
              </p>

              <p>
                3개의 팀 프로젝트를 진행하며
                백엔드 개발자 및 디자이너와
                협업하고 다양한 기술을 실제
                프로젝트에 적용했습니다.
              </p>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">
                2021.03 — 2026.03
              </span>

              <h3>
                서울신학대학교 컴퓨터공학과
              </h3>

              <p>
                컴퓨터공학과 졸업
              </p>
            </div>
          </div>
        </motion.div>

        {/* CERTIFICATE */}

        <motion.div
          className="certificate-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >
          <div className="column-title">
            CERTIFICATE
          </div>

          <div className="certificate-list">
            <div className="certificate-item">
              <span>2024.12</span>

              <div>
                <strong>정보처리기사</strong>
                <small>
                  한국산업인력공단
                </small>
              </div>
            </div>

            <div className="certificate-item">
              <span>2020.04</span>

              <div>
                <strong>웹디자인기능사</strong>
                <small>
                  한국산업인력공단
                </small>
              </div>
            </div>

            <div className="certificate-item">
              <span>2020.05</span>

              <div>
                <strong>
                  컴퓨터그래픽스운용기능사
                </strong>

                <small>
                  한국산업인력공단
                </small>
              </div>
            </div>

            <div className="certificate-item">
              <span>2019.04</span>

              <div>
                <strong>GTQ 1급</strong>

                <small>
                  그래픽기술자격
                </small>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="experience-watermark"
        initial={{
          opacity: 0,
          x: 30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
      >
        Keep
        <br />
        Learning.
      </motion.div>
    </section>
  );
}

export default Experience;