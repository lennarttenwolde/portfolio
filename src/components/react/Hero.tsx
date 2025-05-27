import { ArrowDown, Mail, MapPin } from 'lucide-preact';
import LinkedIn from './icons/LinkedIn';
import Github from './icons/Github';

const Hero = () => {

    const goToId = (id: string) => {
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    };

    return (
        <div>

            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-5 pb-24 md:pb-5">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-linear-to-br from-emerald-900/90 via-slate-900/80 to-emerald-800/90 z-10"></div>
                    <div className="w-full h-full bg-linear-to-br from-emerald-800 to-slate-800"></div>
                </div>

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
                    <div className="flex items-center justify-center gap-2 mb-6 text-emerald-300">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">Available Worldwide • Remote</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="block mb-2">Freelance</span>
                        <span className="block bg-linear-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                            Software Engineer
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-slate-200 leading-relaxed">
                        Scaling your ideas into real solutions, wherever I'm working today.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {['.NET', 'React', 'Python', 'Azure', 'DevOps'].map((skill) => (
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
                        <button onClick={() => goToId('experience')} className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                            View My Work
                        </button>
                        <button onClick={() => goToId('contact')} className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10 cursor-pointer">
                            Let's Connect
                        </button>
                    </div>

                    {/* Social links */}
                    <div className="flex justify-center gap-6 mb-16">
                        {[
                            { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
                            { icon: LinkedIn, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
                        ].map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                                aria-label={label}
                                target="_blank"
                            >
                                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            </a>
                        ))}
                        {[
                            { icon: Mail, label: 'Email', onClick: () => goToId('contact') }
                            ,
                        ].map(({ icon: Icon, label, onClick }) => (
                            <button
                                key={label}
                                onClick={onClick}
                                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                                aria-label={label}
                            >
                                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            </button>
                        ))}
                    </div>

                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ArrowDown className="w-6 h-6 text-white/60" />
                    </div>
                </div>


                <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 md:-bottom-18 w-full h-[300px] md:h-[500px]" preserveAspectRatio="none" id="visual" viewBox="0 0 900 600" version="1.1"><path d="M0 456L129 529L257 544L386 447L514 506L643 479L771 463L900 506L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z" fill="#ffffff" /></svg>

            </section>

        </div >



    );
};

export default Hero;