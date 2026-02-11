// import "./contact.css";
// import { GiWorld } from "react-icons/gi";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsTelephone, BsArrowRight } from "react-icons/bs";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedin,
// } from "react-icons/fa";

// export function Contact() {
//   return (
//     <div className="contact">
//       <div className="contact-header">
//         <h1>
//           Contact Us<p>Home / Contact</p>
//         </h1>
//       </div>
//       <div className="contact-content">
//         <h2>We love meeting new people and helping them.</h2>
//         <div className="contact-form">
//           <div className="contact-form-info">
//             <div className="icons">
//               <p>
//                 <span className="icon">
//                   <HiOutlineMail />
//                 </span>
//                 <a href="mailto: info@yourdomain.com">hesita@gmail.com</a>
//               </p>
//               <p>
//                 <span className="icon">
//                   <BsTelephone />
//                 </span>
//                 +91 9345783603
//               </p>
//               <p>
//                 <span className="icon">
//                   <GiWorld />
//                 </span>
//                 <a href="www.yourdomain.com">www.hesita.com</a>
//               </p>
//             </div>
//             <div className="contact-smedias">
//               <ul>
//                 <li>
//                   <a href="https://www.facebook.com/">
//                     <FaFacebookF />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://www.instagram.com/">
//                     <FaInstagram />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://www.twitter.com/">
//                     <FaTwitter />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://www.linkedin.com/">
//                     <FaLinkedin />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="contact-form-fill">
//             <div className="nameEmail">
//               <input name="fullname" placeholder="Name" />
//               <input name="mail" placeholder="Email" />
//             </div>
//             <div className="subjectPhone">
//               <input name="subject" placeholder="Subject" />
//               <input name="phone" placeholder="Phone" />
//             </div>
//             <div className="interested">
//               <textarea name="interested" placeholder="Hello, I am interested in.." />
//             </div>
//             <div className="send">
//               <button>
//                 Send Now
//                 <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="map">
//         <iframe
//           src="https://www.google.com/maps?q=Erode,+Tamil+Nadu,+India&output=embed"
//           title="map"
//           style={{
//             frameborder: "0",
//             allowfullscreen: "",
//             ariaHidden: "false",
//             tabindex: "0",
//             width: "800px",
//             height: "350px",
//           }}
//         ></iframe>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import "./contact.css";
import { GiWorld } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone, BsArrowRight } from "react-icons/bs";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

export function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    mail: "",
    subject: "",
    phone: "",
    interested: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    const { fullname, mail, subject, phone, interested } = formData;

    // Basic client-side validation
    if (!fullname || !mail || !subject || !phone || !interested) {
      alert("Please fill out all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://hesita-design.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          fullname: "",
          mail: "",
          subject: "",
          phone: "",
          interested: "",
        });
      } else {
        alert(data.message || "Error sending message.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>
          Contact Us<p>Home / Contact</p>
        </h1>
      </div>

      <div className="contact-content">
        <h2>We love meeting new people and helping them.</h2>
        <div className="contact-form">
          <div className="contact-form-info">
            <div className="icons">
              <p><span className="icon"><HiOutlineMail /></span><a href="mailto:hesita@gmail.com">hesita@gmail.com</a></p>
              <p><span className="icon"><BsTelephone /></span>+91 9345783603</p>
              <p><span className="icon"><GiWorld /></span><a href="http://www.hesita.com">www.hesita.com</a></p>
            </div>
            <div className="contact-smedias">
              <ul>
                <li><a href="https://www.facebook.com/"><FaFacebookF /></a></li>
                <li><a href="https://www.instagram.com/"><FaInstagram /></a></li>
                <li><a href="https://www.twitter.com/"><FaTwitter /></a></li>
                <li><a href="https://www.linkedin.com/"><FaLinkedin /></a></li>
              </ul>
            </div>
          </div>

          <div className="contact-form-fill">
            <div className="nameEmail">
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Name"
              />
              <input
                type="email"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div className="subjectPhone">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
            </div>
            <div className="interested">
              <textarea
                name="interested"
                value={formData.interested}
                onChange={handleChange}
                placeholder="Hello, I am interested in.."
              />
            </div>
            <div className="send">
              <button type="button" onClick={handleSubmit} disabled={loading}>
                {loading ? "Sending..." : "Send Now"}
                <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps?q=Erode,+Tamil+Nadu,+India&output=embed"
          title="map"
          style={{
            border: "none",
            width: "100%",
            height: "350px",
          }}
        ></iframe>
      </div>
    </div>
  );
}
