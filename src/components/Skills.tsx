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
    title: "Other",
    skills: [
      "Python",
      "Java",
      "C#",
      "SQL",
      "R",
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
        {skillGroups.map((group, index) => (
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
              delay: index * 0.1,
            }}
          >
            <span className="skill-group-title">
              {group.title}
            </span>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <motion.div
                  className="skill-item"
                  key={skill}
                  whileHover={{
                    x: 8,
                  }}
                >
                  <span>{skill}</span>
                  <span>↗</span>
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