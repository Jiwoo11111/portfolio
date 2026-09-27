import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./UsedMarketDetail.css";

function UsedMarketDetail() {
  return (
    <div className="used-market-detail">
      {/* HERO */}
      <section className="used-market-hero">
        <div className="used-market-container">
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
            PROJECT 05
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            PANDA MARKET
          </motion.h1>

          <motion.p
            className="used-market-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            상품 등록부터 구매와 판매까지
            <br />
            중고 거래의 전 과정을 관리하는 웹 애플리케이션
          </motion.p>

          <motion.div
            className="project-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <span>TYPE</span>
              <p>SOLO PROJECT</p>
            </div>

            <div>
              <span>ROLE</span>
              <p>FRONTEND</p>
            </div>

            <div>
              <span>STACK</span>
              <p>REACT → NEXT.JS</p>
            </div>

            <div>
              <span>PLATFORM</span>
              <p>WEB</p>
            </div>
          </motion.div>
        </div>
      </section>

            {/* COVER */}
<section className="panda-cover">
  <div className="panda-container">
    <div className="panda-images">
  <div className="panda-image">
  <img src="/projects/panda1.png" alt="판다마켓 프로젝트 화면 1" />
</div>

<div className="panda-image">
  <img src="/projects/panda2.png" alt="판다마켓 프로젝트 화면 2" />
</div>

</div>
  </div>
</section>

      {/* OVERVIEW */}
      <section className="used-market-section">
        <div className="used-market-container used-market-grid">
          <div className="section-label">
            <span>01</span>
            <span>OVERVIEW</span>
          </div>

          <div className="section-content">
            <h2>
              상품 등록부터 거래까지
              <br />
              하나의 서비스에서.
            </h2>

            <p>
              Panda Market은 사용자가 상품을 등록하고 다른 사용자의
              상품을 탐색하며 구매와 판매 과정을 경험할 수 있도록
              구현한 중고 마켓 플랫폼입니다.
            </p>

            <p>
              상품 목록과 상세 페이지를 중심으로 상품 등록, 검색,
              거래 관련 UI 등 중고 거래 서비스에서 필요한 주요
              사용자 흐름을 구현했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="used-market-dark">
        <div className="used-market-container">
          <div className="section-label light">
            <span>02</span>
            <span>FEATURES</span>
          </div>

          <div className="feature-list">
            <div>
              <span>01</span>
              <div>
                <h3>상품 등록</h3>
                <p>
                  상품 이미지와 상품 정보를 입력하여 새로운 상품을
                  등록할 수 있도록 구현했습니다.
                </p>
              </div>
            </div>

            <div>
              <span>02</span>
              <div>
                <h3>상품 탐색</h3>
                <p>
                  등록된 상품을 목록 형태로 확인하고 상품 상세 정보를
                  확인할 수 있도록 구성했습니다.
                </p>
              </div>
            </div>

            <div>
              <span>03</span>
              <div>
                <h3>상품 상세</h3>
                <p>
                  상품 이미지와 가격, 설명 등의 정보를 직관적으로
                  확인할 수 있도록 상세 페이지를 구현했습니다.
                </p>
              </div>
            </div>

            <div>
              <span>04</span>
              <div>
                <h3>중고 거래 흐름</h3>
                <p>
                  상품 등록부터 구매와 판매로 이어지는 전체 서비스
                  흐름을 고려하여 UI를 구성했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MIGRATION */}
      <section className="used-market-tech">
        <div className="used-market-container used-market-grid">
          <div className="section-label">
            <span>03</span>
            <span>MIGRATION</span>
          </div>

          <div className="section-content">
            <h2>
              React로 시작해
              <br />
              Next.js로 확장했습니다.
            </h2>

            <p>
              프로젝트 초기에는 React를 기반으로 웹 애플리케이션을
              구현했습니다. 이후 Next.js 환경으로 프로젝트를
              마이그레이션하며 기존 React 프로젝트의 구조와 코드를
              Next.js 환경에 맞게 변경했습니다.
            </p>

            <p>
              단순히 프레임워크를 교체하는 것이 아니라 기존 컴포넌트와
              페이지 구조를 유지하면서 Next.js의 라우팅 구조와
              프로젝트 환경에 맞게 코드를 재구성하는 과정을
              경험했습니다.
            </p>

            <div className="migration-flow">
              <div>
                <small>INITIAL</small>
                <strong>React</strong>
              </div>

              <div className="migration-arrow">→</div>

              <div>
                <small>MIGRATION</small>
                <strong>Next.js</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT */}
      <section className="used-market-section">
        <div className="used-market-container used-market-grid">
          <div className="section-label">
            <span>04</span>
            <span>DEVELOPMENT</span>
          </div>

          <div className="section-content">
            <h2>
              기존 프로젝트를
              <br />
              새로운 환경으로 재구성했습니다.
            </h2>

            <div className="development-list">
              <div>
                <span>01</span>
                <p>
                  <strong>React 기반 초기 구현</strong>
                  <br />
                  컴포넌트를 기반으로 상품 목록과 상세 화면 등
                  주요 UI를 구현했습니다.
                </p>
              </div>

              <div>
                <span>02</span>
                <p>
                  <strong>Next.js 마이그레이션</strong>
                  <br />
                  기존 React 프로젝트를 Next.js 기반 프로젝트로
                  전환하고 페이지 구조를 재구성했습니다.
                </p>
              </div>

              <div>
                <span>03</span>
                <p>
                  <strong>컴포넌트 구조 유지 및 개선</strong>
                  <br />
                  기존 컴포넌트의 역할을 유지하면서 새로운 환경에
                  맞게 코드를 수정했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="used-market-tech technology-section">
        <div className="used-market-container used-market-grid">
          <div className="section-label">
            <span>05</span>
            <span>TECHNOLOGY</span>
          </div>

          <div className="technology-content">
            <div className="tech-group">
              <span>FRONTEND</span>

              <div className="tech-tags">
                <span>TypeScript</span>
                <span>React</span>
                <span>Next.js</span>
              </div>
            </div>

            <div className="tech-group">
              <span>DEVELOPMENT</span>

              <div className="tech-tags">
                <span>Component</span>
                <span>Responsive UI</span>
                <span>Routing</span>
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

      {/* LEARNING */}
      <section className="used-market-section">
        <div className="used-market-container used-market-grid">
          <div className="section-label">
            <span>06</span>
            <span>LEARNING</span>
          </div>

          <div className="section-content">
            <h2>
              프레임워크의 변화에 대응하며
              <br />
              프로젝트를 발전시켰습니다.
            </h2>

            <p>
              React로 프로젝트를 처음 구현한 뒤 Next.js로 직접
              마이그레이션하면서 두 환경의 프로젝트 구조와 개발
              방식의 차이를 경험했습니다.
            </p>

            <p>
              기존 코드를 그대로 사용하는 것보다 현재 프로젝트의
              구조를 파악하고 새로운 프레임워크의 방식에 맞춰
              코드를 수정하는 과정이 중요하다는 것을 배웠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="used-market-cta">
        <div className="used-market-container">
          <span>VIEW SOURCE CODE</span>

          <a
            href="https://github.com/Jiwoo11111/11-Sprint-Mission/tree/Next-%EC%84%9D%EC%A7%80%EC%9A%B0-sprint11"
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

export default UsedMarketDetail;