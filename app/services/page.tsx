import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Code,
  Smartphone,
  Brain,
  Cloud,
  Rocket,
  Shield,
  Zap,
  Database,
  Globe,
  CheckCircle2,
  ArrowRight,
  Palette,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services - Algostack | Software Development & IT Solutions',
  description:
    "Explore Algostack's comprehensive software development services including web, mobile, AI, cloud, and design solutions.",
};


export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'Design and develop high-quality static sites and full-featured SaaS web applications using modern frameworks and best practices.',
      features: [
        'Custom web applications',
        'Static websites',
        'SaaS solutions',
        'API integration',
        'Performance optimization',
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    },
    {
      icon: Smartphone,
      title: 'Android App Development',
      description:
        'Build fast, modern, and user-friendly Android applications with clean architecture and seamless API integrations.',
      features: [
        'Native Android apps',
        'UI/UX optimization',
        'API integration',
        'Performance tuning',
        'Offline support',
      ],
      technologies: ['Kotlin', 'Java', 'Firebase', 'SQLite', 'Jetpack Compose'],
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description:
        'Leverage artificial intelligence to automate processes and unlock new business insights.',
      features: [
        'GPT & Hugging Face integrations',
        'Chatbots & virtual assistants',
        'Predictive analytics',
        'Data-driven automation',
        'Machine learning models',
      ],
      technologies: ['OpenAI', 'Hugging Face', 'Python', 'TensorFlow', 'PyTorch'],
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description:
        'Scalable cloud infrastructure and management services for secure and efficient application hosting.',
      features: [
        'AWS & Azure deployment',
        'Database management',
        'Serverless architecture',
        'CI/CD pipelines',
        'Cloud migration & optimization',
      ],
      technologies: ['AWS', 'Azure', 'Supabase', 'PostgreSQL', 'Docker'],
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description:
        'Create visually stunning designs, logos, and UI assets that enhance user engagement and brand identity across digital platforms.',
      features: [
        'Logo & branding',
        'UI/UX design',
        'Marketing visuals',
        'Social media graphics',
        'Illustrations & icons',
      ],
      technologies: ['Figma', 'Adobe Photoshop', 'Illustrator', 'Canva', 'Blender'],
    },
  ];

  // const caseStudies = [
  //   {
  //     title: 'E-Commerce Transformation',
  //     client: 'RetailMax',
  //     result: '300% increase in online sales',
  //     description: 'Complete platform redesign with AI-powered recommendations',
  //   },
  //   {
  //     title: 'Healthcare Platform',
  //     client: 'MediConnect',
  //     result: '500K+ active users',
  //     description: 'HIPAA-compliant telemedicine application',
  //   },
  //   {
  //     title: 'FinTech Innovation',
  //     client: 'PayFlow',
  //     result: '$50M transactions processed',
  //     description: 'Secure payment processing system with fraud detection',
  //   },
  // ];

  return (
    <main className="min-h-screen pt-16">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 -z-10" />

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            Our Services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Software Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we deliver cutting-edge technology solutions tailored to your
            business needs.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'
                  }`}
              >
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <div className="inline-flex items-center space-x-3 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{service.title}</h2>
                      {/* <p className="text-blue-600 font-medium">{service.tagline}</p> */}
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-2xl transform rotate-3" />
                    <div className="relative bg-white p-12 rounded-2xl shadow-xl border-2 border-gray-100">
                      <Icon className="w-32 h-32 text-blue-600 mx-auto opacity-20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-24 h-24 text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{study.client}</p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg mb-4">
                  <p className="text-2xl font-bold text-green-600">{study.result}</p>
                </div>
                <p className="text-gray-600 leading-relaxed">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology for delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We understand your goals, challenges, and requirements',
                icon: Globe,
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Strategic roadmap with clear milestones and timelines',
                icon: Database,
              },
              {
                step: '03',
                title: 'Development',
                description: 'Agile development with continuous feedback and iteration',
                icon: Zap,
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Seamless deployment with ongoing support and optimization',
                icon: Rocket,
              },
            ].map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl h-full">
                    <div className="text-5xl font-bold text-blue-200 mb-4">{phase.step}</div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-blue-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
