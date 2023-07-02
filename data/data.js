import { v4 as uuidv4 } from "uuid";
import { BiCodeAlt } from "react-icons/bi";
import { BsStars, BsBuilding } from "react-icons/bs";
import { MdOutlineVerifiedUser } from "react-icons/md";

const bookstore = <img src="../public/bookstore.png" />;
export const projects = [
  {
    id: uuidv4(),
    title: "MediBook",
    description:
      "A web app that allows users to book and track appointments with doctors.",
    image:
      "https://user-images.githubusercontent.com/55185309/188284939-b3f53fae-93bd-426a-a3e7-2d12eb84b923.png",
    url: "https://medibook-ui.vercel.app/",
    technologies: [
      {
        name: "Ruby on Rails",
        image: "ror",
      },
      {
        name: "React",
        image: "react",
      },
      {
        name: "Redux",
        image: "redux",
      },
      {
        name: "Tailwind CSS",
        image: "tailwind",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "APT Shipping",
    description:
      "A web app that allows users to book, make payment and track their shipments",
    image:
      "https://raw.githubusercontent.com/kelomo2502/git_assets/main/aptshipping.png",
    url: "#",
    technologies: [
      {
        name: "NodeJs",
        image: "ror",
      },
      {
        name: "React",
        image: "react",
      },
      {
        name: "Redux",
        image: "redux",
      },
      {
        name: "Tailwind CSS",
        image: "tailwind",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "MCPD 2022",
    description:
      "A Fashion Summit website that provides information about the event and speakers.",
    image:
      "https://user-images.githubusercontent.com/55185309/181367968-0a773a01-357f-4949-9c94-281b67481f3b.png",
    url: "https://kelomo2502.github.io/Capstone-Project1/",
    technologies: [
      {
        name: "JavaScript",
        image: "javascript",
      },
      {
        name: "CSS",
        image: "css",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Budgit",
    description: "A simple web application for tracking your budget.",
    image:
      "https://user-images.githubusercontent.com/55185309/184540699-4353c054-c3e5-49e9-9b55-ece9ea3f6721.png",
    url: "https://my-budgit-app.herokuapp.com/",
    technologies: [
      {
        name: "Ruby on Rails",
        image: "ror",
      },
      {
        name: "Tailwind CSS",
        image: "tailwind",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Book Store",
    description:
      "A simple web application to add your favorite books, read and monitor reading progress.",
    image:
      "https://raw.githubusercontent.com/kelomo2502/git_assets/acbebe19bbf99b6b3a99e744b9b4bc0fac8a7972/bookstore.png",
    url: "https://zippy-cocada-c293ba.netlify.app/",
    technologies: [
      {
        name: "RectJs",
        image: "React",
      },
      {
        name: "Redux",
        image: "redux",
      },
      {
        name: "Tailwind CSS",
        image: "tailwind",
      },
      {
        name: "REST API",
        image: "rest-api",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Space Traveler",
    description:
      "This is an SPA with 3 routes and built with reactJs and redux as its state management tool. The site works by making API call for fetching the rockets and mission data. The site allows users to join any missions of their choice, reserve rockets, cancel rocket reservations.",
    image:
      "https://raw.githubusercontent.com/kelomo2502/git_assets/fc9f21bf92d7b4062bcd8dded5f0764981b61ccd/space_traveler.png",
    url: "https://development--musical-malasada-bc5c63.netlify.app/",
    technologies: [
      {
        name: "RectJs",
        image: "React",
      },
      {
        name: "Redux",
        image: "redux",
      },
      {
        name: "Tailwind CSS",
        image: "tailwind",
      },
      {
        name: "REST API",
        image: "rest-api",
      },
    ],
  },
];

export const techSkills = [
  {
    id: uuidv4(),
    skill: "JavaScript (ES6)",
  },
  {
    id: uuidv4(),
    skill: "NodJs/Express",
  },
  {
    id: uuidv4(),
    skill: "Ruby on Rails",
  },
  {
    id: uuidv4(),
    skill: "React.js/Next.js",
  },
  {
    id: uuidv4(),
    skill: "Redux",
  },
  {
    id: uuidv4(),
    skill: "Tailwind CSS",
  },
  {
    id: uuidv4(),
    skill: "Bootstrap 5",
  },
  {
    id: uuidv4(),
    skill: "Jest/RSpec",
  },
  {
    id: uuidv4(),
    skill: "PostgreSQL",
  },
  {
    id: uuidv4(),
    skill: "Sequelize",
  },

  {
    id: uuidv4(),
    skill: "MongoDB",
  },
  {
    id: uuidv4(),
    skill: "Agile Methodologies(SCRUM)",
  },
  {
    id: uuidv4(),
    skill: "AzureDevOps",
  },
  {
    id: uuidv4(),
    skill: "Git/GitHub",
  },
  {
    id: uuidv4(),
    skill: "Mobile/Responsive Design",
  },
];
