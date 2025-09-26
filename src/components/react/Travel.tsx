import { useState } from 'preact/hooks';
import { MapPin, Camera, Mountain, Plane, Compass, Globe } from 'lucide-preact';

const Travel = () => {
    const [activeStory, setActiveStory] = useState(0);

    const adventures = [
        {
            title: 'Volunteering in Portugal',
            location: 'Bombarral, Portugal',
            image: '🏄',
            story: 'Volunteered for two months at Amigo Fiel animal shelter. Helped with daily tasks, dog training, and socializing the animals. Spent weekends surfing the beautiful beaches of Peniche and Ericeira.',
            lesson: 'Small efforts add up.',
            impact: 'Social media posts and photoshoots were key in finding forever homes for many dogs.'
        },
        {
            title: 'Volunteering in South Africa',
            location: 'Jeffreys Bay, South Africa',
            image: '🇿🇦',
            story: 'Volunteered for three months at Timion creating mobility tools for children with cerebral palsy. Visited townships to deliver custom-built armrests and wheelchairs while also catching some waves after work.',
            lesson: 'Health is everything.',
            impact: 'Beyond helping the children, giving them more freedom often brings freedom to the entire family.'
        },
        {
            title: "The Fisherman's Trail",
            location: 'Portugal',
            image: '🌊',
            story: "Hiked the 11-day Fisherman's Trail along Portugal's coastline. Nothing but ocean views, sand, and good coffee at tiny cafes.",
            lesson: "Sometimes you have to choose, and bringing the surfboard wasn't an option."
        },
        {
            title: 'Exploring the E4 Trail',
            location: 'Crete, Greece',
            image: '🥾',
            story: "Walked part of the E4 trail in Crete, sweating it out in the June sun. Olive trees, goat herds, and coastal cliffs. It was hot, dusty, and absolutely beautiful.",
            lesson: "Just focus on the next step and you'll eventually get there - and use sunscreen!"
        },
        {
            title: 'Backpacking Southeast Asia',
            location: 'Thailand, Laos, Malaysia, Borneo',
            image: '🎒',
            story: 'Spent a few months hopping between countries, eating street food, and seeing the incredible jungles of Borneo.',
            lesson: "There's more than one way to live and that's what makes it fun."
        }
    ];

    const countries = [
        '🇳🇱 Netherlands',
        '🇩🇪 Germany',
        '🇧🇪 Belgium',
        '🇱🇺 Luxembourg',
        '🇫🇷 France',
        '🇮🇹 Italy',
        '🇪🇸 Spain',
        '🇵🇹 Portugal',
        '🇬🇧 UK',
        '🇨🇿 Czech Republic',
        '🇦🇹 Austria',
        '🇸🇮 Slovenia',
        '🇭🇷 Croatia',
        '🇷🇸 Serbia',
        '🇧🇦 Bosnia and Herzegovina',
        '🇲🇰 North Macedonia',
        '🇬🇷 Greece',
        '🇹🇷 Turkey',
        '🇮🇩 Indonesia',
        '🇹🇭 Thailand',
        '🇱🇦 Laos',
        '🇲🇾 Malaysia',
        '🇲🇦 Morocco',
        '🇿🇦 South Africa',
        '🇺🇸 USA'
    ];

    const handleStoryClick = (index: number) => {
        setActiveStory(index);
        // On mobile, scroll to the detail view after a short delay
        if (window.innerWidth < 1024) {
            setTimeout(() => {
                document.getElementById('story-detail')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    };

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
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Story selector */}
                    <div className="space-y-4 order-2 lg:order-1">
                        {adventures.map((adventure, index) => (
                            <div
                                key={index}
                                onClick={() => handleStoryClick(index)}
                                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeStory === index
                                    ? 'bg-emerald-500 text-white shadow-lg scale-105'
                                    : 'bg-white text-slate-700 hover:bg-slate-100'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl">{adventure.image}</span>
                                    <div>
                                        <h3 className="font-bold text-lg">{adventure.title}</h3>
                                        <div className="flex items-center gap-1 text-sm opacity-80">
                                            <MapPin className="w-4 h-4" />
                                            {adventure.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Active story display - now shown on all screen sizes */}
                    <div id="story-detail" className="bg-white rounded-2xl shadow-lg p-8 order-1 lg:order-2">
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
                            {adventures[activeStory].impact ? (
                                <div className="bg-slate-50 rounded-lg p-4" >
                                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                        <Mountain className="w-4 h-4" />
                                        Impact
                                    </h4>
                                    <p className="text-slate-700">
                                        {adventures[activeStory].impact}
                                    </p>
                                </div>
                            ) : null}

                        </div>
                    </div>
                </div>

                {/* Countries visited */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Globe className="w-6 h-6 text-emerald-600" />
                        <h3 className="text-xl font-bold text-slate-900">Countries Explored</h3>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                            25+ destinations
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
                        "From missed buses to questionable food choices,
                        I'm always learning to adapt, think on my feet, and see things from a fresh perspective.
                        That same mindset flows over into my work, making me curious, eager, flexible, and never afraid to try something different. Because honestly; the best discoveries often happen when you're just a little bit lost"
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Travel;