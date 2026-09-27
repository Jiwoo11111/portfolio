import { motion } from "framer-motion";

function Navbar() {


  const menuItems = [
  { name: "ABOUT", id: "about" },
  { name: "SKILLS", id: "skills" },
  { name: "PROJECTS", id: "projects" },
  { name: "CONTACT", id: "contact" },
];


  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <button
        className="logo"
        onClick={() => scrollToSection("home")}
      >
        JIWOO.
      </button>

      <div className="nav-menu">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;