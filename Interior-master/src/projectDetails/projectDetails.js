import "./projectDetails.css";
import Table from "react-bootstrap/Table";
import photo from "../images/zoomImg.png";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'


export function ProjectDetails() {
  return (
    <div className="projectDetails">
      <div className="pDetails-header"></div>
      <div className="details">
        <div className="d-client-info">
          <Table>
            <tbody>
              <tr>
                <td>Client</td>
                <td>Your client name</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>Interiors</td>
              </tr>
              <tr>
                <td>Tags</td>
                <td>Interior, Home</td>
              </tr>
              <tr>
                <td>Date</td>
                <td>23.02.2023</td>
              </tr>
              <tr>
                <td>Link</td>
                <td>Link example.com</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="d-project-info">
          <h2>Minimal Look Bedrooms</h2>
          <p>
  We are dedicated to delivering high-quality, reliable solutions that meet the unique needs of every client. 
  With a strong commitment to excellence and a passion for innovation, our team works closely with you to bring 
  your ideas to life through thoughtful design and expert execution. We prioritize clear communication, timely delivery, 
  and sustainable practices to ensure your project is both successful and responsible.
</p>
<p>
  Whether you're starting a new project or enhancing an existing one, we’re here to support you every step of the way. 
  Our goal is to create lasting value and ensure your complete satisfaction through personalized service and attention to detail. 
  We believe in building strong partnerships, embracing creativity, and delivering solutions that stand the test of time.
</p>

        </div>
      </div>
      <div className="zoomRoom">
      <InnerImageZoom src={photo} />
      </div>
    </div>
  );
}
