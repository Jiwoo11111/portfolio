import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./LinkbraryDetail.css";

function LinkbraryDetail() {
  return (
    <main className="linkbrary-detail">
      {/* ==================== HERO ==================== */}
      <section className="linkbrary-hero">
        <Link to="/#projects" className="linkbrary-back">
          <ArrowLeft size={16} />
          BACK TO PROJECTS
        </Link>

        <motion.div
          className="linkbrary-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>PROJECT 02</span>

          <h1>LINKBRARY</h1>

          <p>
            원하는 링크를 저장하고
            <br />
            검색하고 공유하는 링크 아카이브
          </p>
        </motion.div>

        <div className="linkbrary-meta">
          <div>
            <span>PERIOD</span>
            <p>2024.12 — 2025.01</p>
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
            <p>FE 4명</p>
          </div>
        </div>
      </section>

      {/* ==================== COVER ==================== */}
<section className="linkbrary-cover">
  <div className="linkbrary-cover-image">
    <img
      src="/images/linkbrary-main.png"
      alt="Linkbrary 프로젝트 화면"
    />
  </div>
</section>

      {/* ==================== OVERVIEW ==================== */}
      <section className="linkbrary-section">
        <div className="linkbrary-section-number">
          <span>01</span>
          OVERVIEW
        </div>

        <motion.div
          className="linkbrary-section-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="linkbrary-eyebrow">ABOUT LINKBRARY</p>

          <h2>
            흩어진 링크를 모아
            <br />
            나만의 공간에서
            <br />
            관리하는 서비스
          </h2>

          <div className="linkbrary-description">
            <p>
              <strong>Linkbrary</strong>는 인터넷에서 발견한
              다양한 링크를 저장하고 검색하며,
              폴더를 통해 체계적으로 관리할 수 있는
              웹 애플리케이션입니다.
            </p>

            <p>
              저장한 링크를 카드 형태로 확인할 수 있도록
              구성하고, 필요한 링크를 빠르게 찾을 수 있도록
              검색 기능을 제공합니다.
            </p>

            <p>
              또한 카카오톡, 이메일 등 외부 플랫폼과의
              공유 기능을 구현하여 저장한 링크를
              다른 사용자와 쉽게 공유할 수 있도록 했습니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section className="linkbrary-section linkbrary-feature-section">
        <div className="linkbrary-section-number">
          <span>02</span>
          FEATURES
        </div>

        <div className="linkbrary-section-content">
          <p className="linkbrary-eyebrow">MAIN FEATURES</p>

          <h2>
            링크를 저장하는 것부터
            <br />
            공유하는 순간까지
          </h2>

          <div className="linkbrary-feature-list">
            <motion.article
              className="linkbrary-feature"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span>01</span>

              <div>
                <h3>링크 저장</h3>
                <p>
                  원하는 링크를 저장하고 제목과 정보를
                  확인할 수 있도록 카드 형태의 UI로
                  구성했습니다.
                </p>
              </div>
            </motion.article>

            <motion.article
              className="linkbrary-feature"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span>02</span>

              <div>
                <h3>링크 검색</h3>
                <p>
                  저장한 링크가 많아졌을 때 원하는 콘텐츠를
                  빠르게 찾을 수 있도록 검색 기능을 구현했습니다.
                </p>
              </div>
            </motion.article>

            <motion.article
              className="linkbrary-feature"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>03</span>

              <div>
                <h3>폴더 관리</h3>
                <p>
                  저장한 링크를 폴더별로 분류하여
                  목적에 따라 효율적으로 관리할 수 있도록
                  구현했습니다.
                </p>
              </div>
            </motion.article>

            <motion.article
              className="linkbrary-feature"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span>04</span>

              <div>
                <h3>외부 플랫폼 공유</h3>
                <p>
                  카카오톡과 이메일 등 외부 플랫폼을 활용하여
                  저장한 링크를 다른 사용자와 공유할 수 있도록
                  구현했습니다.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ==================== TECHNOLOGY ==================== */}
      <section className="linkbrary-tech-section">
        <div className="linkbrary-section">
          <div className="linkbrary-section-number">
            <span>03</span>
            TECHNOLOGY
          </div>

          <div className="linkbrary-section-content">
            <p className="linkbrary-eyebrow">TECH STACK</p>

            <h2>
              데이터와 화면을 연결하고
              <br />
              사용자 경험을 구현했습니다.
            </h2>

            <div className="linkbrary-tech-list">
              <div className="linkbrary-tech-item">
                <span>01</span>
                <strong>TypeScript</strong>
                <p>타입을 기반으로 안정적인 코드 작성</p>
              </div>

              <div className="linkbrary-tech-item">
                <span>02</span>
                <strong>React</strong>
                <p>컴포넌트 기반 UI 개발</p>
              </div>

              <div className="linkbrary-tech-item">
                <span>03</span>
                <strong>Next.js</strong>
                <p>페이지 구성 및 웹 애플리케이션 개발</p>
              </div>

              <div className="linkbrary-tech-item">
                <span>04</span>
                <strong>API</strong>
                <p>서버 데이터 통신 및 화면과의 연결</p>
              </div>

              <div className="linkbrary-tech-item">
                <span>05</span>
                <strong>Git / GitHub</strong>
                <p>버전 관리 및 팀 협업</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MY ROLE ==================== */}
      <section className="linkbrary-role-section">
        <div className="linkbrary-section">
          <div className="linkbrary-section-number">
            <span>04</span>
            MY ROLE
          </div>

          <div className="linkbrary-section-content">
            <p className="linkbrary-eyebrow">CONTRIBUTION</p>

            <h2>
              프로젝트에서
              <br />
              담당한 역할
            </h2>

            <div className="linkbrary-role-list">
              <div>
                <span>01</span>
                <p>링크 카드 UI 및 관련 컴포넌트 구현</p>
              </div>

              <div>
                <span>02</span>
                <p>React.memo / useCallback을 활용한 렌더링 최적화</p>
              </div>

              <div>
                <span>03</span>
                <p>Intersection Observer를 활용한 Lazy Loading 구현</p>
              </div>

              <div>
                <span>04</span>
                <p>API 데이터를 활용한 화면 구성 및 사용자 인터랙션 구현</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DEVELOPMENT ==================== */}
      <section className="linkbrary-section linkbrary-development">
        <div className="linkbrary-section-number">
          <span>05</span>
          DEVELOPMENT
        </div>

        <div className="linkbrary-section-content">
          <p className="linkbrary-eyebrow">DEVELOPMENT PROCESS</p>

          <h2>
            많은 링크를
            <br />
            어떻게 효율적으로 보여줄 것인가
          </h2>

          <div className="linkbrary-description">
            <p>
              링크가 많아질수록 한 화면에서 모든 데이터를
              렌더링하는 것은 사용자 경험과 성능 측면에서
              부담이 될 수 있다고 판단했습니다.
            </p>

            <p>
              이를 개선하기 위해 <strong>Intersection Observer</strong>를
              활용하여 사용자가 화면을 탐색하는 시점에 맞춰
              콘텐츠를 불러오는 Lazy Loading을 적용했습니다.
            </p>

            <p>
              또한 React.memo와 useCallback을 활용하여
              불필요한 컴포넌트 렌더링을 줄이고,
              반복적으로 사용되는 UI의 성능을 개선했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== LEARNING ==================== */}
      <section className="linkbrary-learning">
        <div className="linkbrary-section">
          <div className="linkbrary-section-number">
            <span>06</span>
            LEARNING
          </div>

          <div className="linkbrary-section-content">
            <p className="linkbrary-eyebrow">WHAT I LEARNED</p>

            <h2>
              성능과 사용자 경험을 함께 고민했습니다.
            </h2>

            <div className="linkbrary-description">
              <p>
                컴포넌트의 불필요한 렌더링을 줄이기 위해
React.memo와 useCallback을 활용하며
상황에 맞는 렌더링 최적화 방법을 적용했습니다.
              </p>

              <p>
                또한 Intersection Observer를 활용해
사용자가 필요한 시점에 콘텐츠를 불러오는
레이지 로딩을 구현하면서
성능과 사용자 경험을 함께 고려하는 방법을 익혔습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== GITHUB ==================== */}
      <section className="linkbrary-end">
        <p>VIEW SOURCE CODE</p>

        <a
          href="https://github.com/codeit-fe11-part3-team4/linkbrary"
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

export default LinkbraryDetail;