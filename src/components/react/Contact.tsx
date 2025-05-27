
import { Mail, MessageSquare, Phone, MapPin, Clock, Send, CheckCircle, Calendar } from 'lucide-preact';

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
        {
            icon: Calendar,
            title: 'Schedule a Call',
            value: 'Book 30-min chat',
            href: 'https://calendly.com/yourlink',
            description: 'Free consultation'
        }
    ];

    const availability = {
        status: 'Available',
        nextAvailable: 'Immediately',
        workingHours: 'CET/CEST (UTC+1/+2)',
        responseTime: '< 24 hours'
    };

    return (
        <section className="py-20 bg-white" id="contact">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Let's Build Something <span className="text-emerald-600">Amazing</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Ready to turn your ideas into reality? I'm here to help you create
                        scalable, user-focused solutions that drive real business value.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;