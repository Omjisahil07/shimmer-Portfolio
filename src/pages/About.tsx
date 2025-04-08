
import React from 'react';
import Layout from '@/components/Layout';
import { User } from 'lucide-react';

const About = () => {
  return (
    <Layout title="About">
      <div className="max-w-3xl mx-auto">
        <h1 className="section-title">
          <User size={24} className="text-primary" />
          About Me
        </h1>
        
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <img 
            src="/lovable-uploads/06b2535b-f663-4ea6-b230-7ca7df11862c.png" 
            alt="City at night" 
            className="rounded-lg h-40 object-cover animate-fade-in"
          />
          <img 
            src="/lovable-uploads/0991307e-857f-4b1f-8a96-330c161bdeae.png" 
            alt="Hot air balloon" 
            className="rounded-lg h-40 object-cover animate-fade-in delay-75"
          />
          <img 
            src="/lovable-uploads/06b2535b-f663-4ea6-b230-7ca7df11862c.png" 
            alt="Coastal town" 
            className="rounded-lg h-40 object-cover animate-fade-in delay-100"
          />
          <img 
            src="/lovable-uploads/0991307e-857f-4b1f-8a96-330c161bdeae.png" 
            alt="Ocean view" 
            className="rounded-lg h-40 object-cover animate-fade-in delay-150"
          />
        </div>
        
        <div className="space-y-6 text-lg">
          <p className="animate-fade-in">
            Hey there, I'm John Doe - a passionate developer, avid writer, and a connoisseur of awesome design.
            Welcome to my corner of the digital world!
          </p>
          
          <p className="animate-fade-in delay-75">
            Since the early days of my journey, I've been captivated by the art of crafting exceptional digital
            experiences. As a developer, I thrive on turning lines of code into functional and elegant solutions. My goal
            is to not just create software, but to build digital marvels that seamlessly merge form and function.
          </p>
          
          <p className="animate-fade-in delay-100">
            But my passion extends beyond coding. With a mind brimming with ideas, I've
            ventured into the realm of writing. I craft articles that unravel complex concepts to creative tales that
            ignite the imagination. I weave words to inform, entertain, and inspire.
          </p>
          
          <p className="animate-fade-in delay-150">
            What sets me apart is my unwavering appreciation for design. I believe that aesthetics and usability go
            hand in hand. My zeal for awesome design ensures that every project I undertake not only works flawlessly
            under the hood but also looks stunning on the surface.
          </p>
          
          <p className="animate-fade-in delay-200">
            Through this website, I aim to share my journey with you. Whether you're a
            fellow developer seeking solutions, a fellow writer in search of inspiration, or simply someone who
            appreciates the finer aspects of design, there's something here for you.
          </p>
          
          <p className="animate-fade-in delay-250">
            Join me on this journey of bytes and narratives, logic and creativity, code and prose. Together, we can
            explore the boundless possibilities of technology and storytelling, all while reveling in the sheer beauty of
            thoughtful design.
          </p>
          
          <p className="animate-fade-in delay-300">
            Thank you for being here, and I can't wait to embark on this adventure with you.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
