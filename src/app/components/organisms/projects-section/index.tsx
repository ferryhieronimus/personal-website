import ProjectCard from "../../molecules/project-card";
import Typography from "../../atoms/typhography";

export default function ProjectsSection() {
  return (
    <section
      className='flex min-w-full items-center justify-center bg-zinc-500 py-8 md:py-16'
      id='projects'
    >
      <div className='flex flex-col gap-4 md:gap-8 mx-4 md:mx-16`'>
        <Typography variant='h2' additionalStyles='mx-auto md:opacity-50 text-center'>
          PROJECTS &amp; WORKS
        </Typography>

        <div className='flex flex-wrap gap-4 justify-center md:mt-4'>
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
            desc='Tanpa is a Medium-like blogging website that allows you to create articles'
            githubLink='https://github.com/ferryhieronimus/tanpa-be'
          />

          <ProjectCard
            techStack={["React", "Express.js", "Javascript", "MongoDB"]}
            name='Makin'
            desc='Makin is a X(formerly Twitter)-like social website that allows you to post opinions'
            githubLink='https://github.com/ferryhieronimus/makin-app'
          />

          <ProjectCard
            techStack={["Next.js", "Typescript", "TailwindCSS"]}
            name='Cari Magang'
            desc='A website that allows me to find magang Kampus Merdeka easily'
            externalLink='https://cari-magang.vercel.app/'
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

          <ProjectCard
            techStack={["Next.js", "Typescript", "TailwindCSS", "Django"]}
            name='NFF FEB UI'
            desc='A website for National Folklore Festival (NFF) FEB UI to register new team'
            externalLink='https://nff-feb-ui.com/'
          />

          <ProjectCard
            techStack={["React", "Express.js", "Material UI"]}
            name='Bikun Tracker'
            desc='A website to track bikun (bis kuning) location in real-time'
            externalLink='https://bikun.ui.ac.id/'
          />

          <ProjectCard
            techStack={["Next.js", "Flask"]}
            name='Googol'
            desc='A search engine focused website that implements reranking functions'
            externalLink='https://ir.hieronimusferry.com/'
          />
        </div>
      </div>
    </section>
  );
}
