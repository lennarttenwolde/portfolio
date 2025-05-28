
import { Code, Mountain, Plane, Coffee, Users, Zap } from 'lucide-preact';
import { type VNode } from 'preact';

const About = ({ children }: { children: VNode<any> }) => {
    // const highlights = [
    //     {
    //         icon: Code,
    //         title: 'Full-Stack Expertise',
    //         description: 'Proficient in modern web technologies, from React frontends to scalable microservice backend architectures.'
    //     },
    //     {
    //         icon: Mountain,
    //         title: 'Adventure Mindset',
    //         description: 'Outdoor adventures teach resilience and problem-solving - skills I bring to every project.'
    //     },
    //     {
    //         icon: Plane,
    //         // title: 'Global Perspective',
    //         // description: 'Traveled to 20+ countries, bringing diverse perspectives to international client projects.',
    //         title: 'Flexible',
    //         description: 'Travelling to 20+ countries learned me how to look different to challanges.'

    //     },
    //     {
    //         icon: Users,
    //         title: 'Client-Focused',
    //         description: 'Building software beyond expectations through clear communication.'
    //     }
    // ];

    const highlights = [
        {
            icon: Code,
            title: 'Full-Stack Expertise',
            description: 'I work across the stack, from React frontends to scalable backend architectures.'
        },
        {
            icon: Mountain,
            title: 'Adventure Mindset',
            description: 'Hiking and outdoor challenges have taught me resilience and being creative.'
        },
        {
            icon: Plane,
            title: 'Flexible & Adaptable',
            description: "Having traveled to over 20 countries, I've learned to tackle challenges from fresh angles."
        },
        {
            icon: Users,
            title: 'Client-Focused',
            description: 'I believe great communication is key to delivering software that truly helps.'
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
                        I'm a self-taught software engineer who believes the best solutions come from
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
                                With over 5 years of experience in software development, I've had the change
                                of working with companies ranging from innovative startups to established enterprises.
                                My journey in tech began purely out of curiosity to make things work, and it has evolved
                                into a passion for building solutions that simply get the job done.
                            </p>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                When I'm not coding, you'll find me hiking mountain trails, catching waves, or planning my next adventure.
                                Continuous traveling has taught me to stay curious, be flexible, and embrace change.
                                I'm here to experience life, not to control it—and these adventures shape the way I approach challenges in this problem-solving field.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-slate-900 flex items-center gap-3">
                                <Zap className="w-6 h-6 text-emerald-600" />
                                What Drives Me
                            </h3>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                In a field often focused on principles, I believe in prioritizing practical, business-driven solutions.
                                My approach is to build scalable code while delivering features that just work.
                                For me, principles should be a tool, not the focus.
                            </p>
                        </div>

                        {/* Quick stats */}
                        <div className="grid grid-cols-2 gap-6 pt-6">
                            <div className="text-center p-4 bg-slate-50 rounded-lg">
                                <div className="text-3xl font-bold text-emerald-600 mb-1">5+</div>
                                <div className="text-sm text-slate-600">Years Experience</div>
                            </div>
                            <div className="text-center p-4 bg-slate-50 rounded-lg">
                                <div className="text-3xl font-bold text-emerald-600 mb-1">25+</div>
                                <div className="text-sm text-slate-600">Countries Visited</div>
                            </div>
                        </div>
                    </div>

                    {/* Profile image placeholder */}
                    <div className="relative">
                        <div className="aspect-square mx-auto max-w-md lg:max-w-full bg-linear-to-br from-emerald-400 to-emerald-600 rounded-2xl shadow-2xl relative overflow-hidden">
                            {/* Placeholder for your professional photo */}

                            <div className="relative h-full ">
                                {children}
                            </div>

                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                                <p className="text-sm font-medium text-slate-900">
                                    My adventures taught me that flexibility and adaptability really make all the difference.
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