import { motion } from "motion/react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Server,
  Cloud,
  Database,
} from "lucide-react";
import profileImage from "../assets/profile.jpg";

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Text Content */}
            <motion.div variants={fadeInUp} className="text-white">
              <motion.div
                variants={fadeInUp}
                className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6"
              >
                <span className="text-blue-400">
                  Available for Opportunities
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="mb-4">
                Sumesh Surendran Letha
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-2xl text-slate-300 mb-6"
              >
                Senior Full-Stack Software Engineer
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-slate-400 mb-8 leading-relaxed"
              >
                A decade of experience designing and delivering enterprise-grade
                distributed systems and cloud-native microservices in healthcare
                and aviation domains.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 mb-8"
              >
                <a
                  href="tel:2676373966"
                  className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (267) 637-3966
                </a>
                <a
                  href="mailto:sumesh.sl007@gmail.com"
                  className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  sumesh.sl007@gmail.com
                </a>
                <span className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4" />
                  Exton, PA
                </span>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/sumeshsl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/sumeshsl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
                <img
                  src={profileImage}
                  alt="Sumesh Surendran Letha"
                  className="relative w-full h-auto rounded-2xl shadow-2xl border border-slate-700"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h2>Education</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-200"
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">
                  <h3 className="text-xl mb-2">Villanova University</h3>
                  <p className="text-slate-600">
                    Master of Science in Computer Science
                  </p>
                  <p className="text-sm text-slate-500 mt-2">
                    May 2026 • Villanova, PA
                  </p>
                </div>
                <p className="text-slate-700">
                  Advanced Algorithms • Data Structures • Artificial
                  Intelligence • Operating Systems
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-200"
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">
                  <h3 className="text-xl mb-2">
                    Cochin University of Science and Technology
                  </h3>
                  <p className="text-slate-600">
                    Bachelor of Technology in Computer Science and Engineering
                  </p>
                  <p className="text-sm text-slate-500 mt-2">Kochi, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h2>Professional Experience</h2>
            </div>

            <div className="space-y-12">
              {/* Villanova University */}
              <motion.div
                className="border-l-4 border-blue-600 pl-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl mb-1">Research Assistant</h3>
                    <p className="text-blue-600">Villanova University</p>
                  </div>
                  <p className="text-slate-600 mt-2 md:mt-0">
                    Aug 2024 – Present
                  </p>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li>
                    • Architected scalable AI-driven software framework with
                    voice-to-action automation, integrating API gateway and
                    microservices
                  </li>
                  <li>
                    • Engineered full-stack AI-powered clinical training
                    platform using React, Spring Boot/Node.js, OpenAI API,
                    PostgreSQL, and Socket.IO
                  </li>
                  <li>
                    • Designed BridgeSafe IoT system achieving 287ms median
                    latency and 100% message delivery across 100+ nodes
                  </li>
                  <li>
                    • Authored IEEE AIIoT 2026 conference paper on edge-to-cloud
                    IoT architecture for municipal bridge safety
                  </li>
                </ul>
              </motion.div>

              {/* Siemens Medical Solutions */}
              <motion.div
                className="border-l-4 border-slate-400 pl-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl mb-1">Senior Software Engineer</h3>
                    <p className="text-slate-600">
                      Siemens Medical Solutions Inc
                    </p>
                  </div>
                  <p className="text-slate-600 mt-2 md:mt-0">
                    Oct 2019 – Sep 2023
                  </p>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li>
                    • Architected distributed Java Spring Boot microservices
                    using SOLID principles across 200+ hospital systems
                  </li>
                  <li>
                    • Led design of Acumulus & Auto QC systems with 99.9% uptime
                    SLAs for clinical laboratory operations
                  </li>
                  <li>
                    • Deployed cloud-native solutions on AWS (ECS, EMR, S3)
                    processing 5M+ medical records/day
                  </li>
                  <li>
                    • Developed HIPAA-compliant platforms using Apache Kafka and
                    AWS ElastiCache, achieving &lt;50ms read latency
                  </li>
                  <li>
                    • Automated CI/CD pipelines reducing deployment cycle from 2
                    weeks to 2 days
                  </li>
                  <li>
                    • Engineered scalable services with Kubernetes and Terraform
                    supporting zero-downtime deployments
                  </li>
                </ul>
              </motion.div>

              {/* Siemens Healthcare */}
              <motion.div
                className="border-l-4 border-slate-400 pl-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl mb-1">Senior Software Engineer</h3>
                    <p className="text-slate-600">Siemens Healthcare Pvt Ltd</p>
                  </div>
                  <p className="text-slate-600 mt-2 md:mt-0">
                    May 2017 – Oct 2019
                  </p>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li>
                    • Optimized medical data platform performance by 30% across
                    data ingestion, processing, and query layers
                  </li>
                  <li>
                    • Architected comprehensive data lake management system
                    (syngo Lab Data Manager) serving 50+ enterprise clients
                  </li>
                  <li>
                    • Designed fault-tolerant mechanisms ensuring 99.95% data
                    durability under peak workloads
                  </li>
                </ul>
              </motion.div>

              {/* IBS Software */}
              <motion.div
                className="border-l-4 border-slate-400 pl-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl mb-1">Technical Lead</h3>
                    <p className="text-slate-600">IBS Software Pvt Ltd</p>
                  </div>
                  <p className="text-slate-600 mt-2 md:mt-0">
                    May 2011 – May 2017
                  </p>
                </div>
                <p className="text-sm text-slate-500 mb-3">
                  Clients: Virgin Atlantic, Emirates, Jet Airways, Air
                  France/KLM
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li>
                    • Directed development of Leave Management system using
                    Java, J2EE, Spring, and Hibernate
                  </li>
                  <li>
                    • Built Subsistence Payment module automating meal payments
                    with XML generation
                  </li>
                  <li>
                    • Developed Cosmic Radiation Monitoring system for aviation
                    regulatory compliance
                  </li>
                  <li>
                    • Awarded Customer Champion and twice recognized as Team
                    Champion
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Code className="w-8 h-8 text-blue-600" />
              <h2>Technical Skills</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg">Languages</h3>
                </div>
                <p className="text-slate-700">
                  Java, Python, JavaScript, TypeScript, SQL, NoSQL, HTML/CSS
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg">Frameworks</h3>
                </div>
                <p className="text-slate-700">
                  Spring Boot, Spring MVC, Hibernate/JPA, React, Angular,
                  Node.js, Apache Kafka
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Cloud className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg">Cloud & DevOps</h3>
                </div>
                <p className="text-slate-700">
                  AWS (EC2, ECS, S3, Lambda, RDS), Kubernetes, Docker,
                  Terraform, Jenkins
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg">Databases</h3>
                </div>
                <p className="text-slate-700">
                  Oracle, MySQL, SQL Server, PostgreSQL, MongoDB, DynamoDB,
                  Redis
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg">Architecture</h3>
                </div>
                <p className="text-slate-700">
                  Microservices, RESTful APIs, Event-Driven, Distributed
                  Systems, SOLID Principles
                </p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg">Domain Expertise</h3>
                </div>
                <p className="text-slate-700">
                  HIPAA Compliance, Healthcare (HL7, DICOM), Aviation Systems,
                  AI/ML Integration
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <Award className="w-8 h-8 text-blue-600" />
              <h2>Certifications & Awards</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg mb-4 text-slate-600">Certifications</h3>
                <motion.div
                  className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-900">
                      AWS Certified Solutions Architect – Associate
                    </p>
                    <p className="text-sm text-slate-600">SAA-C03</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-slate-900">
                      AWS Certified Cloud Practitioner
                    </p>
                    <p className="text-sm text-slate-600">CLF-C02</p>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg mb-4 text-slate-600">Awards</h3>
                <motion.div
                  className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-900">
                    IBS Software Customer Champion
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-900">
                    Two Time IBS Software Team Champion
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-8">Let's Connect</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Open to new opportunities and collaborations. Feel free to reach
              out.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="mailto:sumesh.sl007@gmail.com"
                className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-lg"
              >
                <Mail className="w-6 h-6" />
                Email Me
              </a>
              <a
                href="tel:2676373966"
                className="flex items-center gap-3 px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-lg"
              >
                <Phone className="w-6 h-6" />
                Call Me
              </a>
            </div>

            <div className="flex gap-6 justify-center">
              <a
                href="https://www.linkedin.com/in/sumeshsl/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/sumeshsl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-slate-400 text-center">
        <p>© 2026 Sumesh Surendran Letha. All rights reserved.</p>
      </footer>
    </div>
  );
}
