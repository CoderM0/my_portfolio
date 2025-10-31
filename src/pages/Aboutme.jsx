import {
  FaCloud,
  FaCode,
  FaLaptopCode,
  FaMobile,
  FaServer,
} from "react-icons/fa";
import myavatar from "../assets/myavatar.jpg";

export default function Aboutme() {
  const skills = [
    {
      icon: FaCode,
      label: "Frontend",
      description: "React, JavaScript, Tailwind CSS",
    },
    { icon: FaServer, label: "Backend", description: "Laravel, PHP , Python" },
    {
      icon: FaCloud,
      label: "Deployment",
      description: "Cloud Services, CI/CD",
    },
    { icon: FaMobile, label: "Responsive", description: "Mobile-First Design" },
  ];

  return (
    <section
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate Fullstack Developer crafting digital experiences
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          <div className="relative group flex-shrink-0 animate-slide-in-left">
            <div className="relative">
              <img
                src={myavatar}
                alt="Majd Alfarfour"
                className="w-80 h-80 rounded-full object-cover object-top shadow-2xl border-8 border-white dark:border-gray-800 group-hover:scale-105 group-hover:rotate-2 transition-all duration-500 ease-out"
              />

              <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-ping-slow group-hover:border-blue-500/50 transition-colors duration-300"></div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-100"></div>
            </div>

            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg animate-pulse-slow">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <FaLaptopCode className="text-white" />
                <span>Fullstack Developer</span>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-2xl animate-slide-in-right">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3">
                  Majd Alfarfour
                </h1>
                <div className="flex items-center gap-3 text-xl text-blue-600 dark:text-blue-400 font-medium">
                  <FaLaptopCode className="text-blue-500" />
                  <span>Fullstack Web Developer</span>
                </div>
              </div>

              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 group hover:shadow-2xl transition-all duration-500">
                <div className="absolute -top-4 -left-4 text-6xl text-blue-500/20 dark:text-blue-400/20 font-serif select-none transition-all duration-300 group-hover:text-blue-500/30">
                  “
                </div>

                <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg md:text-xl relative z-10">
                  I'm a full-stack web developer with a passion for building
                  efficient, scalable, and user-friendly web applications. I
                  specialize in both front-end and back-end development, working
                  with modern frameworks and technologies like React and
                  Laravel. With a solid understanding of UI/UX principles and
                  database architecture, I enjoy turning complex problems into
                  clean, functional solutions. Whether it's developing RESTful
                  APIs, crafting responsive interfaces, or deploying
                  applications to the cloud, I'm always focused on writing
                  maintainable code and delivering real value to users.
                </blockquote>

                <div className="absolute -bottom-6 -right-4 text-6xl text-blue-500/20 dark:text-blue-400/20 font-serif select-none transition-all duration-300 group-hover:text-blue-500/30">
                  ”
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {skills.map((skill, index) => (
                  <div
                    key={skill.label}
                    className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50 dark:border-gray-700/50 text-center group hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-blue-500 dark:text-blue-400 mb-2 flex justify-center">
                      <skill.icon className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-semibold text-gray-800 dark:text-white text-sm mb-1">
                      {skill.label}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { number: "20+", label: "Projects" },
            { number: "3+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Learning Mindset" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
