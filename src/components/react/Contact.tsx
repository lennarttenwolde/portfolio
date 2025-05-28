
import { Mail, MessageSquare, Phone, MapPin, Clock, Send, CheckCircle, Calendar } from 'lucide-preact';
import Github from './icons/Github';
import LinkedIn from './icons/LinkedIn';

const Contact = () => {


    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'hello@tenwolde.dev',
            href: 'mailto:hello@tenwolde.dev',
            description: 'Best for project inquiries'
        },
        {
            icon: MessageSquare,
            title: 'LinkedIn',
            value: 'Connect with me',
            href: 'https://linkedin.com/in/yourprofile',
            description: 'Professional networking'
        },
    ];

    return (
        <section className="py-20 bg-white" id="contact">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Let's Build Something <span className="text-emerald-600">Amazing</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Ready to turn your ideas into reality? I'm here to help you create
                        scalable, user-focused solutions that drive real business value.
                    </p>
                </div>

                <div className="flex flex-col gap-6 justify-center items-center  mb-16">
                    <div className="text-slate-900 italic flex gap-2 items-center" >
                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span>hello@<span className="text-slate-500">[thisdomain]</span>.dev</span>
                    </div>
                </div>

                <div className="flex justify-center gap-6">
                    {[
                        { icon: Github, href: 'https://github.com/lennarttenwolde', label: 'GitHub' },
                        { icon: LinkedIn, href: 'https://www.linkedin.com/in/lennart-ten-wolde/', label: 'LinkedIn' },
                    ].map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            className="relative p-4 text-slate-700 bg-slate-50 border border-slate-200 rounded-full hover:bg-slate-800 hover:text-white hover:border-slate-800 hover:shadow-2xl hover:shadow-slate-900/25 transition-all duration-500 group cursor-pointer overflow-hidden"
                            aria-label={label}
                            target="_blank"
                        >
                            {/* Icon with enhanced animations */}
                            <Icon className="relative z-10 w-6 h-6 transition-all duration-500 ease-out" />

                            {/* Animated ring effect */}
                            <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-slate-400/40  group-hover:ring-offset-white transition-all duration-500" />
                        </a>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Contact;