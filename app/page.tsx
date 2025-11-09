'use client';

import Link from 'next/link';
import { ArrowRight, Code, Smartphone, Brain, Cloud, CheckCircle2, Star, Quote, Palette, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiFirebase, SiPython, SiAmazon, SiKotlin, SiAdobeillustrator, SiAdobexd, SiFigma } from 'react-icons/si';
import { FaRobot } from 'react-icons/fa';

export default function Home() {
  const features = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Design and develop high-quality static sites and full-featured SaaS web applications using modern frameworks and best practices.',
    },

    {
      icon: Smartphone,
      title: 'Android App Development',
      description:
        'Build fast, modern, and user-friendly Android applications with clean architecture and seamless API integrations.',
    },

    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Leverage artificial intelligence to automate processes and unlock new business insights.',
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for enterprise-grade performance.',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description:
        'Create visually stunning designs, logos, and UI assets that enhance user engagement and brand identity across digital platforms.',
    },
  ];

  const techs = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    { name: 'AI/ML', icon: FaRobot, color: '#9B51E0' },
    { name: 'Android (Kotlin)', icon: SiKotlin, color: '#A97BFF' },

    { name: 'Graphic Design', icon: SiAdobeillustrator, color: '#FF9A00' },
    { name: 'UI/UX Design', icon: SiFigma, color: '#F24E1E' },
    { name: 'Prototyping', icon: SiAdobexd, color: '#FF61F6' },
  ];
  const testimonials = [
    {
      name: 'Jessica Liu',
      role: 'CTO at FinEdge',
      content:
        "Algostack helped us streamline our platform and improve performance. Their team is professional, communicative, and highly skilled.",
      avatar: 'JL',
    },
    {
      name: 'David Kim',
      role: 'Founder of MarketFlow',
      content:
        "We partnered with Algostack for a major product launch. They delivered on time and exceeded our expectations in both design and functionality.",
      avatar: 'DK',
    },
    {
      name: 'Priya Nair',
      role: 'Product Manager at HealthSync',
      content:
        "Working with Algostack was a pleasure. Their developers understood our requirements quickly and translated them into a polished, intuitive product.",
      avatar: 'PN',
    },
    {
      name: 'Carlos Mendes',
      role: 'CEO at EduTrack',
      content:
        "The team at Algostack is responsive, creative, and technically excellent. Our project was delivered smoothly, and the results speak for themselves.",
      avatar: 'CM',
    },
    {
      name: 'Aisha Khan',
      role: 'Lead Designer at TravelEase',
      content:
        "Algostack helped us redesign our user interface. The team is professional and truly understands user experience. Highly recommend!",
      avatar: 'AK',
    },
  ];


  const faqs = [
    { q: 'How long does a typical project take?', a: 'Depending on the scope, projects usually range from 4-12 weeks.' },
    { q: 'Do you provide ongoing support?', a: 'Yes, we offer maintenance and support packages tailored to client needs.' },
    { q: 'What industries do you work with?', a: 'We serve startups, SMBs, and enterprise clients across tech, health, finance, and e-commerce.' },
    { q: 'Can you help with design and branding?', a: 'Absolutely! Our team includes experienced UI/UX designers and brand specialists.' },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);



  return (
    <main className="min-h-screen">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 -z-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              Innovation Meets Excellence
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Building The{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Future
              </span>{' '}
              Of Software
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We craft innovative software solutions that empower businesses to thrive in the digital age.
              From concept to deployment, we're your trusted technology partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 border-2 border-gray-200 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '7+', label: 'Projects Completed' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '15+', label: 'Team Members' },
              { value: '5+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>




      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team leverages modern technologies and tools to build robust, scalable, and visually stunning solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
            {techs.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="text-5xl mb-4" style={{ color: tech.color }}>
                    <Icon />
                  </div>
                  <div className="text-lg font-bold text-gray-900">{tech.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-blue-200 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    {/* <div className="text-sm text-gray-600">{testimonial.role}</div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Algostack?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Expert team with 5+ years of experience',
              'Agile development methodology',
              'Cutting-edge technology stack',
              'On-time project delivery',
              '24/7 support and maintenance',
              'Scalable and secure solutions',
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Answers to the most common questions we get from our clients.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="text-lg md:text-xl font-semibold text-gray-900">{faq.q}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                <div
                  className={`px-6 pb-6 text-gray-600 text-lg transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help you achieve your goals with innovative software solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
