/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rakesh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Rakesh Hiray Portfolio",
    type: "website",
    url: "https://Rakesh-hiray.github.io/my-portfolio/",
  },
};

//Home Page
const greeting = {
  title: "Rakesh Hiray",
  logo_name: "Rakesh Hiray",
  nickname: "Rakeshu",
  subTitle: [
    "Web Developer",
    "Crafting innovative solutions through code",
    "I am passionate about turning ideas into reality.",
    "Code Crafter",
    "Tech Enthusiast",
    "Problem Solver",
    "Innovation Architect",
    "Software Artisan",
    "Code Alchemist",
    "Tech Explorer",
  ],
   resumeLink:
   "https://drive.google.com/file/d/14tdVicaVnR-wVDU6jEaUECpoScmeJkEB/view?usp=sharing",
  // portfolio_repository: "https://github.com/Rakesh-hiray/my-portfolio",
  githubProfile: "https://github.com/RakeshHiray41",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/RakeshHiray41",
  // linkedin: "https://www.linkedin.com/in/Rakesh-hathidara-88710b138/",
  // gmail: "Rakeshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/Rakeshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/Rakesh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/RakeshHiray41",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rakesh-hiray-2055382aa/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:rakeshhiray2002@gamil.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/Rakeshhiray_7",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/rakesh_hiray7/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Desktop App Development",
      fileName: "DeskstopApp",
      skills: [
        "⚡ Focused on creating efficient and intuitive desktop applications that enhance user productivity and streamline tasks.",
        "⚡ Proficient in developing robust desktop solutions using Java, Swing, and other essential tools, tailored to meet specific user needs.",
        "⚡ Experienced in integrating powerful databases like PostgreSQL to ensure secure and efficient data management within desktop applications.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Dedicated to building responsive and user-friendly websites that deliver seamless digital experiences",
        "⚡ Skilled in HTML, CSS, JavaScript, and backend technologies, ensuring robust and dynamic web applications.",
        "⚡ Committed to staying updated with the latest web development trends and best practices to create cutting-edge solutions.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "devicon-plain:django",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },

    {
      title: "Databases",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple Databases platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "MySql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/rakesh-hiray/",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/profile/Rakeshhiray541",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/Rakeshhiray7",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/Rakesh-hiray",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Nowrosjee Wadia College",
      subtitle: "Master's in Computer Science",
      logo_path: "wadialogo.png",
      alt_name: "wadia",
      duration: "2024 - 2026",
      descriptions: [
        "⚡ Advanced Studies in Computer Science: Currently pursuing a Master's in Computer Science at Wadia College, focusing on deepening my expertise in cutting-edge technologies and research.",
        "⚡ Building on Strong Foundations: Leveraging my robust foundation from a B.Sc. in Computer Science to excel in advanced topics and specialized areas of interest.",
        "⚡ Research and Innovation Focused: Engaged in research-oriented projects and coursework, aiming to contribute innovative solutions to the field of computer science.",
      ],
      website_link: "https://nowrosjeewadia.mespune.org/",
    },
    {
      title: "Savitribai Phule Pune University",
      subtitle: "Bachelors in Computer Science",
      logo_path: "sppu_logo.png",
      alt_name: "Pune University",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ Top Academic Performer: Graduated with a CGPA of 6.75/10, showcasing consistent academic excellence throughout the program.",
        "⚡ Competition Winner: Secured the top spot in the college's Avishkar competition by presenting an innovative SnapAttendance project.",
        "⚡ Prolific Problem Solver: Solved over 650 coding problems across various platforms, demonstrating strong problem-solving skills and a deep understanding of computer science concepts.",
      ],
      website_link: "http://www.unipune.ac.in/default.htm",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Full Stack Web Development",
    //   subtitle: "- Saurabh Shukla",
    //   logo_path: "mysirg_logo.png",
    //   certificate_link:
    //     "https://premium.mysirg.com/learn/certificate/7401054-139195",
    //   alt_name: "MySrig",
    //   color_code: "#ffffff",
    // },
    // {
    //   title: "TCS iON Career Edge-Young Professional",
    //   subtitle: "- TCS iON",
    //   logo_path: "tcsion_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/15qYGBa4KkhYed8CFlrmePeoucifUDth4/view",
    //   alt_name: "TCS iON",
    //   color_code: "#ffffff",
    // },
    // {
    //   title: "Web Development Internship",
    //   subtitle: "- NovaNectar Services Pvt. Ltd.",
    //   logo_path: "novanector.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1t0TkjCwMpfCNcgoZAPqbFVYsoR1FFroe/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "black",
    //  },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship",
  // description:
  //   "I have worked with many evolving startups as Desktop Application Developer.",
  //header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          // title: "Desktop Application Developer",
          // company: "Patil Infotech.",
          // company_url: "https://patilinfotech.wordpress.com/",
          // logo_path: "patil_infotech.png",
          // duration: "Sept 2023 - Feb 2024",
          // location: "Malegaon,Nashik,India",
          // description:
          //   "Worked on the Hospital Management desktop application.In which generating the various reports like prescription,medical certificate",
          // color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        // {
        //   title: "Web development Intern",
        //   company: "NovaNectar Services Pvt. Ltd",
        //   company_url: "https://www.novanectar.co.in/",
        //   logo_path: "novanector.png",
        //   duration: "May 2024 - Jun 2024",
        //   location: "Remote",
        //   description:
        //     "Wroked on various web development project",
        //   color: "#000000",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create web applications and deploy.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Research",
  description: "Some of my Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "Snap Attendance",
    //   name: "Snap Attendance",
    //   createdAt: "2023-10-23",
    //   description: "A secure, blockchain-backed solution that combines image recognition and smart contracts to streamline attendance tracking. Enhance accuracy and transparency in various settings, from classrooms to corporate environments",
    //   url: "https://github.com/Rakesh-hiray/Snap-Attendance",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "rakesh_pic.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Django,React,Python,Java,Web Development,Desktop Application Development and Opensource Development.",
  },
  /* blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.Rakeshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },*/
  addressSection: {
    title: "Address",
    subtitle: "Near Anand Nagar,Kothrud,Pune,Maharashtra-411038",
    locality: "Maharashtra",
    country: "India",
    region: "asia",
    postalCode: "423203",
    streetAddress: "pushpanagrai",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/sX3yXjx4XXVBwDFw8",
  },
  phoneSection: {
    title: "Call Me.",
    subtitle: "+91 9529822526",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
