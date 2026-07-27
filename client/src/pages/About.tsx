import { motion } from "framer-motion";
import { about, personalInfo } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Heart, MapPin, MessageCircle, Download } from "lucide-react";
import profileImage from "@/assets/images/profile.jpg";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h1>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
          {/* Left: Profile Image */}
          <motion.div
            className="md:w-2/5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative rounded-lg shadow-lg w-full h-80 md:h-96 bg-muted overflow-hidden">
              <img
                src={profileImage}
                alt="Ezekiel Funom Gwamna"
                className="w-full h-full object-cover object-center rounded-lg"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="md:w-3/5 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 relative inline-block">
                Who I Am
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
              </h3>
              {about.description.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, title: "Education", content: about.education.degree, subcontent: `${about.education.institution}, ${about.education.year}` },
                { icon: Briefcase, title: "Experience", content: about.experience.position, subcontent: `${about.experience.company}, ${about.experience.period}` },
                { icon: MapPin, title: "Location", content: personalInfo.location },
                { icon: MessageCircle, title: "Languages", content: "English & Hausa (Fluent)" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-card/50 hover:bg-card transition-colors duration-300"
                >
                  <h4 className="font-semibold mb-2 flex items-center">
                    <item.icon className="mr-2 text-primary" size={18} />
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{item.content}</p>
                  {item.subcontent && (
                    <p className="text-muted-foreground text-xs mt-1">{item.subcontent}</p>
                  )}
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <Heart className="mr-2 text-primary" size={18} />
                Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-primary/10 text-sm text-primary"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Professional Background, Education, Experience, Certifications below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Professional Background</h2>
              <p className="text-muted-foreground">{personalInfo.about}</p>
            </div>

            <div className="bg-card rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Education</h2>
              <div className="space-y-4">
                {personalInfo.education.map((edu, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-0">
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Experience</h2>
              <div className="space-y-4">
                {personalInfo.experience.map((exp, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-0">
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <p className="text-muted-foreground mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">Certifications</h2>
              <div className="space-y-4">
                {personalInfo.certifications.map((cert, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-0">
                    <h3 className="font-semibold text-foreground text-sm">{cert.name}</h3>
                    <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg">
            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;