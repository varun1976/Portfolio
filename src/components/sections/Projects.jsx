import { projects } from '../../data/projectsData'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import ProjectCard from '../projects/ProjectCard'

function Projects() {
  return (
    <section id="projects" data-label="Projects" className="mx-auto max-w-[1140px] px-6 py-16 max-tablet:px-4 max-tablet:py-12">
      <Reveal>
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects."
          copy="Here are some of my recent projects. Each project was carefully built with attention to code quality, performance, and user experience."
        />
      </Reveal>
      <div className="grid grid-cols-3 gap-6 max-tablet:grid-cols-1 max-tablet:mx-auto max-tablet:max-w-[500px]">
        {projects.map((project, index) => (
          <ProjectCard key={project.number || project.title} project={project} delay={index * 0.1} />
        ))}
      </div>
    </section>
  )
}

export default Projects
