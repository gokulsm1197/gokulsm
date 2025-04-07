import {
  node,
  mongo,
  docker,
  exp,
  bro,
  jenkin,
  kube,
  linex,
  aws,
  vag,
  react,
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  hundu,
  guvi,
  Bsc,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Node.js", icon: node },
  { title: "React.js", icon: react },
  { title: "Express.js", icon: exp },
  { title: "MongoDB", icon: mongo },
  { title: "AWS Cloud Computing ", icon: aws },
  { title: "Linux", icon: linex },
  { title: "Docker", icon: docker },
  { title: "Kubernetes", icon: kube },
  { title: "Jenkins", icon: jenkin },
  { title: "Vagrant", icon: vag },
  { title: "Prometheus and Grafana", icon: bro },
 
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "DevOps",
    company_name: "GUVI IIT MADRAS GEEK NETWORK PRIVATE LIMITED",
    icon: guvi,
    iconBg: "#161329",
    date: "March 2024",
    points: [
      "As a DevOps enthusiast, I have gained hands-on experience in streamlining software development and deployment processes through automation and collaboration.",
      "My learning journey includes mastering CI/CD tools like Jenkins, GitHub Actions, and ArgoCD, enabling efficient code integration and delivery.",
      "as well as containerization using Docker and orchestration with Kubernetes.",
      "I’ve worked with Terraform for infrastructure as code, managed cloud environments on AWS (EC2, S3, IAM), and implemented monitoring solutions using Prometheus, Grafana, and Node Exporter.",
      "I am skilled in version control with Git, scripting with Bash  and configuration management using Ansible.",
      " I also have experience working with Nginx, Istio, MongoDB, and VM tools like Vagrant and VirtualBox, with proficiency in using Linux, MobaXterm, Git Bash, and VS Code for development and troubleshooting."
    ],
  },

  {
    title: "Master of Science in Visual Communication",
    company_name: "Hindusthan College Of Arts And Science",
    icon: hundu,
    iconBg: "#161329",
    date: "May 2020",
    points: [
      "A comprehensive program focused on the creative and technical aspects of visual storytelling.",
      "It covers advanced skills in graphic design, video editing, branding, and marketing strategies, blending creativity with communication.", 
      "The course emphasizes cinematography techniques, direction, and professional photography, helping develop a strong visual sense and storytelling ability.",
      " With hands-on projects and real-time media exposure, it prepares individuals to produce impactful visual content for digital and print platforms.",
    ],
  },
  {
    title: "Bachelor of Science in Information Technology",
    company_name: "Vidyasagar College of Arts and Science",
    icon: Bsc,
    iconBg: "#161329",
    date: "May 2017",
    points: [
      "A foundational program that focuses on core concepts of computer systems, software development, networking, and database management.",
      "The course equips students with practical and theoretical knowledge in programming, web development, system administration.",
      " IT infrastructure. Emphasis is placed on problem-solving, logical thinking, and hands-on experience with current technologies, preparing graduates for careers in the dynamic field of information technology.",
    ],
  },
  
];

export const projects = [
  {
    name: "Node.js ",
    description:
      "Node.js Application with MongoDB: A DevOps-Centric Deployment on Amazon EKS",
     tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "GitHub", color: "pink-text-gradient" },
      { name: "Jenkins", color: "yellow-text-gradient" },
    ],
    image: A,
    source_code_link: "https://github.com/gokulsm1197/Devops-pipeline-Projects-01",
  },
  {
    name: "React.js ",
    description:
      "React.js Application with AWS DynamoDB: Automated DevOps Pipeline on EKS with Terraform and ArgoCD",
   tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: B,
    source_code_link: "https://github.com/gokulsm1197/Devops-pipeline-Projects-02",
  },
  {
    name: "Git Actions",
    description:
      "Local Development and CI/CD Pipeline with GitHub, Git Actions, Helm, ArgoCD, and NGINX Ingress",
    tags: [
      { name: "Jump Server (Bastion Host)", color: "blue-text-gradient" },
      { name: "NGINX Ingress", color: "green-text-gradient" },
      { name: "Amazon Elastic Kubernetes Service", color: "pink-text-gradient" },
    ],
    image: D,
    source_code_link:
      "https://github.com/gokulsm1197/Devops-pipeline-Projects-03",
  },
  {
    name: "Kubernetes",
    description:
      "Go-lang Application with Kubernetes-kubeadm Infrastructure Managed by Terraform and CI/CD with Jenkins",
    tags: [
      { name: "VPC, Subnets, Security Groups", color: "blue-text-gradient" },
    ],
    image: C,
    source_code_link: "https://github.com/gokulsm1197/Devops-pipeline-Projects-04",
  },
  {
    name: "Vagrant Deployment",
    description:
      "Kubernetes Cluster Setup on Local Computer using Vagrant, Git Bash, and kubeadm with Application Deployment",
    tags: [
      { name: " Vagrant", color: "blue-text-gradient" },
      { name: "React.js", color: "green-text-gradient" },
      { name: "DockerHub", color: "pink-text-gradient" },
    ],
    image: E,
    source_code_link: "https://github.com/gokulsm1197/Devops-vagrant-kubeadm-Projects-05",
  },
  {
    name: "mTLS for Enhanced Security",
    description:
      "Kubernetes-based Book Shop Application Deployment with Istio, Canary Deployment, and mTLS for Enhanced Security and Observability using Kiali",
    tags: [
      { name: "mTLS (Mutual TLS)", color: "blue-text-gradient" },
      { name: "Istio, Canary Deployment", color: "green-text-gradient" },
      { name: "Kubernetes", color: "pink-text-gradient" },
    ],

    image: F,
    source_code_link: "https://github.com/gokulsm1197/Devops-Istio-Projects-06",
  },

  {
    name: "Microservices",
    description:
      "12 Microservices Application Deployment on Docker Desktop Kubernetes with CI/CD using GitHub, Jenkins, DockerHub, and Helm",
    tags: [
      { name: " Docker Desktop Kubernetes", color: "blue-text-gradient" },
      { name: "Helm", color: "green-text-gradient" },
      { name: "Jenkins", color: "pink-text-gradient" },
    ],

    image: G,
    source_code_link: "https://github.com/gokulsm1197/Devops-E-Robo-Projects-07",
  },

  {
    name: "simple",
    description:
      "Application Deployment react application port 80",
    tags: [
      { name: "smtp configuration for gmail", color: "blue-text-gradient" },
      { name: "AWS", color: "green-text-gradient" },
      { name: "Docker Hub", color: "pink-text-gradient" },
    ],

    image: H,
    source_code_link: "https://github.com/gokulsm1197/Devops-react.js-Projects-08",
  },

];
