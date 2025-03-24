import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalInfo } from "@/constants/data";
import { useToast } from "@/hooks/use-toast";
import { Phone, MapPin, Mail, Send, Loader2, MessageSquare } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      setIsSubmitting(true);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Submission failed');
      }
      
      setIsSuccess(true);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      form.reset();
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div 
            className="lg:w-2/5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-card rounded-xl shadow-md p-6 h-full relative overflow-hidden group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.h3 
                className="text-2xl font-bold mb-6 relative"
                variants={itemVariants}
              >
                Contact Information
              </motion.h3>
              
              <div className="space-y-4 relative">
                <motion.div 
                  className="flex items-start group/item"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="bg-primary/10 p-3 rounded-lg mr-4 group-hover/item:bg-primary/20 transition-colors duration-300"
                  >
                    <Mail className="text-primary" size={20} />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-muted-foreground hover:text-primary transition duration-300"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group/item"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="bg-primary/10 p-3 rounded-lg mr-4 group-hover/item:bg-primary/20 transition-colors duration-300"
                  >
                    <Phone className="text-primary" size={20} />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a 
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
                      className="text-muted-foreground hover:text-primary transition duration-300"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group/item"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="bg-primary/10 p-3 rounded-lg mr-4 group-hover/item:bg-primary/20 transition-colors duration-300"
                  >
                    <MapPin className="text-primary" size={20} />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">{personalInfo.location}</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-8 relative"
                variants={itemVariants}
              >
                <h4 className="font-semibold text-foreground mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {personalInfo.socialLinks.map((link, index) => (
                    <motion.a 
                      key={link.name}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`${
                        link.name === 'LinkedIn' 
                          ? 'bg-[#0A66C2]' 
                          : link.name === 'GitHub' 
                            ? 'bg-[#333]' 
                            : link.name === 'Twitter' 
                              ? 'bg-[#1DA1F2]'
                              : link.name === 'Instagram'
                                ? 'bg-[#E4405F]'
                                : 'bg-primary'
                      } text-white p-3 rounded-full hover:bg-opacity-90 transition duration-300`}
                      aria-label={link.name}
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <link.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-3/5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-card rounded-xl shadow-md p-6 relative overflow-hidden group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.h3 
                className="text-2xl font-bold mb-6 relative"
                variants={itemVariants}
              >
                Send Me a Message
              </motion.h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Message subject" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Write your message here..." 
                            className="min-h-[150px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <AnimatePresence>
                    {isSuccess ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute inset-0 bg-primary/10 rounded-xl flex items-center justify-center"
                      >
                        <div className="text-center">
                          <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                          <h4 className="text-xl font-semibold text-primary">Message Sent!</h4>
                          <p className="text-muted-foreground">Thank you for reaching out.</p>
                        </div>
                      </motion.div>
                    ) : (
                      <Button 
                        type="submit" 
                        className="w-full gap-2 relative overflow-hidden group/button" 
                        disabled={isSubmitting}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send size={16} />
                            </>
                          )}
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-primary/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </Button>
                    )}
                  </AnimatePresence>
                </form>
              </Form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
