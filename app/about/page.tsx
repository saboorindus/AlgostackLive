import type { Metadata } from 'next';
import { Target, Eye, Award, Users, Lightbulb, Heart, Github, Linkedin, Twitter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Algostack | Leading Software Development Company',
  description: 'Learn about Algostack\'s mission, vision, and the talented team behind innovative software solutions.',
};

export default function About() {
  const team = [
    {
      name: 'Abdul Saboor',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 5+ years in software development, product strategy, and team leadership.',
      initials: 'AS',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
      },
    },
    {
      name: 'Abdul Moiz',
      role: 'Co-Founder',
      bio: 'Technology innovator specializing in AI solutions, cloud architecture, and scalable systems.',
      initials: 'AM',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
      },
    },
    {
      name: 'Murtaza Soomro',
      role: 'Head of Design',
      bio: 'Creative director crafting intuitive UI/UX experiences that delight users.',
      initials: 'MS',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
      },
    },
    {
      name: 'Awais Massan',
      role: 'Web Developer',
      bio: 'Full-stack developer passionate about clean code, scalable web apps, and modern technologies.',
      initials: 'AM',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
      },
    },
    {
      name: 'Muhammad Mashood',
      role: 'UI/UX Designer',
      bio: 'Strategic designer blending aesthetics and functionality to deliver engaging user interfaces.',
      initials: 'MM',
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
      },
    },
  ];


  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries to create cutting-edge solutions.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in every project we deliver.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we create.',
    },
  ];

  return (
    <main className="min-h-screen pt-16">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 -z-10" />

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            About Algostack
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Building Tomorrow's{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Technology Today
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a team of passionate technologists, designers, and strategists committed to transforming
            ideas into exceptional digital experiences.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To empower businesses with innovative software solutions that drive growth, efficiency,
                  and digital transformation. We're committed to delivering excellence through cutting-edge
                  technology and exceptional service.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To be the global leader in software innovation, recognized for creating transformative
                  solutions that shape the future of business and technology. We envision a world where
                  technology seamlessly enhances every aspect of business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Talented individuals united by a passion for innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                    {member.initials}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                  {/* <div className="flex justify-center space-x-4">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        We combine expertise, innovation, and dedication to deliver exceptional software solutions.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
        {
          icon: Lightbulb,
          title: 'Innovative Solutions',
          description: 'We leverage cutting-edge technologies to solve complex problems and deliver creative results.',
        },
        {
          icon: Users,
          title: 'Collaborative Approach',
          description: 'We work closely with clients at every step, ensuring transparency and alignment.',
        },
        {
          icon: Heart,
          title: 'Passionate Team',
          description: 'Our team is dedicated, motivated, and deeply invested in the success of your project.',
        },
        {
          icon: Award,
          title: 'Proven Excellence',
          description: 'We maintain high standards in every project, delivering reliable and high-quality results.',
        },
        {
          icon: Target,
          title: 'Goal-Oriented',
          description: 'We focus on measurable outcomes that drive real business impact for our clients.',
        },
        {
          icon: Eye,
          title: 'Forward-Thinking',
          description: 'We anticipate trends and opportunities, keeping your business ahead of the curve.',
        },
      ].map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 text-center"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Icon className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        );
      })}
    </div>
  </div>
</section>

    </main>
  );
}
