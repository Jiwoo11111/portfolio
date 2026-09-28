import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./OpenMindDetail.css";

function OpenMindDetail() {
  return (
    <main className="openmind-detail">
      {/* ==================== HERO ==================== */}
      <section className="openmind-hero">
        <Link to="/#projects" className="openmind-back">
          <ArrowLeft size={16} />
          BACK TO PROJECTS
        </Link>

        <motion.div
          className="openmind-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>PROJECT 01</span>

          <h1>OPENMIND</h1>

          <p>
            익명으로 고민을 나누고
            <br />
            서로의 이야기에 답하는 커뮤니티
          </p>
        </motion.div>

        <div className="openmind-meta">
          <div>
            <span>PERIOD</span>
            <p>2024.10 — 2024.11</p>
          </div>

          <div>
            <span>TYPE</span>
            <p>TEAM PROJECT</p>
          </div>

          <div>
            <span>ROLE</span>
            <p>FRONTEND</p>
          </div>

          <div>
            <span>TEAM</span>
            <p>FE 5명</p>
          </div>
        </div>
      </section>

      {/* ==================== MAIN IMAGE ==================== */}
      {/* ==================== PROJECT SCREENSHOTS ==================== */}

{/* ==================== PROJECT SCREENSHOTS ==================== */}
<section className="openmind-gallery">
  <div className="openmind-gallery-header">
    <span>PROJECT PREVIEW</span>
    <p>실제 서비스 화면</p>
  </div>

  <div className="openmind-gallery-grid">
    <motion.div
      className="openmind-gallery-main"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <img
        src="/images/openmind/profile.png"
        alt="OpenMind 프로필 화면"
      />
    </motion.div>

    <motion.div
      className="openmind-gallery-sub"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15 }}
    >
      <img
        src="/images/openmind/question.png"
        alt="OpenMind 질문 화면"
      />
    </motion.div>
  </div>
</section>

      {/* ==================== OVERVIEW ==================== */}
      <section className="openmind-section">
        <div className="openmind-section-number">
          <span>01</span>
          OVERVIEW
        </div>

        <motion.div
          className="openmind-section-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="openmind-eyebrow">ABOUT OPENMIND</p>

          <h2>
            익명성을 보장하며
            <br />
            자유롭게 이야기를 나누는
            <br />
            커뮤니티 서비스
          </h2>

          <div className="openmind-description">
            <p>
              <strong>OpenMind</strong>는 익명으로 질문을 주고받으며
              서로의 고민과 이야기를 공유할 수 있는 커뮤니티
              웹 애플리케이션입니다.
            </p>

            <p>
              게시글 작성, 수정, 삭제부터 질문과 답변,
              좋아요와 싫어요 등의 SNS 기능을 구현하여
              사용자 간의 다양한 상호작용을 경험할 수 있도록
              구성했습니다.
            </p>

            <p>
              이를 통해 SNS 서비스의 여러 기능이 어떻게
              유기적으로 연결되는지 이해하고,
              실제 서비스의 사용자 흐름을 고려하며 개발했습니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section className="openmind-section openmind-feature-section">
        <div className="openmind-section-number">
          <span>02</span>
          FEATURES
        </div>

        <div className="openmind-section-content">
          <p className="openmind-eyebrow">MAIN FEATURES</p>

          <h2>
            사용자의 행동을 중심으로
            <br />
            주요 기능을 구성했습니다.
          </h2>

          <div className="openmind-feature-list">
            <motion.article
              className="openmind-feature"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span>01</span>

              <div>
                <h3>게시글 작성 / 수정 / 삭제</h3>
                <p>
                  사용자가 자신의 게시글을 작성하고
                  필요에 따라 내용을 수정하거나 삭제할 수
                  있도록 CRUD 기능을 구현했습니다.
                </p>
              </div>
            </motion.article>

            <motion.article
              className="openmind-feature"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span>02</span>

              <div>
                <h3>질문 & 답변</h3>
                <p>
                  사용자가 다른 사용자에게 질문을 보내고,
                  받은 질문에 답변할 수 있도록 질문과
                  답변 기능을 구현했습니다.
                </p>
              </div>
            </motion.article>

            <motion.article
              className="openmind-feature"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>03</span>

              <div>
                <h3>좋아요 / 싫어요</h3>
                <p>
                  다른 사용자의 콘텐츠에 좋아요와 싫어요를
                  남길 수 있도록 구현하여 사용자 반응을
                  표현할 수 있도록 했습니다.
                </p>
              </div>
            </motion.article>

            <motion.article
              className="openmind-feature"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span>04</span>

              <div>
                <h3>링크 공유</h3>
                <p>
                  다른 플랫폼으로 콘텐츠를 공유할 수 있는
                  링크 공유 기능을 구현하고 외부 API를
                  조사하여 프로젝트에 적용했습니다.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ==================== TECHNOLOGY ==================== */}
      <section className="openmind-tech-section">
        <div className="openmind-section">
          <div className="openmind-section-number">
            <span>03</span>
            TECHNOLOGY
          </div>

          <div className="openmind-section-content">
            <p className="openmind-eyebrow">TECH STACK</p>

            <h2>
              프로젝트를 구성한
              <br />
              주요 기술
            </h2>

            <div className="openmind-tech-list">
              <div className="openmind-tech-item">
                <span>01</span>
                <strong>HTML / CSS</strong>
                <p>웹 페이지 구조 및 스타일링</p>
              </div>

              <div className="openmind-tech-item">
                <span>02</span>
                <strong>JavaScript</strong>
                <p>사용자 인터랙션 및 기능 구현</p>
              </div>

              <div className="openmind-tech-item">
                <span>03</span>
                <strong>React</strong>
                <p>컴포넌트 기반 UI 개발</p>
              </div>

              <div className="openmind-tech-item">
                <span>04</span>
                <strong>Styled Components</strong>
                <p>컴포넌트 단위 스타일 관리</p>
              </div>

              <div className="openmind-tech-item">
                <span>05</span>
                <strong>LocalStorage</strong>
                <p>브라우저 내 사용자 데이터 관리</p>
              </div>

              <div className="openmind-tech-item">
                <span>06</span>
                <strong>Git / GitHub</strong>
                <p>버전 관리 및 협업</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MY ROLE ==================== */}
      <section className="openmind-role-section">
        <div className="openmind-section">
          <div className="openmind-section-number">
            <span>04</span>
            MY ROLE
          </div>

          <div className="openmind-section-content">
            <p className="openmind-eyebrow">CONTRIBUTION</p>

            <h2>
              프로젝트에서
              <br />
              담당한 역할
            </h2>

            <div className="openmind-role-list">
              <div>
                <span>01</span>
                <p>피드 생성 폼 구현</p>
              </div>

              <div>
                <span>02</span>
                <p>질문 아이템 컴포넌트 구현</p>
              </div>

              <div>
                <span>03</span>
                <p>답변 아이템 컴포넌트 구현</p>
              </div>

              <div>
                <span>04</span>
                <p>API 데이터를 활용한 UI 구현</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== LEARNING ==================== */}
      <section className="openmind-section openmind-learning">
        <div className="openmind-section-number">
          <span>05</span>
          LEARNING
        </div>

        <div className="openmind-section-content">
          <p className="openmind-eyebrow">WHAT I LEARNED</p>

          <h2>
            더 나은 코드를 위한 고민
          </h2>

          <div className="openmind-description">
            <p>
              상태 관리를 활용해
필요한 데이터와 UI의 변화를 효율적으로 관리하고,
사용자의 행동에 즉각적으로 반응하는 인터페이스를 구현했습니다.
            </p>

            <p>
              또한 useMemo, useCallback과 커스텀 훅을 활용해
불필요한 렌더링을 줄이고 코드의 재사용성과
컴포넌트의 효율적인 동작을 고려하며 개발했습니다.
            </p>

            <p>
              JSDoc을 활용해 코드의 의도와 사용 방법을 명확하게 정리하면서
다른 사람이 코드를 이해하고 유지보수하기 쉬운
구조를 만드는 것에도 신경 썼습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== GITHUB ==================== */}
      <section className="openmind-end">
        <p>VIEW SOURCE CODE</p>

        <a
          href="https://github.com/fe11-part2-team8/openmind"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <ArrowUpRight size={22} />
        </a>
      </section>
    </main>
  );
}

export default OpenMindDetail;