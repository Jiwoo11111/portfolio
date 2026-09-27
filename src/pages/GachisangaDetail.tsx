import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./GachisangaDetail.css";

function GachisangaDetail() {
  return (
    <div className="gachisanga-detail">
      {/* HERO */}
      <section className="gachisanga-hero">
        <div className="gachisanga-container">
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
            PROJECT 04
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            GACHISANGA
          </motion.h1>

          <motion.p
            className="gachisanga-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            상권·인구·결제 데이터를 기반으로
            <br />
            창업 업종과 프랜차이즈를 추천하는 모바일 앱
          </motion.p>

          <motion.div
            className="project-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <span>PERIOD</span>
              <p>2025.07 — 2025.12</p>
            </div>

            <div>
              <span>TYPE</span>
              <p>SOLO PROJECT</p>
            </div>

            <div>
              <span>ROLE</span>
              <p>FULL STACK</p>
            </div>

            <div>
              <span>PLATFORM</span>
              <p>REACT NATIVE</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COVER */}
<section className="gachisanga-cover">
  <div className="gachisanga-container">
    <div className="gachisanga-images">
  <div className="gachisanga-image">
    <img src="/sangga1.png" alt="가치상가 프로젝트 화면 1" />
  </div>

  <div className="gachisanga-image">
    <img src="/sangga2.png" alt="가치상가 프로젝트 화면 2" />
  </div>

  <div className="gachisanga-image">
    <img src="/sangga3.png" alt="가치상가 프로젝트 화면 3" />
  </div>
</div>
  </div>
</section>

      {/* OVERVIEW */}
      <section className="gachisanga-section">
        <div className="gachisanga-container gachisanga-grid">
          <div className="section-label">
            <span>01</span>
            <span>OVERVIEW</span>
          </div>

          <div className="section-content">
            <h2>
              흩어진 상권 데이터를 모아
              <br />
              창업 의사결정을 돕다.
            </h2>

            <p>
              예비 창업자가 새로운 지역에 매장을 열 때에는 상권, 인구,
              경쟁 업종, 소비 패턴, 프랜차이즈 정보 등 다양한 데이터를
              종합적으로 확인해야 합니다.
            </p>

            <p>
              Gachisanga는 이러한 창업 의사결정 과정을 하나의 서비스에서
              탐색할 수 있도록 설계한 상권 분석 및 창업 추천 모바일
              애플리케이션입니다.
            </p>

            <p>
              사용자가 주소 또는 위치를 지정하면 주변 상권 데이터를
              분석하고, 업종 및 프랜차이즈 후보를 추천하도록 구현했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="gachisanga-dark">
        <div className="gachisanga-container">
          <div className="section-label light">
            <span>02</span>
            <span>USER PROCESS</span>
          </div>

          <div className="process-list">
            <div>
              <span>01</span>
              <h3>후보 지역 선정</h3>
              <p>창업을 고려하는 지역을 탐색합니다.</p>
            </div>

            <div>
              <span>02</span>
              <h3>상권 정보 탐색</h3>
              <p>선택한 지역의 인구와 상권 특성을 확인합니다.</p>
            </div>

            <div>
              <span>03</span>
              <h3>지도 기반 상가 파악</h3>
              <p>주변 상가와 업종 분포를 지도에서 확인합니다.</p>
            </div>

            <div>
              <span>04</span>
              <h3>프랜차이즈 정보 수집</h3>
              <p>추천 업종에 해당하는 프랜차이즈 정보를 탐색합니다.</p>
            </div>

            <div>
              <span>05</span>
              <h3>최종 의사결정</h3>
              <p>분석 결과와 추천 정보를 바탕으로 창업 후보를 비교합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DATA */}
      <section className="gachisanga-section">
        <div className="gachisanga-container gachisanga-grid">
          <div className="section-label">
            <span>03</span>
            <span>DATA PIPELINE</span>
          </div>

          <div className="section-content">
            <h2>
              서로 다른 데이터를
              <br />
              하나의 상권 데이터로 통합했습니다.
            </h2>

            <p>
              행정안전부 인구 데이터, 서울시 상권·결제 데이터,
              공정거래위원회 프랜차이즈 정보, 카카오맵 POI 데이터를
              수집하여 서비스에 활용했습니다.
            </p>

            <p>
              Node.js 기반 ETL 모듈을 구현하여 서로 다른 데이터의
              스키마를 정규화하고 수치 변환, 중복 제거, API 호출 제어,
              좌표 보정 등의 전처리 과정을 수행했습니다.
            </p>

            <div className="data-tags">
              <span>행안부 인구</span>
              <span>서울시 상권</span>
              <span>서울시 결제</span>
              <span>공정위 프랜차이즈</span>
              <span>카카오맵 POI</span>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="gachisanga-tech">
        <div className="gachisanga-container">
          <div className="section-label">
            <span>04</span>
            <span>ARCHITECTURE</span>
          </div>

          <div className="architecture">
            <div className="architecture-item">
              <small>CLIENT</small>
              <strong>React Native</strong>
              <p>지도 기반 검색 및 추천 결과 UI</p>
            </div>

            <div className="architecture-line">→</div>

            <div className="architecture-item">
              <small>SERVER</small>
              <strong>Node.js / Express</strong>
              <p>추천 API 및 데이터 처리</p>
            </div>

            <div className="architecture-line">→</div>

            <div className="architecture-item">
              <small>DATABASE</small>
              <strong>MongoDB</strong>
              <p>통합 상권 데이터 저장</p>
            </div>
          </div>

          <div className="tech-tags">
            <span>React Native</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Zod</span>
            <span>REST API</span>
          </div>
        </div>
      </section>

      {/* ALGORITHM */}
      <section className="gachisanga-dark algorithm-section">
        <div className="gachisanga-container">
          <div className="section-label light">
            <span>05</span>
            <span>RECOMMENDATION ALGORITHM</span>
          </div>

          <div className="algorithm-content">
            <h2>
              단순 추천을 넘어
              <br />
              추천 전략 자체를 비교했습니다.
            </h2>

            <p>
              업종별 인구·상권·결제·RSB·경쟁도·B2C/B2B 비율을 하나의
              feature vector로 통합하고, 업종의 행동 패턴을 기준으로
              아키타입을 구성했습니다.
            </p>

            <div className="strategy-list">
              <div>
                <span>BASELINE</span>
                <h3>기본 빈도 기반 추천</h3>
                <p>
                  반경 내 업종 분포를 기반으로 실제 상권의 업종 구성과
                  유사한 추천 결과를 생성합니다.
                </p>
              </div>

              <div>
                <span>GAP</span>
                <h3>틈새형 전략</h3>
                <p>
                  경쟁도가 낮은 업종에 가중치를 주어 상대적으로 공급이
                  적은 업종을 탐색합니다.
                </p>
              </div>

              <div>
                <span>TREND</span>
                <h3>인기형 전략</h3>
                <p>
                  경쟁도가 높은 업종에 일정 수준의 보너스를 부여하여
                  현재 상권에서 선택되는 업종의 경향을 반영합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPROVEMENT */}
      <section className="gachisanga-section">
        <div className="gachisanga-container gachisanga-grid">
          <div className="section-label">
            <span>06</span>
            <span>ALGORITHM IMPROVEMENT</span>
          </div>

          <div className="section-content">
            <h2>
              실제 데이터를 통해
              <br />
              추천 로직을 개선했습니다.
            </h2>

            <p>
              초기에는 gap 전략을 중심으로 경쟁도가 낮은 업종을 추천하도록
              설계했습니다. 하지만 백테스트 과정에서 경쟁도 패널티가
              지나치게 크게 적용되면서 실제 신규 점포 선택 패턴과
              차이가 발생했습니다.
            </p>

            <p>
              또한 중·소분류 업종마다 개별 가중치를 적용하는 방식은
              업종 수와 데이터 희소성 때문에 지속적인 튜닝이 어려웠습니다.
            </p>

            <p>
              이를 해결하기 위해 행동 패턴이 유사한 업종을 아키타입으로
              그룹화하고, 그룹 단위로 가중치를 조정할 수 있도록
              알고리즘 구조를 재설계했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* BACKTEST */}
      <section className="gachisanga-tech">
        <div className="gachisanga-container gachisanga-grid">
          <div className="section-label">
            <span>07</span>
            <span>BACKTEST</span>
          </div>

          <div className="section-content">
            <h2>
              약 2,000개 신규 점포를 대상으로
              <br />
              추천 성능을 검증했습니다.
            </h2>

            <p>
              2023년 3월과 2025년 6월의 서울 상가 데이터를 활용해 신규
              점포를 추출하고, 실제 선택된 업종과 추천 결과를 비교하는
              백테스트 파이프라인을 구축했습니다.
            </p>

            <div className="metric-grid">
              <div>
                <strong>Hit@5</strong>
                <span>Top 5 적중 여부</span>
              </div>

              <div>
                <strong>Precision@5</strong>
                <span>Top 5 정밀도</span>
              </div>

              <div>
                <strong>MRR</strong>
                <span>정답 순위 기반 평가</span>
              </div>

              <div>
                <strong>NDCG</strong>
                <span>추천 순위 품질 평가</span>
              </div>
            </div>

            <p>
              Random 기준선을 함께 구성하고 baseline, gap, trend 전략을
              동일한 평가 파이프라인에서 비교하여 추천 로직의 특성과
              한계를 분석했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* LEARNING */}
      <section className="gachisanga-section">
        <div className="gachisanga-container gachisanga-grid">
          <div className="section-label">
            <span>08</span>
            <span>LEARNING</span>
          </div>

          <div className="section-content">
            <h2>
              데이터를 수집하는 것에서
              <br />
              실제 추천까지 연결했습니다.
            </h2>

            <p>
              하나의 기능을 구현하는 것을 넘어 여러 출처의 데이터를
              수집하고 정제한 뒤 데이터베이스에 저장하고, 이를 다시
              추천 알고리즘과 모바일 UI까지 연결하는 전체 개발 과정을
              경험했습니다.
            </p>

            <p>
              특히 초기 알고리즘의 한계를 실제 데이터로 확인하고,
              아키타입과 여러 추천 전략을 도입한 뒤 백테스트를 통해
              비교하는 과정을 진행하면서 데이터 기반으로 기능을
              개선하는 경험을 할 수 있었습니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gachisanga-cta">
        <div className="gachisanga-container">
          <span>VIEW SOURCE CODE</span>

          <a
            href="https://github.com/gachisangga/gachisanga"
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

export default GachisangaDetail;