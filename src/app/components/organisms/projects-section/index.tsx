import ProjectCard from "../../molecules/project-card";
import Typography from "../../atoms/typhography";

export default function ProjectsSection() {
  return (
    <section
      className='flex min-w-full items-center justify-center bg-zinc-500 py-8 md:py-16'
      id='projects'
    >
      <div className='flex flex-col gap-4 md:gap-8 mx-8 md:mx-16`'>
        <Typography variant='h2' additionalStyles='mx-auto md:opacity-50'>
          PROJECTS
        </Typography>

        <div className='flex flex-wrap gap-4 justify-center'>
          <ProjectCard
            techStack={[
              "Next.js",
              "Express.js",
              "Typescript",
              "PostgreSQL",
              "TailwindCSS",
              "Docker",
            ]}
            name='Tanpa'
            desc='Tanpa is a Medium-like blogging website that allows you to create articles.'
            githubLink='https://github.com/ferryhieronimus/tanpa-be'
          />

          <ProjectCard
            techStack={["React.js", "Express.js", "Javascript", "MongoDB"]}
            name='Makin'
            desc='Makin is a X(formerly Twitter)-like social website that allows you to post tweets'
            githubLink='https://github.com/ferryhieronimus/makin-app'
          />

          <ProjectCard
            techStack={[
              "Next.js",
              "Express.js",
              "Typescript",
              "PostgreSQL",
              "TailwindCSS",
              "Docker",
            ]}
            name='PMB'
            desc='A social website made for freshman students that allows them to know each other and submit tasks'
            externalLink='https://pmb.cs.ui.ac.id'
          />
        </div>
      </div>
    </section>
  );
}
