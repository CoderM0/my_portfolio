import {
  FaAward,
  FaCalendarAlt,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor's Degree in Information Technology Engineering",
      institution: "University of Tartous",
      period: "2019 - 2024",
      description:
        "Specialized in software engineering and web technologies. Graduated with honors and completed multiple projects in full-stack development.",
      icon: FaGraduationCap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      degree: "Mastering Web Science",
      institution: "Syrian Virtual University",
      period: "2024 - Present",
      description:
        "Advanced studies in modern web development, including React, ASP.NET, cloud technologies, and software architecture patterns.",
      icon: FaUniversity,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const certifications = [
    {
      name: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      year: "2022",
    },
    {
      name: "Cyber Security Fundamentals",
      issuer: "IBM",
      year: "2025",
    },
    {
      name: "Security Operations Center(SOC) ",
      issuer: "Cisco Learning & Certifications",
      year: "Sep 2025.",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
      id="education"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-6">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-r ${edu.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <edu.icon className="text-2xl" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {edu.degree}
                      </h3>

                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-2">
                          <FaUniversity className="text-blue-500" />
                          <span className="font-semibold">
                            {edu.institution}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-green-500" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="mt-4">
                        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                          <span>Program Completion</span>
                          <span>100%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${edu.color} transition-all duration-1000 ease-out`}
                            style={{ width: "100%" }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shine"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">
                  <FaAward className="text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Certifications
                </h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-700/50 dark:to-gray-800/50 border border-gray-200/50 dark:border-gray-600/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105"
                  >
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                      {cert.name}
                    </h4>
                    <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                      <span>{cert.issuer}</span>
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full text-xs">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl p-6 text-white animate-fade-in-up">
              <h3 className="text-xl font-bold mb-4">Learning Journey</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Courses Completed</span>
                  <span className="font-bold text-2xl">20+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Years of Study</span>
                  <span className="font-bold text-2xl">5+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Projects Built</span>
                  <span className="font-bold text-2xl">30+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-8 animate-fade-in">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              I believe in lifelong learning and constantly updating my skills
              with the latest technologies and best practices in web
              development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React Ecosystem",
                "Laravel",
                "Cloud Technologies",
                "UI/UX Design",
                "Database Management",
                "DevOps",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
