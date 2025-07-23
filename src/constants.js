// Skills Section Logo's
import htmlLogo from '../public/assets/html.png';
import cssLogo from '../public/assets/css.png';
import javascriptLogo from '../public/assets/javascript.png';
import reactjsLogo from '../public/assets/reactjs.png';
import tailwindcssLogo from '../public/assets/tailwindcss.png';
import materialuiLogo from '../public/assets/materialui.png';
import bootstrapLogo from '../public/assets/bootstrap.png';
import nodejsLogo from '../public/assets/nodejs.png';
import mysqlLogo from '../public/assets/mysql.png';
import photoshopLogo from '../public/assets/photoshop.png';
import illustratorLogo from '../public/assets/illustrator.png';
import gitLogo from '../public/assets/git.png';
import githubLogo from '../public/assets/github.png';
import vscodeLogo from '../public/assets/vscode.png';
import figmaLogo from '../public/assets/figma.png';

// Experience Section Logo's
import webileLogo from '../public/assets/webile.png';

// Education Section Logo's
import msuLogo from '../public/assets/msu.png';
import silverLogo from '../public/assets/silveoak.jpg';
import ashadeepLogo from '../public/assets/ashadeep.jpg';
import balanandLogo from '../public/assets/balanand.png';

// Project Section Logo's
import project2img from '../public/assets/project-2.png';
import project3img from '../public/assets/project-3.png'


export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
            { name: 'Material UI', logo: materialuiLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node JS', logo: nodejsLogo },
            { name: 'MySQL', logo: mysqlLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'JavaScript', logo: javascriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Figma', logo: figmaLogo },
            { name: 'Photoshop', logo: photoshopLogo },
            { name: 'Illustrator', logo: illustratorLogo },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: webileLogo,
        role: "Php Developer",
        company: "Webile Technology PVT. LTD.",
        date: "Jan '25 - March '25",
        time: "3 Month's",
        desc: "Developed dynamic and scalable web applications using the Php and MySQL, handling frontend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Node JS",
            "Tailwind CSS",
        ],
    },
];

export const education = [
    {
        id: 0,
        img: silverLogo,
        school: "Silver Oak University, Ahmedabad",
        date: "Aug 2023 - May 2025",
        grade: "7.53 CGPA",
        desc: "I have completed my Master's degree (M.Sc.(IT)) in Science Information Technology from Silver Oak University, Ahmedabad. During my time at SOU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various Seminar and technical events, which enhanced my skills and knowledge. My experience at SOU has been instrumental in shaping my technical abilities and professional growth.",
        degree: "Master of Science in Information Technology - M.Sc.IT",
    },
    {
        id: 1,
        img: msuLogo,
        school: "Maharaja Sayajirao University, Vadodara",
        date: "Aug 2019 - May 2022",
        grade: "5.4 CGPA",
        desc: "I completed my Bachelor's degree in Commerce (B.Com.) from Maharaja Sayajirao University, Vadodara. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of filing accounts. From exploring Bank Visit and Industry visit i understand the process of texation and accounting with GST.",
        degree: "Bachelor of Commerce - B.Com (Accounting & Texation)",
    },
    {
        id: 2,
        img: balanandLogo,
        school: "Balanand Vidhyalaya, Surat",
        date: "Apr 2018 - March 2019",
        grade: "62.5%",
        desc: "I completed my class 12 education from balanand Vidhyalaya, Surat, under the GHSEB board, where I studied Statastic, Account, and Business Analytics.",
        degree: "GHSEB(XII) - Commerce with Statastic and Accounting",
    },
    {
        id: 3,
        img: ashadeepLogo,
        school: "Ashadeep Vidhyalaya-2, Surat",
        date: "Apr 2016 - March 2017",
        grade: "65.5%",
        desc: "I completed my class 10 education from Ashadeep Vidhyalaya-2, Surat, under the GHSEB board, where I studied Commerce with Mathematics.",
        degree: "GHSEB(X) with Commerce",
    },
];

export const projects = [
    {
        id: 0,
        title: "Agro-India",
        description:
            "AgroIndia can connect farmer and buyer direct and comunicate each other or it is a admin site fully controlable.",
        // image: ,
        tags: ["HTML", "TailwindCss", "PHP", "Laravel", "API"],
        github: "https://github.com/Deep-chovatiya/only-stor",
        webapp: "",
    },
    {
        id: 1,
        title: "React Login Page",
        description:
            "React Login page used of react component and use effect and use state.",
        image: project3img,
        tags: ["HTML", "CSS", "TypeScript"],
        github: "https://github.com/KOTADIYABHARGAV/react-login-page.git",
        webapp: "",
    },
    {
        id: 2,
        title: "Sign-Up/In WebApp",
        description:
            "These Web app have only HTML and CSS or in these use css animation to make UI different.",
        image: project2img,
        tags: ["HTML", "CSS"],
        github: "https://github.com/KOTADIYABHARGAV/Sign_up-sign_in.git",
        webapp: "",
    },
];  