import Link from 'next/link';
import { CheckCircle2, ArrowRight, Brain, Database, Zap } from 'lucide-react';
import Image from 'next/image';
import logo from '@/assets/dashboardMain.png';

export const metadata = {
    title: 'Reddlea - AI-Powered Lead Generation from Reddit',
    description:
        'Reddlea helps businesses automatically capture leads from Reddit discussions using AI insights and seamless CRM integration.',
};

export default function ReddleaPage() {
    return (
        <main className="min-h-screen font-sans text-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-32 px-6 lg:px-20 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Dashboard Mockup */}
                    <div className="relative flex justify-center lg:justify-start w-full">
                        <div className="rounded-3xl shadow-2xl overflow-hidden border border-gray-200 w-full max-w-full lg:max-w-2xl">
                            <img
                                src={logo.src}
                                alt="Reddlea Dashboard"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        {/* Live leads indicators */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                            <div className="absolute top-12 left-12 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                            <div className="absolute top-40 left-44 w-4 h-4 bg-green-400 rounded-full animate-ping animation-delay-500"></div>
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="text-center lg:text-left space-y-6 px-4 sm:px-0">
                        <span className="inline-block mb-4 px-5 py-2 bg-gradient-to-r from-blue-200 to-cyan-200 text-blue-800 rounded-full text-sm font-semibold animate-pulse">
                            Featured Product
                        </span>
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                            Turn Reddit Conversations Into High-Quality Leads
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700">
                            Reddlea automatically identifies high-potential prospects in real-time, scores them using AI insights, and sends them straight to your CRM.
                            Save time, increase conversions, and never miss an opportunity.
                        </p>
                        <Link
                            href="https://reddlea.com"
                            target="_blank"
                            className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            Try Reddlea Now
                            <ArrowRight className="ml-3 w-5 h-5" />
                        </Link>
                    </div>
                </div>


                {/* Decorative Gradient Shapes */}
                <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-gradient-to-br from-blue-300 to-cyan-300 opacity-20 blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-purple-300 to-pink-300 opacity-20 blur-3xl pointer-events-none"></div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">Why Reddlea Works</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                title: 'Smart Lead Capture',
                                description: 'Detect high-potential leads in real-time from Reddit discussions.',
                                icon: Brain,
                                color: 'from-purple-400 to-pink-400',
                            },
                            {
                                title: 'Seamless CRM Integration',
                                description: 'Export leads directly to your CRM or workflow apps effortlessly.',
                                icon: Database,
                                color: 'from-green-400 to-teal-400',
                            },
                            {
                                title: 'AI-Powered Insights',
                                description: 'Prioritize leads with intent, engagement, and relevance metrics.',
                                icon: Zap,
                                color: 'from-yellow-400 to-orange-400',
                            },
                        ].map((feature, idx) => {
                            const FeatureIcon = feature.icon;
                            return (
                                <div
                                    key={idx}
                                    className="relative p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 bg-white overflow-hidden"
                                >
                                    <div
                                        className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${feature.color} opacity-20 blur-3xl`}
                                    />
                                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl mb-6 mx-auto">
                                        <FeatureIcon className="w-8 h-8 text-gray-800" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 px-6 lg:px-20 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">What Our Users Say</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                name: 'Jane Doe, Marketing Lead',
                                feedback: 'Reddlea transformed our lead generation process. We now capture 3x more qualified leads from Reddit!',
                            },
                            {
                                name: 'John Smith, Sales Manager',
                                feedback: 'The AI insights are spot on. Our team acts faster and closes deals more efficiently.',
                            },
                            {
                                name: 'Emily Lee, Startup Founder',
                                feedback: 'Integrating leads into our CRM was effortless. Highly recommend for any growth-focused team.',
                            },
                        ].map((testimonial, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300">
                                <p className="text-gray-700 mb-4">&quot;{testimonial.feedback}&quot;</p>
                                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 lg:px-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center rounded-t-3xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Capture Leads Effortlessly?</h2>
                <p className="text-xl mb-8 text-blue-100">
                    Start generating qualified leads from Reddit discussions today.
                </p>
                <Link
                    href="https://reddlea.com"
                    target="_blank"
                    className="inline-flex items-center px-12 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300"
                >
                    Get Started
                    <ArrowRight className="ml-3 w-5 h-5" />
                </Link>
            </section>
        </main>
    );
}
