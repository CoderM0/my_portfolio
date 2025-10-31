import {
  FaCode,
  FaDatabase,
  FaGitAlt,
  FaLaravel,
  FaPython,
  FaReact,
  FaServer,
  FaTools,
} from "react-icons/fa";
import {
  SiFlask,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend Development",
    icon: FaCode,
    color: "from-blue-500 to-cyan-500",
    items: [
      { name: "React", level: 90, icon: FaReact },
      { name: "JavaScript", level: 85, icon: SiJavascript },
      { name: "Tailwind CSS", level: 95, icon: SiTailwindcss },
      { name: "HTML/CSS", level: 90, icon: SiHtml5 },
    ],
  },
  {
    category: "Backend Development",
    icon: FaServer,
    color: "from-purple-500 to-pink-500",
    items: [
      { name: "Laravel", level: 85, icon: FaLaravel },
      { name: "PHP", level: 80, icon: FaCode },
      { name: "Python", level: 80, icon: FaPython },
      { name: "Flask", level: 70, icon: SiFlask },
      { name: "SQL", level: 85, icon: FaDatabase },
      { name: "MongoDB", level: 70, icon: SiMongodb },
    ],
  },
  {
    category: "Tools & Others",
    icon: FaTools,
    color: "from-green-500 to-emerald-500",
    items: [
      { name: "Git & GitHub", level: 90, icon: FaGitAlt },
      { name: "RESTful APIs", level: 85 },
      { name: "Responsive Design", level: 95 },
      { name: "UI/UX Principles", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      id="skills"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${sectionIndex * 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${section.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <section.icon className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {section.category}
                </h3>
              </div>

              <div className="space-y-5">
                {section.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        {skill.icon && (
                          <div className="text-gray-600 dark:text-gray-400 group-hover/skill:text-blue-500 transition-colors duration-300">
                            <skill.icon className="text-xl" />
                          </div>
                        )}
                        <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 relative overflow-hidden group-hover/skill:from-blue-600 group-hover/skill:to-purple-600 transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 100}ms`,
                        }}
                      >
                        {/* تأثير توهج */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shine"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-700/50">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Technical Proficiency
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Continuous learning and skill development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Frontend", value: "90%" },
              { label: "Backend", value: "85%" },
              { label: "Database", value: "80%" },
              { label: "Tools", value: "90%" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                  {item.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
