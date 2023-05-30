import {
    py,
    r,
    softEng,
    eng,
    arduino,
    cisco,
    reactjs,
    box,
    proteus,
    mysql,
    cad,
    tab,
    kali,
    artMusic,
    rsearch,
    kag,
    github,
    threejs,
    datasec,
    googlecert,
    ibmcert,
    pentes,
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
  
  const technologies = [
    {
      name: "py",
      icon: py,
    },
    {
      name: "r",
      icon: r,
    },
    {
      name: "arduino",
      icon: arduino,
    },
    {
      name: "cisco",
      icon: cisco,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "box",
      icon: box,
    },
    {
      name: "Proteus",
      icon: proteus,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "cad",
      icon: cad,
    },
    {
      name: "tab",
      icon: tab,
    },
    {
      name: "kali",
      icon: kali,
    },
  ];
  
  const experiences = [
    {
      title: "Visual Artist and Musician",
      company_name: "Rizal Elementary School • Maryknoll College of Panabo • University of Mindanao",
      icon: artMusic,
      iconBg: "#ADD8E6",
      date: "Jun 2009 - Aug 2018",
      points: [
        "Majored in Guitar and Bajo de Arco. Represented Class in Art Contest.",
        "Scholarship Recipient, Music Industry.",
        "4th place, Rondalla Competition, 2011 National Music Competitions for Young Artists, held at the Cultural Center of the Philippines.",
        "Champion, Musikahan sa Tagum, Rondal-Awit Competition.",
        "Contributed to a newly-formed band as a rhythm guitarist and collaborated with fellow band members to create and perform various genres of music, including hard metal and jazz.",
        "Participated in the Battle of the Bands competition and achieved third place in the first year, later became grand champion in subsequent years.",
        "Performed at school events including Christmas day and praise and worship events.",
        "Created an exceptional abstract oil painting depicting a raining night light scene using pastels, recognized as one of the top paintings in school.",
      ],
    },
    {
      title: "Software Engineer • ICT Specialist",
      company_name: "Maryknoll College of Panabo • Davao International Container Terminal • University of Mindanao",
      icon: softEng,
      iconBg: "#E6DEDD",
      date: "Jun 2016 - Aug 2022",
      points: [
        "Provided technical guidance and assistance to customers, helping them navigate software, hardware, or network problems.",
        "Managed and prioritized incidents, ensuring timely resolution and effective communication with customers.",
        "Developed a comprehensive clinic efficiency software using MySQL and VB.NET, streamlining operations and enhancing workflow management.",
        "Passed NC2 Hardware Servicing Certification.",
        "Developed a web scraping bot to fetch earthquake data for our accident sensory response website, improving the accuracy and timeliness of information provided.",
      ],
    },
    {
      title: "Electronics and Communications Engineer",
      company_name: "University of Mindanao • Civil Aviation Authority of the Philippines",
      icon: eng,
      iconBg: "#ADD8E6",
      date: "Jun 2018 - Dec 2022",
      points: [
        "Analyzed data and generated reports on equipment performance and issues.",
        "Provided technical support to pilots and air traffic controllers regarding communication, navigation, and surveillance systems.",
        "Utilized AutoCAD to design 3D electronic models, showcasing expertise in electronic product design and visualization.",
        "Designed communication systems and completed projects using microcontrollers (Arduino, Raspberry Pi) with proficiency in Proteus for hardware simulation.",
      ],
    },
    {
      title: "Cybersecurity and Data Analyst",
      company_name: "DataSec Freelance Services",
      icon: datasec,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - May 2023",
      points: [
        "Published a case study on the Comelec data breach, which was recognized as the most read article of the month.",
        "Designed and implemented a website with URL checking functionality to identify malicious links, including a reporting feature for users.",
        "Published a dataset on Kaggle and conducted a comprehensive data analysis case study on the World's Billionaires.",
        "Created visually captivating and impressive visuals using Tableau.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial: 
        "Successfully completed the 8-course Google Data Analytics Professional Certificate program.",
      company: "Google",
      image: googlecert,
    },
    {
      testimonial:
        "The credential earner is ready for a career in cybersecurity with demonstrated ability to solve real-world problems.",
      company: "IBM",
      image: ibmcert,
    },
    {
      testimonial:
        "This badge earner can describe penetration testing tools and the benefits to an organization, and can articulate the power of scripting.",
      company: "IBM",
      image: pentes,
    },
  ];
  
  const projects = [
    {
      name: "Publications",
      description:
        "These publications cover a wide range of topics, including billionaire success, data breach incidents, IoT applications, and web-based systems, offering valuable insights and practical solutions in their respective areas.",
      tags: [
        {
          name: "ResearchGate",
          color: "green-text-gradient",
        },
      ],
      image: rsearch,
      source_code_link: "https://www.researchgate.net/profile/Earl-John-Masaga/research",
    },
    {
      name: "Leading Industries Dataset",
      description:
        "The Leading Industries Dataset tracks industry evolution, highlighting Japan's earlier dominance and the United States' subsequent takeover.",
        tags: [
          {
            name: "Kaggle",
            color: "blue-text-gradient",
          },
        ],
      image: kag,
      source_code_link: "https://www.kaggle.com/datasets/earljohnmasaga/leading-industries-dataset",
    },
    {
      name: "Github Repositories",
      description:
        "These repositories cover a diverse range of topics, including 3D design, web security, CRUD application development and electrical engineering. They offer valuable insights, methodologies, and practical applications for researchers, professionals, and enthusiasts in their respective fields.",
      tags: [
        {
          name: "github",
          color: "pink-text-gradient",
        },
      ],
      image: github,
      source_code_link: "https://github.com/HorikitaSuzuneTsundere?tab=repositories",
    },
  ];
  
  export { technologies, experiences, testimonials, projects };