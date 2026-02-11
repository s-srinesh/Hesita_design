// import "./blog.css";
// import latestNews from "../images/articles/blogLatest.jpg";
// import article1 from "../images/articles/article1.jpg";
// import article2 from "../images/articles/article2.jpg";
// import article3 from "../images/articles/article3.jpg";
// import article4 from "../images/articles/article4.jpg";
// import { IoIosArrowForward } from "react-icons/io";
// import { Link } from "react-router-dom";

// export function Blog() {
//   const handleChange = (e) => {
//     const pClassList = e.target.parentElement;
//     if (e.target.classList.contains("notaken")) {
//       for (let i = 0; i < pClassList.childNodes.length; i++) {
//         if (pClassList.childNodes[i].className === "blog-art taken") {
//           pClassList.childNodes[i].className = "blog-art notaken";
//         }
//       }
//       e.target.classList.remove("notaken");
//       e.target.classList.add("taken");
//     } else if (e.target.classList.contains("taken")) {
//       for (let i = 0; i < pClassList.childNodes.length; i++) {
//         if (pClassList.childNodes[i].className === "blog-art taken") {
//           pClassList.childNodes[i].className = "blog-art notaken";
//         }
//       }
//     }
//   };
//   return (
//     <div className="blog">
//       <div className="blog-header">
//         <h1>
//           Articles & News<p>Home / Blog</p>
//         </h1>
//       </div>

//       <div className="latestNews">
//         <h1>Latest Post</h1>
//         <div className="lNews">
//           <div className="ln-img">
//             <img src={latestNews} alt="news"></img>
//           </div>
//           <div className="ln-text">
//             <div className="ln-subtext">
//               <h1>Low Cost Latest Invented Interior Designing Ideas</h1>
//               <p>
//                 Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
//                 turpis dignissim maximus.posuere in.
//                 <br />
//                 <br />
//                 Contrary to popular belief. Lorem Ipsum is not simply random
//                 text. It has roots in a piece of classica.
//               </p>
//             </div>
//             <div className="ln-detail">
//               <p className="ac-date">3 March 2023</p>
//               <Link to={`/blog-details`}>
//                 <button>
//                   <IoIosArrowForward />
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="blogArticles">
//         <h1>Articles & News</h1>
//         <div className="blog-art-list">
//           <div className="blog-art notaken" onClick={handleChange}>
//             <div className="blog-art-header">
//               <img src={article1} alt="article"></img>
//             </div>
//             <div className="blog-art-content">
//               <p>Let’s Get Solution For Building Construction Work</p>
//               <div className="ba-detail">
//                 <p className="ba-date">3 March 2023</p>
//                 <Link to={`/blog-details`}>
//                   <button>
//                     <IoIosArrowForward />
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="blog-art notaken" onClick={handleChange}>
//             <div className="blog-art-header">
//               <img src={article1} alt="article"></img>
//             </div>
//             <div className="blog-art-content">
//               <p>Let’s Get Solution For Building Construction Work</p>
//               <div className="ba-detail">
//                 <p className="ba-date">3 March 2023</p>
//                 <Link to={`/blog-details`}>
//                   <button>
//                     <IoIosArrowForward />
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="blog-art notaken" onClick={handleChange}>
//             <div className="blog-art-header">
//               <img src={article1} alt="article"></img>
//             </div>
//             <div className="blog-art-content">
//               <p>Let’s Get Solution For Building Construction Work</p>
//               <div className="ba-detail">
//                 <p className="ba-date">3 March 2023</p>
//                 <Link to={`/blog-details`}>
//                   <button>
//                     <IoIosArrowForward />
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="blog-art notaken" onClick={handleChange}>
//             <div className="blog-art-header">
//               <img src={article1} alt="article"></img>
//             </div>
//             <div className="blog-art-content">
//               <p>Let’s Get Solution For Building Construction Work</p>
//               <div className="ba-detail">
//                 <p className="ba-date">3 March 2023</p>
//                 <Link to={`/blog-details`}>
//                   <button>
//                     <IoIosArrowForward />
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="blog-art notaken" onClick={handleChange}>
//             <div className="blog-art-header">
//               <img src={article1} alt="article"></img>
//             </div>
//             <div className="blog-art-content">
//               <p>Let’s Get Solution For Building Construction Work</p>
//               <div className="ba-detail">
//                 <p className="ba-date">3 March 2023</p>
//                 <Link to={`/blog-details`}>
//                   <button>
//                     <IoIosArrowForward />
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="blog-art notaken" onClick={handleChange}>
//             <div className="blog-art-header">
//               <img src={article1} alt="article"></img>
//             </div>
//             <div className="blog-art-content">
//               <p>Let’s Get Solution For Building Construction Work</p>
//               <div className="ba-detail">
//                 <p className="ba-date">3 March 2023</p>
//                 <Link to={`/blog-details`}>
//                   <button>
//                     <IoIosArrowForward />
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import "./blog.css";
import latestNews from "../images/articles/blogLatest.jpg";
import article1 from "../images/articles/article1.jpg";
import article2 from "../images/articles/article2.jpg";
import article3 from "../images/articles/article3.jpg";
import article4 from "../images/articles/article4.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export function Blog() {
  const handleChange = (e) => {
    const pClassList = e.target.parentElement;
    if (e.target.classList.contains("notaken")) {
      for (let i = 0; i < pClassList.childNodes.length; i++) {
        if (pClassList.childNodes[i].className === "blog-art taken") {
          pClassList.childNodes[i].className = "blog-art notaken";
        }
      }
      e.target.classList.remove("notaken");
      e.target.classList.add("taken");
    } else if (e.target.classList.contains("taken")) {
      for (let i = 0; i < pClassList.childNodes.length; i++) {
        if (pClassList.childNodes[i].className === "blog-art taken") {
          pClassList.childNodes[i].className = "blog-art notaken";
        }
      }
    }
  };

  return (
    <div className="blog">
      <div className="blog-header">
        <h1>
          Articles & News<p>Home / Blog</p>
        </h1>
      </div>

      <div className="latestNews">
        <h1>Latest Post</h1>
        <div className="lNews">
          <div className="ln-img">
            <img src={latestNews} alt="news" />
          </div>
          <div className="ln-text">
            <div className="ln-subtext">
              <h1>Low Cost Latest Invented Interior Designing Ideas</h1>
              <p>
  We are dedicated to delivering high-quality, reliable solutions that meet the unique needs of every client. 
  With a strong commitment to excellence and a passion for innovation, our team works closely with you to bring 
  your ideas to life through thoughtful design and expert execution. We prioritize clear communication, timely delivery, 
  and sustainable practices to ensure your project is both successful and responsible.
</p>
            </div>
            <div className="ln-detail">
              <p className="ac-date">3 March 2025</p>
              <Link to={`/blog-details`}>
                <button>
                  <IoIosArrowForward />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="blogArticles">
        <h1>Articles & News</h1>
        <div className="blog-art-list">
          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article1} alt="article1" />
            </div>
            <div className="blog-art-content">
              <p>Let’s Get Solution For Building Construction Work</p>
              <div className="ba-detail">
                <p className="ba-date">3 March 2025</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article2} alt="article2" />
            </div>
            <div className="blog-art-content">
              <p>Building Design Innovations for Sustainable Architecture</p>
              <div className="ba-detail">
                <p className="ba-date">5 March 2025</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article3} alt="article3" />
            </div>
            <div className="blog-art-content">
              <p>Revolutionizing Construction with Modern Tools</p>
              <div className="ba-detail">
                <p className="ba-date">7 March 2025</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="blog-art notaken" onClick={handleChange}>
            <div className="blog-art-header">
              <img src={article4} alt="article4" />
            </div>
            <div className="blog-art-content">
              <p>Interior Design Tips for Small Living Spaces</p>
              <div className="ba-detail">
                <p className="ba-date">10 March 2025</p>
                <Link to={`/blog-details`}>
                  <button>
                    <IoIosArrowForward />
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
