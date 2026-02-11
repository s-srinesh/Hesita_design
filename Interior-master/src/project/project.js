// import "./project.css";
// import project1 from "../images/project/project1.jpg";
// import project2 from "../images/project/project2.jpg";
// import project3 from "../images/project/project3.jpg";
// import project4 from "../images/project/project4.jpg";
// import project5 from "../images/project/project5.jpg";
// import project6 from "../images/project/project6.jpg";
// import project7 from "../images/project/project7.jpg";
// import project8 from "../images/project/project8.jpg";
// import { Link } from "react-router-dom";
// import { IoIosArrowForward } from "react-icons/io";
// import { ProjectCard } from "./projectCard";
// import { useEffect, useState } from "react";
// import projects from "./projects.json";

// export function Project() {
//   const [data, setData] = useState('');
//   const [currentPage, setcurrentPage] = useState(1);
//   const [postPerPage, setpostPerPage] = useState(8);

//   const  projectsData = projects;

//  const lastPostIndex = currentPage * postPerPage;
//   const firstPostIndex = lastPostIndex - postPerPage;
//   const currentPosts = data.slice(firstPostIndex, lastPostIndex);

//   const handleChange = (e) => {
//     const pClassList = e.target.parentElement;
//     if (e.target.classList.contains("notakenCategory")) {
//       for (let i = 0; i < pClassList.childNodes.length; i++) {
//         if (pClassList.childNodes[i].className === "p-ctg takenCategory") {
//           pClassList.childNodes[i].className = "p-ctg notakenCategory";
//         }
//       }
//       e.target.classList.remove("notakenCategory");
//       e.target.classList.add("takenCategory");
//     } else if (e.target.classList.contains("taken")) {
//       for (let i = 0; i < pClassList.childNodes.length; i++) {
//         if (pClassList.childNodes[i].className === "p-ctg takenCategory") {
//           pClassList.childNodes[i].className = "p-ctg notakenCategory";
//         }
//       }
//     }
//   };
//   return (
//     <div className="project">
//       <div className="project-header">
//         <h1>
//           Our Projects<p>Home / Project</p>
//         </h1>
//       </div>
//       <div className="project-categories">
//         <ul>
//           <ol className="p-ctg notakenCategory" onClick={handleChange}>
//             Bedroom
//           </ol>
//           <ol className="p-ctg notakenCategory" onClick={handleChange}>
//             Bathroom
//           </ol>
//           <ol className="p-ctg notakenCategory" onClick={handleChange}>
//             Kitchen
//           </ol>
//           <ol className="p-ctg notakenCategory" onClick={handleChange}>
//             Living Area
//           </ol>
//         </ul>
//       </div>
//       <div className="our-projects">
//         {projectsData !== undefined && !!projectsData.projects.length 
//         && projectsData.projects.map((pro, ind)=>{
//           return (
//           <ProjectCard props = {pro} key={ind}/>
//           )
//         })}
//       </div>
//     </div>
//   );
// }

import "./project.css";
import project1 from "../images/project/project1.jpg";
import project2 from "../images/project/project2.jpg";
import project3 from "../images/project/project3.jpg";
import project4 from "../images/project/project4.jpg";
import project5 from "../images/project/project5.jpg";
import project6 from "../images/project/project6.jpg";
import project7 from "../images/project/project7.jpg";
import project8 from "../images/project/project8.jpg";
import { ProjectCard } from "./projectCard";
import { useState } from "react";
import projects from "./projects.json";

export function Project() {
  const [category, setCategory] = useState("All");

  const projectImages = {
    project1: project1,
    project2: project2,
    project3: project3,
    project4: project4,
    project5: project5,
    project6: project6,
    project7: project7,
    project8: project8,
  };

  const handleChange = (e, selectedCategory) => {
    const elements = document.querySelectorAll(".p-ctg");
    elements.forEach((el) => el.classList.remove("takenCategory"));
    e.target.classList.add("takenCategory");
    setCategory(selectedCategory);
  };

  const filteredProjects =
    category === "All"
      ? projects.projects
      : projects.projects.filter((p) => p.category === category);

  return (
    <div className="project">
      <div className="project-header">
        <h1>
          Our Projects<p>Home / Project</p>
        </h1>
      </div>
      <div className="project-categories">
        <ul>
          {["All", "Bedroom", "Bathroom", "Kitchen", "Living Area"].map((cat, index) => (
            <ol
              key={index}
              className={`p-ctg notakenCategory ${cat === "All" ? "takenCategory" : ""}`}
              onClick={(e) => handleChange(e, cat)}
            >
              {cat}
            </ol>
          ))}
        </ul>
      </div>
      <div className="our-projects">
        {filteredProjects.map((pro, ind) => (
          <ProjectCard
            props={{ ...pro, image: projectImages[pro.image] }}
            key={ind}
          />
        ))}
      </div>
    </div>
  );
}
