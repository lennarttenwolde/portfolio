import React from 'react';
import { Code, Mountain, Plane, Coffee, Users, Zap } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: Code,
            title: 'Full-Stack Expertise',
            description: 'Proficient in modern web technologies, from React frontends to scalable backend architectures.'
        },
        {
            icon: Mountain,
            title: 'Adventure Mindset',
            description: 'Outdoor adventures teach resilience and problem-solving - skills I bring to every project.'
        },
        {
            icon: Plane,
            title: 'Global Perspective',
            description: 'Traveled to 20+ countries, bringing diverse perspectives to international client projects.'
        },
        {
            icon: Users,
            title: 'Client-Focused',
            description: 'Building lasting relationships through clear communication and delivering beyond expectations.'
        }
    ];

    return (
        <section className="py-20 bg-white" id="about">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Code, Create, <span className="text-emerald-600">Explore</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        I'm a passionate software engineer who believes the best solutions come from
                        combining technical expertise with real-world perspective.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* About content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-slate-900 flex items-center gap-3">
                                <Coffee className="w-6 h-6 text-emerald-600" />
                                My Story
                            </h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                With over 5 years of experience in software development, I've had the privilege
                                of working with companies ranging from innovative startups to established enterprises.
                                My journey in tech began with a curiosity for how things work, and it's evolved
                                into a passion for building solutions that make a real difference.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                When I'm not coding, you'll find me hiking mountain trails, exploring new cities,
                                or planning my next adventure. These experiences have taught me that the best
                                problems are solved when you step back, gain perspective, and approach challenges
                                with fresh eyes.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-slate-900 flex items-center gap-3">
                                <Zap className="w-6 h-6 text-emerald-600" />
                                What Drives Me
                            </h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                I believe in writing clean, maintainable code that scales. Every project is an
                                opportunity to learn something new and push boundaries. I'm passionate about
                                staying current with the latest technologies while maintaining a focus on
                                practical, business-driven solutions.
                            </p>
                        </div>

                        {/* Quick stats */}
                        <div className="grid grid-cols-2 gap-6 pt-6">
                            <div className="text-center p-4 bg-slate-50 rounded-lg">
                                <div className="text-3xl font-bold text-emerald-600 mb-1">5+</div>
                                <div className="text-sm text-slate-600">Years Experience</div>
                            </div>
                            <div className="text-center p-4 bg-slate-50 rounded-lg">
                                <div className="text-3xl font-bold text-emerald-600 mb-1">20+</div>
                                <div className="text-sm text-slate-600">Countries Visited</div>
                            </div>
                        </div>
                    </div>

                    {/* Profile image placeholder */}
                    <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl shadow-2xl relative overflow-hidden">
                            {/* Placeholder for your professional photo */}
                            <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-light">
                                📸
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                                <p className="text-sm font-medium text-slate-900">
                                    "The best code is written with adventure in mind"
                                </p>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-20"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-300 rounded-full opacity-20"></div>
                    </div>
                </div>

                {/* Highlights grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="group p-6 bg-white border border-slate-200 rounded-xl hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                                <item.icon className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h4 className="text-lg font-semibold text-slate-900 mb-2">
                                {item.title}
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;