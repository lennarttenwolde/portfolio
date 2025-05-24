import React, { useState } from 'react';
import { MapPin, Camera, Mountain, Plane, Compass, Globe } from 'lucide-react';

const Travel = () => {
    const [activeStory, setActiveStory] = useState(0);

    const adventures = [
        {
            title: 'Coding from the Swiss Alps',
            location: 'Zermatt, Switzerland',
            image: '🏔️',
            story: 'Spent 3 months working remotely from a cozy chalet with the Matterhorn as my backdrop. The crisp mountain air and stunning views taught me that inspiration can come from the most unexpected places. Built one of my most innovative solutions while hiking trails during breaks.',
            lesson: 'Sometimes the best debugging happens on mountain trails.',
            tech: 'Built a weather-responsive web app for local hiking guides'
        },
        {
            title: 'Digital Nomad in Bali',
            location: 'Canggu, Indonesia',
            image: '🏄‍♂️',
            story: 'Worked with a distributed team across 5 time zones while learning to surf. The laid-back atmosphere and vibrant co-working community taught me the value of work-life balance and cross-cultural collaboration.',
            lesson: 'Asynchronous communication is like surfing - it\'s all about timing.',
            tech: 'Developed real-time collaboration tools for remote teams'
        },
        {
            title: 'Arctic Coding Adventure',
            location: 'Tromsø, Norway',
            image: '🌌',
            story: 'Chased the Northern Lights while working on a project for 2 months during polar night. The extreme environment taught me resilience and the importance of robust, reliable systems - much like the code we write.',
            lesson: 'Like the Aurora, the best solutions often appear when conditions seem impossible.',
            tech: 'Created a low-bandwidth app optimized for remote Arctic locations'
        },
        {
            title: 'Desert Innovation',
            location: 'Sahara, Morocco',
            image: '🐪',
            story: 'Joined a tech retreat in the desert, coding under starlit skies and learning from nomadic cultures. The vastness of the landscape put software problems into perspective and taught me the beauty of minimalism in code.',
            lesson: 'In the desert, every line of code matters - just like every drop of water.',
            tech: 'Built offline-first mobile apps for remote communities'
        }
    ];

    const countries = [
        '🇳🇱 Netherlands', '🇩🇪 Germany', '🇨🇭 Switzerland', '🇫🇷 France', '🇮🇹 Italy',
        '🇪🇸 Spain', '🇵🇹 Portugal', '🇬🇧 UK', '🇳🇴 Norway', '🇸🇪 Sweden',
        '🇮🇩 Indonesia', '🇹🇭 Thailand', '🇻🇳 Vietnam', '🇯🇵 Japan', '🇰🇷 South Korea',
        '🇲🇦 Morocco', '🇪🇬 Egypt', '🇿🇦 South Africa', '🇺🇸 USA', '🇨🇦 Canada'
    ];

    return (
        <section className="py-20 bg-slate-50" id="adventures">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Adventures & <span className="text-emerald-600">Insights</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Every destination teaches something new about problem-solving, adaptability,
                        and seeing challenges from different perspectives.
                    </p>
                </div>

                {/* Adventure stories */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Story selector */}
                    <div className="space-y-4">
                        {adventures.map((adventure, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveStory(index)}
                                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeStory === index
                                    ? 'bg-emerald-500 text-white shadow-lg scale-105'
                                    : 'bg-white text-slate-700 hover:bg-slate-100'
                                    }`}
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="text-2xl">{adventure.image}</span>
                                    <div>
                                        <h3 className="font-bold text-lg">{adventure.title}</h3>
                                        <div className="flex items-center gap-1 text-sm opacity-80">
                                            <MapPin className="w-4 h-4" />
                                            {adventure.location}
                                        </div>
                                    </div>
                                </div>
                                {activeStory === index && (
                                    <div className="mt-4 pt-4 border-t border-white/20">
                                        <p className="text-sm leading-relaxed mb-3">{adventure.story}</p>
                                        <div className="bg-white/10 rounded-lg p-3 mb-3">
                                            <p className="text-sm italic">"{adventure.lesson}"</p>
                                        </div>
                                        <div className="text-xs font-medium bg-white/10 rounded px-2 py-1 inline-block">
                                            {adventure.tech}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Active story display */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="text-center mb-6">
                            <div className="text-6xl mb-4">{adventures[activeStory].image}</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                {adventures[activeStory].title}
                            </h3>
                            <div className="flex items-center justify-center gap-2 text-slate-600">
                                <MapPin className="w-4 h-4" />
                                {adventures[activeStory].location}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                    <Camera className="w-4 h-4" />
                                    The Experience
                                </h4>
                                <p className="text-slate-700 leading-relaxed">
                                    {adventures[activeStory].story}
                                </p>
                            </div>

                            <div className="bg-emerald-50 rounded-lg p-4">
                                <h4 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                                    <Compass className="w-4 h-4" />
                                    Key Insight
                                </h4>
                                <p className="text-emerald-700 italic">
                                    "{adventures[activeStory].lesson}"
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-lg p-4">
                                <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                    <Mountain className="w-4 h-4" />
                                    Tech Innovation
                                </h4>
                                <p className="text-slate-700">
                                    {adventures[activeStory].tech}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Countries visited */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Globe className="w-6 h-6 text-emerald-600" />
                        <h3 className="text-xl font-bold text-slate-900">Countries Explored</h3>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                            20+ destinations
                        </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {countries.map((country, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                            >
                                <span className="text-lg">{country.split(' ')[0]}</span>
                                <span className="text-sm text-slate-700 font-medium">
                                    {country.split(' ').slice(1).join(' ')}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Travel philosophy */}
                <div className="text-center bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white">
                    <Plane className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-4">Travel Philosophy</h3>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        "Every journey teaches me something new about adaptability, problem-solving,
                        and seeing the world from different perspectives. These experiences directly
                        influence how I approach software development - with curiosity, resilience,
                        and an understanding that the best solutions often come from unexpected places."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Travel;