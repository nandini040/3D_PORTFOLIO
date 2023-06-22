import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    Rohit,
    Vikas,
    Anuj,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "PLM Develover",
      icon: backend,
    },
    {
      title:"React Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "IWMP(Internwell mentorship and upskilling program) Dummy startup competition",
      company_name: "Internwell",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "April 2021 - September 2021",
      points: [
        "The idea was about making an website Kissan Mitra it's a onestop solution that would provide its users with a platform to buy and sell organic produce.",
        "We aim to revolunize and modernize the agriculture industry by infusing it with AI and ML.",
        "We Stood 3rd out of 14 teams.",
      ],
    },
    {
      title: "TechWeek Hackathon",
      company_name: "ST Microelectronics",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "March 2023",
      points: [
        "Worked on a Full Stack web Development project named Asset Management. My Contribution in this project was mostly on the frontend part.",
        "At the end of the Hackathon we were able to deliver a full fledged working project which was based on real life business Problems.",
        "The stacks that we used to implement this project was Angular for frontend and Java Spring Boot for backend.",
      ],
    },
    {
      title: "Semiconductor Industry",
      company_name: "ST Microelectronics",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "September 2022 - Present",
      points: [
        "This project is based on chip manufacturing industry where client is using PLM 3DEXPERIENCE for the fast and efficient manufacturing of chips.",
        "This is a Migration project where the requirement was to migrate the legacy system data to current 3DEXPERIENCE version 2020x, now 2022x.",
        "Working on agile methodology, along with 6-member team Responsible for ETL Load process where I am writing API calls to create, update, connect data into the Dassault System PLM which is coming from legacy system.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Nandini is a quick learner and technically very competent. She has shown great character, composure and patience towards learning during her industrial tranining with me. She will prove to be a great asset to any organization she will be associated with.",
      name: "Anuj Jain",
      designation: "Application Domain Manager",
      company: "ST Microelectronics",
      image: Anuj,
    },
    {
      testimonial:
        "Nandini demonstrated exceptional technical skills and a keen ability to learn quickly. Nandini's ability to work well under pressure and her excellent problem-solving skills make her a valuable asset to any organization. I highly recommend Nandini for any role she may be considered for in the future.",
      name: "Rohit Sikka",
      designation: "Technical Leader",
      company: "ST Microelectronics",
      image: Rohit,
    },
    {
      testimonial:
        "I had the pleasure of working with Nandini on a web development project and I was thoroughly impressed with her skills and dedication to the project. Her attention to detail and ability to troubleshoot complex issues were instrumental in the success of our project. I highly recommend Nandini for web development role.",
      name: "Vikas Saini",
      designation: "Graphic Designer",
      company: "self-employment",
      image: Vikas,
    },
  ];
  
  const projects = [
    {
      name: "Home Loan Calculator",
      description:
        "Home Loan Calculator is web page designed in order to help you calculate EMI/Month on your home loan.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "Vanilla JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://nandini040.github.io/HOME_LOAN_CALCULATOR/",
    },
    {
      name: "Expense Tracker",
      description:
        "It helps you track your day to day expenses so that you can save some money for your future.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "Vanilla JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://nandini040.github.io/Expense_Tracker/",
    },
    {
      name: "Typing Accuracy",
      description:
        "Typing Accuracy is an web page which is made in order to check your typing speed and accuracy.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "Vanilla JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://nandini040.github.io/Typing_Accuracy/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };