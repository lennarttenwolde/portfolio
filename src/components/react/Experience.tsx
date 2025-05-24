import React from 'react';
import { Building, Calendar, TrendingUp, Users, Zap, Award } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: 'Senior Full-Stack Developer',
            company: 'Tech Startup (Stealth Mode)',
            period: '2023 - Present',
            type: 'Freelance Contract',
            location: 'Remote',
            achievements: [
                'Architected and built a scalable SaaS platform serving 10K+ users',
                'Reduced API response times by 60% through optimization and caching strategies',
                'Led technical decision-making for a team of 4 developers',
                'Implemented comprehensive testing suite achieving 95% code coverage'
            ],
            technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
            highlight: 'Built from MVP to production in 8 months'
        },
        {
            title: 'Lead Frontend Developer',
            company: 'Financial Services Company',
            period: '2022 - 2023',
            type: 'Contract',
            location: 'Hybrid (Amsterdam)',
            achievements: [
                'Modernized legacy trading platform used by 500+ financial advisors',
                'Improved user experience leading to 40% increase in platform adoption',
                'Mentored junior developers and established coding standards',
                'Collaborated with UX team to implement accessibility improvements'
            ],
            technologies: ['Vue.js', 'TypeScript', 'Python', 'MongoDB', 'Azure'],
            highlight: 'Successfully migrated critical trading systems with zero downtime'
        },
        {
            title: 'Full-Stack Developer',
            company: 'E-commerce Scale-up',
            period: '2020 - 2022',
            type: 'Full-time',
            location: 'Berlin, Germany',
            achievements: [
                'Built microservices architecture handling 1M+ daily transactions',
                'Developed real-time inventory management system',
                'Integrated payment systems supporting 15+ countries',
                'Optimized checkout flow increasing conversion rate by 25%'
            ],
            technologies: ['React', 'Node.js', 'Kubernetes', 'Redis', 'Stripe'],
            highlight: 'Scaled platform from startup to Series B funding'
        },
        {
            title: 'Software Developer',
            company: 'Digital Agency',
            period: '2019 - 2020',
            type: 'Full-time',
            location: 'Amsterdam, Netherlands',
            achievements: [
                'Delivered 20+ client projects across various industries',
                'Specialized in React and WordPress custom development',
                'Collaborated directly with clients to gather requirements',
                'Maintained 98% client satisfaction rating'
            ],
            technologies: ['React', 'WordPress', 'PHP', 'MySQL', 'AWS'],
            highlight: 'Established foundation in client communication and project management'
        }
    ];

    const stats = [
        { icon: Building, value: '15+', label: 'Projects Delivered' },
        { icon: Users, value: '50+', label: 'Clients Served' },
        { icon: TrendingUp, value: '5+', label: 'Years Experience' },
        { icon: Award, value: '98%', label: 'Client Satisfaction' }
    ];

    return (
        <section className="py-20 bg-white" id="experience">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Professional <span className="text-emerald-600">Journey</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        From startup environments to enterprise solutions, each role has shaped
                        my expertise in building scalable, user-focused applications.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-slate-50 rounded-xl">
                            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <stat.icon className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                            <div className="text-sm text-slate-600">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Experience timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-emerald-500 to-emerald-300 hidden md:block"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative">
                                {/* Timeline dot */}
                                <div className="absolute left-6 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                                <div className="md:ml-16 bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                                    {/* Header */}
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                                            <div className="flex items-center gap-4 text-slate-600">
                                                <span className="font-medium">{exp.company}</span>
                                                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-sm">
                                                    {exp.type}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 text-slate-500 mt-2 lg:mt-0">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span className="text-sm">{exp.period}</span>
                                            </div>
                                            <span className="text-sm">{exp.location}</span>
                                        </div>
                                    </div>

                                    {/* Highlight */}
                                    <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border-l-4 border-emerald-500 p-4 mb-6 rounded-r-lg">
                                        <div className="flex items-center gap-2 text-emerald-700 font-medium">
                                            <Zap className="w-4 h-4" />
                                            Key Achievement
                                        </div>
                                        <p className="mt-1 text-slate-700">{exp.highlight}</p>
                                    </div>

                                    {/* Achievements */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-slate-900 mb-3">Key Contributions:</h4>
                                        <ul className="space-y-2">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-slate-700">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 cursor-pointer">
                        <span>Ready to discuss your project?</span>
                        <TrendingUp className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;