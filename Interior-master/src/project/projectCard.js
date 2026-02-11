// import "./projectCard.css";
// import project1 from "../images/project/project1.jpg";
// import project2 from "../images/project/project2.jpg";
// import { Link } from "react-router-dom";
// import { IoIosArrowForward } from "react-icons/io";

// export function ProjectCard(props) {
//     return(
//         <div className="op-project">
//           <div className="op-pro-img">
//             <img src={project1} alt="project"></img>
//           </div>
//           <div className="op-pro-img">
//             <img src={project2} alt="project"></img>
//           </div>
//           <div className="op-pro-detail">
//             <div className="op-pro-info">
//               <p className="op-prj-title">{props.props.project_name}</p>
//               {/* {props.data.projects.projectName} */}
//               <p className="op-prj-path">Decor / Architecture</p>
//             </div>
//             <div className="op-pro-btn">
//               <Link to={`/project-details`}>
//                 <button>
//                   <IoIosArrowForward />
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//     );
// }

import "./projectCard.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export function ProjectCard(props) {
  return (
    <div className="op-project">
      <div className="op-pro-img">
        <img src={props.props.image} alt="project" />
      </div>
      <div className="op-pro-detail">
        <div className="op-pro-info">
          <p className="op-prj-title">{props.props.project_name}</p>
          <p className="op-prj-path">Decor / Architecture</p>
        </div>
        <div className="op-pro-btn">
          <Link to={`/project-details`}>
            <button>
              <IoIosArrowForward />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
