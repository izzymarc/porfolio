import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Send, Loader2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { personalInfo } from "@/constants/data";
import emailjs from '@emailjs/browser';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ContactSection } from "@/components/ContactSection";

interface FAQ {
  question: string;
  answer: string;
}

// FAQ data
const faqs: FAQ[] = [
  {
    question: "What services do you offer?",
    answer: "I offer full-stack web development services including frontend development, backend implementation, database design, API integration, and maintenance."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on complexity and requirements. Simple projects may take 2-4 weeks, while complex ones can take several months. I'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, I offer ongoing support and maintenance packages for all completed projects. This includes regular updates, security patches, and feature enhancements."
  },
  {
    question: "How do we start working together?",
    answer: "Simply reach out through this contact form or via email. We'll schedule an initial consultation to discuss your project needs, timeline, and budget. From there, I'll provide a detailed proposal."
  }
];

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_id', // Replace with your EmailJS service ID
        'template_id', // Replace with your EmailJS template ID
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        'public_key' // Replace with your EmailJS public key
      );
      
      if (response.status === 200) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
            <p className="max-w-3xl mx-auto text-muted-foreground">
              I'd love to hear from you! Whether you have a question, project inquiry, or just want to say hello, feel free to reach out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-card rounded-xl shadow-md p-8 h-full">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Mail className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Phone className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Phone</h3>
                      <a href={`tel:${personalInfo.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <MapPin className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Location</h3>
                      <p className="text-muted-foreground">{personalInfo.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Clock className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Availability</h3>
                      <p className="text-muted-foreground">{personalInfo.availability}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    {personalInfo.socialLinks.map((link) => (
                      <a 
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
                      >
                        <link.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-card rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                            <Input type="email" placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
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
                              placeholder="Your message" 
                              className="min-h-[150px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;