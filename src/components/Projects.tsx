import { motion } from "framer-motion";

import {
  ArrowUpRight,
  BrainCircuit,
  Link2,
  UsersRound,
  Store,
  ShoppingBag,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { projects } from "../data/projects";


function Projects() {
  const navigate = useNavigate();

  const handleProjectClick = (title: string) => {
    if (title === "OpenMind") {
      navigate("/projects/openmind");
    }

    if (title === "Linkbrary") {
      navigate("/projects/linkbrary");
    }

    if (title === "Coworkers") {
      navigate("/projects/coworkers");
    }

    if (title === "창업 업종 및 프랜차이즈 추천") {
      navigate("/projects/gachisanga");
    }

    if (title === "판다마켓") {
      navigate("/projects/panda-market");
    }
  };


  // 프로젝트별 아이콘
  const getProjectIcon = (title: string) => {
    if (title === "OpenMind") {
      return <BrainCircuit size={34} strokeWidth={1.8} />;
    }

    if (title === "Linkbrary") {
      return <Link2 size={34} strokeWidth={1.8} />;
    }

    if (title === "Coworkers") {
      return <UsersRound size={34} strokeWidth={1.8} />;
    }

    if (title === "창업 업종 및 프랜차이즈 추천") {
      return <Store size={34} strokeWidth={1.8} />;
    }

    if (title === "판다마켓") {
      return <ShoppingBag size={34} strokeWidth={1.8} />;
    }

    return <Store size={34} strokeWidth={1.8} />;
  };


  return (
    <section className="section projects" id="projects">

      {/* PROJECT HEADER */}
      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="projects-heading-left">

          <div className="projects-label">
            <span></span>
            PROJECTS
          </div>

          <h2>My Projects</h2>

          <p>
            지금까지 진행한 프로젝트들을 소개합니다.
          </p>

        </div>

        <div className="projects-count">
          <strong>{projects.length}+</strong>
          <span>PROJECTS</span>
        </div>

      </motion.div>


      {/* PROJECT CARDS */}
      <div className="project-grid">

        {projects.map((project, index) => (

          <motion.article
            className="project-card"
            key={project.id}

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.15,
            }}

            transition={{
              duration: 0.55,
              delay: index * 0.08,
            }}

            onClick={() =>
              handleProjectClick(project.title)
            }
          >

            {/* CARD TOP */}
            <div className="project-card-top">

              <div className="project-icon">
                {getProjectIcon(project.title)}
              </div>

              <div className="project-open">
                <ArrowUpRight
                  size={19}
                  strokeWidth={1.8}
                />
              </div>

            </div>


            {/* PROJECT INFO */}
            <div className="project-card-info">

              <span className="project-category">
                {project.category}
              </span>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

            </div>


            {/* TECH */}
            <div className="project-tech">

              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="project-tech-tag"
                >
                  <i>
                    {tech.substring(0, 2)}
                  </i>

                  {tech}
                </span>
              ))}

            </div>


            {/* GITHUB */}
            {project.github && (
              <a
                className="project-github"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) =>
                  e.stopPropagation()
                }
              >
                GitHub ↗
              </a>
            )}

          </motion.article>

        ))}

      </div>


      {/* BOTTOM TECH STACK */}
      <motion.div
        className="projects-tech-stack"

        initial={{
          opacity: 0,
          y: 30,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          duration: 0.6,
        }}
      >

        <div className="tech-stack-title">
          <span></span>
          TECH STACK
        </div>

        <div className="tech-stack-list">

          {[
            "React",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "HTML5",
            "CSS3",
            "SASS",
            "styled-components",
            "Git",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
          ].map((tech) => (

            <span
              className="tech-stack-item"
              key={tech}
            >
              {tech}
            </span>

          ))}

        </div>

      </motion.div>

    </section>
  );
}

export default Projects;