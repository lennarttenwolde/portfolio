import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-br from-emerald-900/90 via-slate-900/80 to-emerald-800/90 z-10"></div>
                {/* Replace with your outdoor/travel background image */}
                <div className="w-full h-full bg-linear-to-br from-emerald-800 to-slate-800"></div>
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0 z-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
                {/* Location indicator */}
                <div className="flex items-center justify-center gap-2 mb-6 text-emerald-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">Available Worldwide • Remote & On-site</span>
                </div>

                {/* Main heading */}
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    <span className="block mb-2">Freelance</span>
                    <span className="block bg-linear-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                        Software Engineer
                    </span>
                </h1>

                {/* Subheading */}
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-slate-200 leading-relaxed">
                    Crafting scalable digital solutions while exploring the world.
                    Specializing in modern web technologies and bringing ideas to life.
                </p>

                {/* Skills badges */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'].map((skill) => (
                        <span
                            key={skill}
                            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Call to action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        View My Work
                    </button>
                    <button className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10">
                        Let's Connect
                    </button>
                </div>

                {/* Social links */}
                <div className="flex justify-center gap-6 mb-12">
                    {[
                        { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
                        { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
                        { icon: Mail, href: 'mailto:hello@tenwolde.dev', label: 'Email' }
                    ].map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group"
                            aria-label={label}
                        >
                            <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        </a>
                    ))}
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ArrowDown className="w-6 h-6 text-white/60" />
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-linear-to-t  from-white to-transparent to-80% z-10"></div>


        </section>
    );
};

export default Hero;