import Photo from "@/public/assets/img/1689443313537.jpeg"; // Replace with your image path
import Image from "next/image";
import Link from "next/link";
import AboutSectionSkeleton from "../../Skeleton/AboutSectionSkeleton";

const AboutSection = ({loading}) => {
  if(loading) return <AboutSectionSkeleton />;
  return (
    <section id="about" className="py-16 md:py-24 bg-[var(--bg-one)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square max-w-md mx-auto">
              
              <Image
                src={Photo}
                alt="Your Image"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-4 rounded-xl shadow-lg hidden md:block">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Content Column */}
       <div className="space-y-6">
  <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-one)]">
    About <span className="text-green-400">Me</span>
  </h2>

  <p className="text-lg text-[var(--text-two)]">
    I’m a Senior Full Stack Developer with over 5 years of experience in building scalable web applications and APIs. I specialize in Laravel, React.js, and Next.js, with deep expertise in both frontend and backend technologies.
  </p>

  <p className="text-[var(--text-two)]">
    My journey has taken me from crafting clean, responsive UIs to architecting secure, RESTful APIs and handling full-cycle deployment on cloud servers. I’m passionate about building high-performance, SEO-optimized websites that blend design with functionality.
  </p>

  <div className="grid grid-cols-2 gap-4 pt-4">
    {[
      "Responsive Design",
      "Clean Code",
      "UI/UX Focused",
      "SEO Optimized",
      "API Development",
      "Cloud Deployment",
    ].map((skill, i) => (
      <div key={i} className="flex items-center space-x-3">
        <div className="bg-green-500 p-2 rounded-full">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <span className="text-[var(--text-two)]">{skill}</span>
      </div>
    ))}
  </div>

  <div className="pt-6">
    <Link 
      href="/contact" 
      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-400 transition-colors"
    >
      Contact Me
      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </Link>
  </div>
</div>

        </div>
        
        {/* Skills Section */}
        <div className="mt-16 md:mt-24 bg-[var(--bg-two)] rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center text-[var(--text-one)] mb-8">My Skills</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Web Design', level: 95 },
              { name: 'Frontend Dev', level: 90 },
              { name: 'UI/UX', level: 80 },
              { name: 'Backend Dev', level: 95 }
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-[var(--text-one)]">{skill.name}</span>
                  <span className="text-xs text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-[var(--bg-two)] rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;