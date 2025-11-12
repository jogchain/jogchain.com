import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiPostgresql, SiMongodb, SiDocker, SiAmazon, SiGit, SiFigma } from "react-icons/si";

export function TechStackSection() {
  const techStack = [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "React", icon: <SiReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Python", icon: <SiPython /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "AWS", icon: <SiAmazon /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Figma", icon: <SiFigma /> },
  ];

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-xl font-medium text-zinc-800 dark:text-zinc-200">
        Our Tech Stack
      </h2>

      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Built with cutting-edge tools across frontend, backend, and cloud.
      </p>

      <ul className="mt-8 grid grid-cols-2 gap-4 text-zinc-700 dark:text-zinc-300 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {techStack.map((tech) => (
          <li
            key={tech.name}
            className="flex flex-col items-center rounded-lg border border-zinc-200 bg-white px-4 py-6 text-sm shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="text-3xl mb-3 text-blue-600">{tech.icon}</div>
            {tech.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
