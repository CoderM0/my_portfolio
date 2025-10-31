import { FaEnvelope, FaGithub, FaHeart, FaWhatsapp } from "react-icons/fa";
import { SiReact, SiTailwindcss } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      id="contact"
    >
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 fill-current text-gray-50 dark:text-gray-900"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Majd Alfarfour
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Full-stack developer passionate about creating innovative web
              solutions. I specialize in building modern, responsive
              applications with cutting-edge technologies.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <SiReact className="text-blue-400" />
                <span>React</span>
              </div>
              <div className="flex items-center gap-2">
                <SiTailwindcss className="text-cyan-400" />
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Let's Connect
            </h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/message/HK4XSD2DDU5BB1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-all duration-300 group"
              >
                <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors duration-300">
                  <FaWhatsapp className="text-green-400 text-lg" />
                </div>
                <div>
                  <p className="font-medium text-white">WhatsApp</p>
                  <p className="text-sm text-gray-400">+963937541546</p>
                </div>
              </a>

              <a
                href="mailto:majdalfarfour@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-300 group"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                  <FaEnvelope className="text-blue-400 text-lg" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-sm text-gray-400">
                    majdalfarfour@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/CoderM0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-all duration-300 group"
              >
                <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-300">
                  <FaGithub className="text-purple-400 text-lg" />
                </div>
                <div>
                  <p className="font-medium text-white">GitHub</p>
                  <p className="text-sm text-gray-400">@CoderM0</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>by Majd Alfarfour</span>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-gray-400 text-sm">
              Crafted with modern technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
