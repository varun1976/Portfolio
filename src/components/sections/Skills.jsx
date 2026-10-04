import { useState } from 'react'
import { skills, skillCategories } from '../../data/skillsData'
import Reveal from '../common/Reveal'
import SectionHeading from '../common/SectionHeading'
import SkillCard from '../skills/SkillCard'

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  )

  return (
    <section id="skills" data-label="Skills" className="mx-auto max-w-[1140px] px-6 py-16 max-tablet:px-4 max-tablet:py-12">
      <Reveal>
        <SectionHeading
          eyebrow="The toolkit"
          title="Tools & Technologies I work with."
          copy="A comprehensive set of modern frameworks, languages, AI/ML tools, and cloud services I use to build scalable products."
        />
      </Reveal>

      {/* Category Filters */}
      <Reveal className="mb-10 flex flex-wrap justify-center gap-2.5" delay={0.05}>
        {skillCategories.map((category) => {
          const isActive = activeCategory === category
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`neo-transition rounded-sm px-4 py-2 text-[11px] font-mono font-bold tracking-wide uppercase ${isActive
                ? 'bg-[#596235] text-white shadow-raised-sm font-extrabold border border-white/20'
                : 'bg-[#D96846] text-white/90 shadow-raised-sm hover:shadow-raised hover:bg-[#E27655] hover:text-white border border-white/20'
                }`}
            >
              {category}
            </button>
          )
        })}
      </Reveal>

      <div className="grid grid-cols-4 gap-4 max-desktop:grid-cols-3 max-tablet:grid-cols-2 max-small:grid-cols-1">
        {filteredSkills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} delay={index * 0.03} />
        ))}
      </div>
    </section>
  )
}

export default Skills
