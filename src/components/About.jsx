import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >

I am a dedicated Full-Stack Developer and DevOps Enthusiast with hands-on experience in building and deploying modern web applications using the MERN stack:<br/>

🟢 MongoDB – NoSQL database for flexible and scalable data storage<br/>

⚙️ Express.js – Backend web framework for building APIs<br/>

⚛️ React.js – Frontend library for building dynamic user interfaces<br/>

🟩 Node.js – Runtime environment for building server-side applications<br/>

On the development side, I focus on creating dynamic frontends with React.js, developing scalable backend APIs using Node.js and Express, and integrating databases with MongoDB. I follow best practices in RESTful API design, responsive UI/UX, and efficient data handling.

Alongside development, I have built a strong foundation in DevOps tools and practices, enabling smooth automation and deployment pipelines. My DevOps toolkit includes:<br/>

✅ CI/CD Tools: Jenkins, GitHub Actions, ArgoCD<br/>

🐳 Containerization: Docker<br/>

☸️ Orchestration: Kubernetes<br/>

🌐 Cloud Platforms: AWS (EC2, S3, IAM)<br/>

🛠️ Infrastructure as Code: Terraform<br/>

📈 Monitoring: Prometheus, Grafana, Node Exporter<br/>

🧰 Version Control & Scripting: Git, GitHub, Bash<br/>

With this combined skill set, I’m able to develop, containerize, deploy, and monitor applications efficiently — ensuring high performance, scalability, and continuous delivery in real-world environments.


      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
