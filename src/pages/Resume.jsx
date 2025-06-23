import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Cpu, Database, GitBranch, Layout } from 'lucide-react';

const Resume = () => {
  const skills = [
    { name: 'HTML', percentage: 90, icon: <Code size={18} /> },
    { name: 'CSS', percentage: 70, icon: <Layout size={18} /> },
    { name: 'JavaScript', percentage: 50, icon: <Cpu size={18} /> },
    { name: 'React', percentage: 85, icon: <GitBranch size={18} /> },
  ];

  return (
    <div className="w-full p-5 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="orbitron text-[28px] font-semibold text-white mb-4">Resume</div>
        <div className="w-[40px] bg-[var(--orange-yellow-crayola)] h-[5px] rounded-[10px] mb-8"></div>

        <div className="grid md:grid-cols-1 gap-10">
          {/* Education Section */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <BookOpen className="text-[var(--orange-yellow-crayola)]" size={20} />
              Education
            </h2>
            
            <div className="bg-[var(--eerie-black-1)] p-6 rounded-xl border-l-4 border-[var(--orange-yellow-crayola)]">
              <h3 className="text-lg font-medium text-white">Bachelor in Computer Application</h3>
              <p className="text-[var(--orange-yellow-crayola)] mb-2">2024 - 2028</p>
              <p className="text-gray-400">Institute of Information Technology and Management</p>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Code className="text-[var(--orange-yellow-crayola)]" size={20} />
              My Skills
            </h2>
            
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-[var(--orange-yellow-crayola)]">
                        {skill.icon}
                      </span>
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-gray-400">{skill.percentage}%</span>
                  </div>
                  
                  {/* Progress bar on next line */}
                  <div className="w-full mt-2">
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-2.5 rounded-full bg-[var(--orange-yellow-crayola)]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;