import { useState } from 'preact/hooks';
import { Code, Database, Cloud, Smartphone, Wrench, Lightbulb, Sparkles } from 'lucide-preact';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('frontend');

    const skillCategories: Record<string, any> = {
        frontend: {
            icon: Code,
            title: 'Frontend Development',
            color: 'text-blue-600',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-200',
            skills: [
                { name: 'Vue.js', level: 95, years: '4+' },
                { name: 'TypeScript', level: 90, years: '3+' },
                { name: 'React', level: 85, years: '2+' },
                { name: 'Nuxt.js', level: 80, years: '1+' },
                { name: 'Tailwind CSS', level: 92, years: '3+' },
                { name: 'JavaScript (ES5+)', level: 95, years: '5+' },
                { name: 'Blazor', level: 70, years: '1+' },
                { name: 'Astro', level: 80, years: '1+' },

            ]
        },
        backend: {
            icon: Database,
            title: 'Backend Development',
            color: 'text-emerald-600',
            bgColor: 'bg-emerald-50',
            borderColor: 'border-emerald-200',
            skills: [
                { name: '.NET', level: 93, years: '5+' },
                { name: 'Python', level: 80, years: '2+' },
                { name: 'MSSQL', level: 82, years: '5+' },
                { name: 'Entity Framework ', level: 85, years: '5+' },
                { name: 'Event-driven architecture', level: 85, years: '5+' },
                { name: 'Serverless', level: 95, years: '5+' },
                { name: 'GraphQL', level: 80, years: '1+' },
                { name: 'SignalR', level: 80, years: '2+' },
                { name: 'Go', level: 62, years: '1+' },
                { name: 'Unit / Integration Testing', level: 88, years: '5+' }
            ]
        },
        cloud: {
            icon: Cloud,
            title: 'Cloud & DevOps',
            color: 'text-purple-600',
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-200',
            skills: [
                { name: 'Azure', level: 85, years: '5+' },
                { name: 'Docker', level: 88, years: '3+' },
                { name: 'Kubernetes / AKS', level: 75, years: '3+' },
                { name: 'Azure Storage Services', level: 92, years: '5+' },
                { name: 'Helm', level: 82, years: '3+' },
                { name: 'CI/CD', level: 95, years: '5+' },
                { name: 'ARM / Bicep', level: 90, years: '5+' },
                { name: 'Linux', level: 80, years: '4+' },
                { name: 'Cloudflare', level: 65, years: '1+' },
            ]
        },
        mobile: {
            icon: Sparkles,
            title: 'AI',
            color: 'text-orange-600',
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-200',
            skills: [
                { name: 'OpenAI API', level: 80, years: '1+' },
                { name: 'LangChain', level: 60, years: '1+' },
                { name: 'Azure Cognitive Services', level: 72, years: '1+' },
                { name: 'Hugging Face', level: 60, years: '1+' },
                { name: 'Prompt Engineering', level: 70, years: '1+' },

            ]
        }
    };

    const tools = [
        'Git & GitHub',
        'VS Code',
        'Azure',
        'Postman',
        'Azure DevOps',
        'Auth0',
        'Docker',
        'Kubernetes',
        'Figma',
        'Swagger',
        'Jupyter Notebook',
        'Cloudflare'
    ];

    const activeSkills = skillCategories[activeCategory];

    return (
        <section className="py-20 bg-slate-50" id="skills">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Technical <span className="text-emerald-600">Expertise</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        My curiosity and adaptability have helped me put together a toolkit that works in any situation.
                        I'm always on the lookout for better ways to do things.
                    </p>
                </div>

                {/* Category tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {Object.entries(skillCategories).map(([key, category]) => {
                        const Icon = category.icon;
                        const isActive = activeCategory === key;

                        return (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(key)}
                                aria-label={`View ${category.title} skills`}
                                className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${isActive
                                    ? `${category.bgColor} ${category.color} ${category.borderColor} border-2`
                                    : 'bg-white text-slate-600 border-2 border-slate-200 hover:border-slate-300'
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                {category.title}
                            </button>
                        );
                    })}
                </div>

                {/* Skills display */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <activeSkills.icon className={`w-8 h-8 ${activeSkills.color}`} />
                        <h3 className="text-2xl font-bold text-slate-900">{activeSkills.title}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {activeSkills.skills.map((skill: { name: string, level: number, years: string }) => (
                            <div key={skill.name} className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium text-slate-900">{skill.name}</span>
                                    <span className="text-sm text-slate-500">{skill.years} years</span>
                                </div>


                                <div className="relative">
                                    <div className="w-full bg-slate-200 rounded-full h-3.5">
                                        <div
                                            className={`h-3.5 rounded-full bg-linear-to-r
                ${activeSkills.color === 'text-blue-600' ? 'from-blue-500 to-blue-600' :
                                                    activeSkills.color === 'text-emerald-600' ? 'from-emerald-500 to-emerald-600' :
                                                        activeSkills.color === 'text-purple-600' ? 'from-purple-500 to-purple-600' :
                                                            'from-orange-500 to-orange-600'
                                                } transition-all duration-1000 ease-out`}
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                    <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                                        {skill.level}%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools & Technologies */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Wrench className="w-6 h-6 text-slate-600" />
                        <h3 className="text-xl font-bold text-slate-900">Tools & Platforms</h3>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {tools.map((tool, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors duration-200"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Additional info */}
                <div className="text-center mt-12">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-100 text-emerald-700 rounded-full">
                        <Lightbulb className="w-5 h-5" />
                        <span className="font-medium">Always learning and adapting to new technologies</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;