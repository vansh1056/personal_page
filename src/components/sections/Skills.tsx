import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { portfolioConfig } from '../../config/portfolio';

interface SkillCategoryProps {
  title: string;
  skills: { name: string; level?: number }[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <Card className="p-6" hover>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <span className="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium shadow-sm hover:scale-105 transition-transform duration-200"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </Card>
  );
}

export function Skills() {
  const { skills } = portfolioConfig;

  return (
    <Section id="skills" className="bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and tools I use
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory title="Languages" skills={skills.Languages} />
          <SkillCategory title="Frameworks" skills={skills.Frameworks} />
          <SkillCategory title="Tools & Technologies" skills={skills.Technologies} />
          <SkillCategory title="Developer" skills={skills.Developer} />
        </div>
      </div>
    </Section>
  );
}
