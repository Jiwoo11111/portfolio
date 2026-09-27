import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

function Hero() {
  return (
    <aside className="hero">
      <div className="hero-inner">

        {/* PROFILE IMAGE */}
        <motion.div
          className="hero-profile"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src="profile.JPG" alt="석지우 프로필" />
        </motion.div>

        {/* INTRO */}
        <div className="hero-content">

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-subtitle"
          >
            FRONTEND DEVELOPER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            끊임없이 배우고
            <br />
            <span>성장하는</span>
            <br />
            개발자 석지우입니다.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="hero-description"
          >
            새로운 기술을 배우는 것에서 그치지 않고
            <br />
            실제 문제에 적용하여 더 나은 사용자 경험을 만듭니다.
          </motion.p>

          {/* CONTACT */}
          <div className="hero-contact">
            <a href="tel:01064608002">
              010-6460-8002
            </a>

            <a href="mailto:jiwoo9665@gmail.com">
              jiwoo9665@gmail.com
            </a>

            <a
              href="https://github.com/Jiwoo11111"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="hero-bottom">
          <span>SEO JIWOO</span>

          <motion.div
            className="scroll"
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <span>SCROLL</span>
            <ArrowDown size={15} />
          </motion.div>
        </div>

      </div>
    </aside>
  );
}

export default Hero;