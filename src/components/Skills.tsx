import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "React Native",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "Zod",
    ],
  },
  {
    title: "Design Tools",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],
  },
  {
    title: "Languages & Tools",
    skills: [
      "Python",
      "Java",
      "C#",
      "SQL",
      "Git",
      "GitHub",
    ],
  },
];

function Skills() {
  return (
    <section className="section skills" id="skills">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span>02</span>
        <h2>SKILLS</h2>
      </motion.div>

      <div className="skill-groups">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            className="skill-group"
            key={group.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: groupIndex * 0.1,
            }}
          >
            <div className="skill-group-header">
              <span className="skill-group-number">
                0{groupIndex + 1}
              </span>

              <h3>{group.title}</h3>
            </div>

            <div className="skill-grid">
              {group.skills.map((skill, skillIndex) => (
                <motion.div
                  className="skill-card"
                  key={skill}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: groupIndex * 0.1 + skillIndex * 0.04,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                >
                  <span className="skill-card-index">
                    {String(skillIndex + 1).padStart(2, "0")}
                  </span>

                  <span className="skill-card-name">
                    {skill}
                  </span>

                  <span className="skill-card-arrow">
                    ↗
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;