
import React from 'react';
import Layout from '@/components/Layout';
import { User, Code, Award, Target, Cpu, Brain, Heart, Star } from 'lucide-react';

const About = () => {
  const personalInfo = {
    hobbies: ['Coding', 'Reading', 'Problem-solving', 'Hackathons'],
    strengths: ['Persistent', 'Team Leader', 'Full-Stack Developer'],
    weaknesses: ['Overthinking', 'Perfectionism'],
    goals: ['Become a Cloud Computing Expert', 'Build impactful applications'],
    programmingLanguages: ['JavaScript', 'Python'],
    tools: ['Appwrite', 'MongoDB', 'React', 'Node.js'],
    traits: ['Ambitious', 'Analytical', 'Curious'],
    interests: ['Web Development', 'Cloud Computing', 'Open Source'],
    achievements: ['HexCoder hackathon selection', 'Decode Cafe Club Tech Lead']
  };

  return (
    <Layout title="About">
      <div className="max-w-3xl mx-auto">
        <h1 className="section-title">
          <User size={24} className="text-primary" />
          About Me
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Code className="text-primary" size={20} />
                Technical Skills
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.programmingLanguages.map(lang => (
                      <span key={lang} className="badge">{lang}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.tools.map(tool => (
                      <span key={tool} className="badge">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Award className="text-primary" size={20} />
                Achievements
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {personalInfo.achievements.map(achievement => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Target className="text-primary" size={20} />
                Goals
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {personalInfo.goals.map(goal => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Brain className="text-primary" size={20} />
                Core Strengths
              </h2>
              <div className="flex flex-wrap gap-2">
                {personalInfo.strengths.map(strength => (
                  <span key={strength} className="badge">{strength}</span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Heart className="text-primary" size={20} />
                Interests & Hobbies
              </h2>
              <div className="grid gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Professional Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.interests.map(interest => (
                      <span key={interest} className="badge">{interest}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Hobbies</h3>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.hobbies.map(hobby => (
                      <span key={hobby} className="badge">{hobby}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Star className="text-primary" size={20} />
                Personality
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Key Traits</h3>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.traits.map(trait => (
                      <span key={trait} className="badge">{trait}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Areas for Growth</h3>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.weaknesses.map(weakness => (
                      <span key={weakness} className="badge">{weakness}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
