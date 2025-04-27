import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "1234567890", // Default phone number
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      const response = await fetch(
        "https://myportfolio-78md.onrender.com/api/v1/createUser",
        options
      );
      const res = await response.json();
      console.log("data", res.status);

      // Show success message
      toast.success("Message sent successfully!", {
        description: "I will get back to you as soon as possible.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "", phone: "1234567890" });
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    }
  };

  return (
    <Layout title="Contact">
      <BackgroundBeamsWithCollision>
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
              <Mail size={32} className="text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Contact Me</h1>
            <p className="text-muted-foreground">
              Reach out to me over email or fill up this contact form. I will
              get back to you ASAP. I promise.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="input-field"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                className="input-field resize-none"
                placeholder="Your message here..."
              />
            </div>

            <div className="pt-2">
              <Button type="submit" className="w-full">
                <Send size={16} className="mr-2" />
                Submit
              </Button>
            </div>
          </form>
        </div>
      </BackgroundBeamsWithCollision>
    </Layout>
  );
};

export default Contact;
