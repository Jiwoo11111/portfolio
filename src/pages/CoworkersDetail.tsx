import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./CoworkersDetail.css";

function CoworkersDetail() {
  return (
    <div className="coworkers-detail">
      {/* HERO */}
      <section className="coworkers-hero">
        <div className="coworkers-container">
          <Link to="/" className="back-link">
            <ArrowLeft size={18} />
            BACK TO HOME
          </Link>

          <motion.div
            className="project-number"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            PROJECT 03
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            COWORKERS
          </motion.h1>

          <motion.p
            className="coworkers-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            팀 단위 업무 배정 및 현황 공유를 위한
            <br />
            To-do 기반 업무 관리 서비스
          </motion.p>

          <motion.div
            className="project-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <span>PERIOD</span>
              <p>2025.01 — 2025.02</p>
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
          </motion.div>
        </div>
      </section>

      {/* COVER */}
<section className="coworkers-cover">
  <div className="coworkers-image-gallery">
    <motion.div
      className="coworkers-image-main"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <img
        src="/coworkers-1.png"
        alt="Coworkers 업무 관리 화면"
      />
    </motion.div>

    <div className="coworkers-image-row">
      <motion.div
        className="coworkers-image-small"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
      >
        <img
          src="/coworkers-2.png"
          alt="Coworkers 팀원 초대 화면"
        />
      </motion.div>

      <motion.div
        className="coworkers-image-small"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <img
          src="/coworkers-3.png"
          alt="Coworkers 업무 체크 화면"
        />
      </motion.div>
    </div>
  </div>
</section>

      {/* OVERVIEW */}
      <section className="coworkers-section">
        <div className="coworkers-container coworkers-grid">
          <div className="section-label">
            <span>01</span>
            <span>OVERVIEW</span>
          </div>

          <div className="section-content">
            <h2>
              업무를 한 곳에서 관리하고
              <br />
              팀의 진행 상황을 공유하다.
            </h2>

            <p>
              Coworkers는 팀 단위로 업무를 배정하고 진행 상황을 공유할 수
              있도록 제작한 To-do 기반 업무 관리 서비스입니다.
            </p>

            <p>
              업무 생성과 배정부터 완료 여부 확인, 성과 지표 확인까지
              하나의 서비스 안에서 관리할 수 있도록 구성했습니다.
              다양한 화면 크기에 대응하는 반응형 UI와 공통 컴포넌트를
              활용해 일관된 사용자 경험을 구현했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="coworkers-features">
        <div className="coworkers-container">
          <div className="section-label light">
            <span>02</span>
            <span>FEATURES</span>
          </div>

          <div className="feature-list">
            <motion.div
              className="feature-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span>01</span>
              <div>
                <h3>업무 배정 & To-do 관리</h3>
                <p>
                  팀원이 수행해야 할 업무를 생성하고 담당자를 지정하여
                  효율적으로 업무를 관리할 수 있습니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="feature-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span>02</span>
              <div>
                <h3>업무 현황 및 성과 확인</h3>
                <p>
                  업무 진행 상황과 완료 상태를 시각적으로 확인할 수 있도록
                  구성했습니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="feature-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span>03</span>
              <div>
                <h3>자유 게시판</h3>
                <p>
                  팀원 간 자유롭게 의견을 공유할 수 있는 게시판 기능을
                  구현했습니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="feature-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span>04</span>
              <div>
                <h3>반응형 UI</h3>
                <p>
                  다양한 화면 크기에서도 주요 기능을 편리하게 사용할 수
                  있도록 반응형 UI를 적용했습니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="coworkers-tech">
        <div className="coworkers-container coworkers-grid">
          <div className="section-label">
            <span>03</span>
            <span>TECHNOLOGY</span>
          </div>

          <div className="tech-content">
            <div className="tech-group">
              <span>FRONTEND</span>
              <div className="tech-tags">
                <span>TypeScript</span>
                <span>React</span>
                <span>Next.js</span>
              </div>
            </div>

            <div className="tech-group">
              <span>UI / DEVELOPMENT</span>
              <div className="tech-tags">
                <span>Storybook</span>
                <span>API</span>
                <span>Responsive UI</span>
              </div>
            </div>

            <div className="tech-group">
              <span>TOOLS</span>
              <div className="tech-tags">
                <span>Git</span>
                <span>GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MY ROLE */}
      <section className="coworkers-section">
        <div className="coworkers-container coworkers-grid">
          <div className="section-label">
            <span>04</span>
            <span>MY ROLE</span>
          </div>

          <div className="section-content">
            <h2>
              API부터 게시판까지,
              <br />
              서비스의 핵심 기능을 구현했습니다.
            </h2>

            <div className="role-list">
              <div>
                <span>01</span>
                <p>
                  <strong>전체 API 함수 구현</strong>
                  <br />
                  서비스에서 사용하는 API 함수를 구현하고 각 페이지와
                  데이터가 연결될 수 있도록 구성했습니다.
                </p>
              </div>

              <div>
                <span>02</span>
                <p>
                  <strong>이미지 업로드 컴포넌트</strong>
                  <br />
                  게시글 작성 과정에서 이미지를 업로드하고 관리할 수 있는
                  컴포넌트를 구현했습니다.
                </p>
              </div>

              <div>
                <span>03</span>
                <p>
                  <strong>자유게시판 페이지</strong>
                  <br />
                  게시글 목록 및 상세 내용을 확인하고 게시글을 작성할 수
                  있는 자유게시판 페이지를 담당했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT */}
      <section className="coworkers-development">
        <div className="coworkers-container">
          <div className="section-label">
            <span>05</span>
            <span>DEVELOPMENT</span>
          </div>

          <div className="development-content">
            <h2>
              공통 컴포넌트와 외부 라이브러리를 활용해
              <br />
              일관된 UI를 구현했습니다.
            </h2>

            <p>
              팀 프로젝트에서 여러 페이지가 동시에 개발되는 만큼,
              반복적으로 사용되는 UI를 공통 컴포넌트로 관리하는 것이
              중요했습니다.
            </p>

            <p>
              또한 달력, 팝오버, 모달 등 다양한 UI 요소를 외부 패키지를
              활용해 구현하고 프로젝트의 디자인과 사용 환경에 맞게
              조정했습니다.
            </p>

            <p>
              이를 통해 단순히 기능을 구현하는 것을 넘어 기존 라이브러리를
              분석하고 프로젝트에 맞게 적용하는 경험을 쌓았습니다.
            </p>
          </div>
        </div>
      </section>

      {/* LEARNING */}
      <section className="coworkers-section learning-section">
        <div className="coworkers-container coworkers-grid">
          <div className="section-label">
            <span>06</span>
            <span>LEARNING</span>
          </div>

          <div className="section-content">
            <h2>
              재사용하기 좋은 구조와
              <br />
              빠른 경험을 고민했습니다.
            </h2>

            <p>
              Storybook을 활용해 공통 컴포넌트를 독립적인 환경에서 관리하면서
컴포넌트의 상태와 UI를 쉽게 확인하고
시각적 테스트와 문서화를 통해 재사용성과 유지보수성을 높였습니다.
            </p>

            <p>
              또한 Sharp를 활용해 이미지 용량을 최적화하고
불필요한 리소스의 크기를 줄이면서
페이지 로딩 속도와 전반적인 성능을 개선하는 경험을 했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="coworkers-cta">
        <div className="coworkers-container">
          <span>VIEW SOURCE CODE</span>

          <a
            href="https://github.com/Team-7-Coworkers/coworkers"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <ArrowUpRight size={28} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default CoworkersDetail;