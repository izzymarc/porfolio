import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code,
  Smartphone,
  Bot,
  MessageSquare,
  ScrollText,
  Server,
  Palette,
  BarChart3,
  Search,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { servicesData } from "@/constants/data";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Smartphone,
  Bot,
  MessageSquare,
  ScrollText,
  Server,
  Palette,
  BarChart: BarChart3,
  Search,
};

const ServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Services I Offer</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Comprehensive technology and design solutions tailored to your business needs. From full-stack development to AI-powered automation, I deliver end-to-end services.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesData.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Code;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={category.title}
                className={`bg-card border border-border rounded-xl shadow-sm transition-all duration-300 cursor-pointer ${
                  isExpanded ? "ring-2 ring-primary/50 shadow-lg" : "hover:shadow-md hover:-translate-y-1"
                }`}
                variants={cardVariants}
                whileHover={!isExpanded ? { scale: 1.02 } : {}}
                transition={{ duration: 0.2 }}
                onClick={() => toggleExpand(index)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="h-6 w-6" />
                      </motion.div>
                      <h3 className="text-lg font-semibold line-clamp-1">
                        {category.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </motion.div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">
                    {category.services.length} service{category.services.length > 1 ? "s" : ""} offered
                  </p>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border pt-4 mt-1">
                      <ul className="space-y-2.5">
                        {category.services.map((service) => (
                          <motion.li
                            key={service}
                            className="flex items-start gap-2.5 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-card-foreground/80">{service}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Show a preview of services when collapsed */}
                  <div
                    className={`mt-3 flex flex-wrap gap-1.5 transition-opacity duration-200 ${
                      isExpanded ? "opacity-0 hidden" : "opacity-100"
                    }`}
                  >
                    {category.services.slice(0, 3).map((service) => (
                      <span
                        key={service}
                        className="inline-block text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                    {category.services.length > 3 && (
                      <span className="inline-block text-xs text-primary px-2 py-0.5 rounded-full">
                        +{category.services.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;