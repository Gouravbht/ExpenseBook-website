import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div
        className="footer"
        style={{ background: "#E3F0F9", margin: "10px", marginBottom: "70px" }}
      >
        <h2 className="titles">
          Manage your travel and expenses the smart way!
        </h2>
        <div className="inputData">
          <input type="text" placeholder="Name" style={{ padding: "10px" }} />
          <input
            type="text"
            placeholder="Official email ID"
            style={{ padding: "10px", paddingInline: "25px" }}
          />
          <button>Start trial</button>
        </div>
        <p>30 Days free trial . Upto 10 users</p>
      </div>
      <div className="footer2" style={{ marginRight:"90px", borderBottomColor:"#F1F5F9"}}>
        <h2 className="logo">ExpenseBook</h2>
        <div>
          <div>
            <p>Address</p>
            <p>+91 1234567890</p>
          </div>
          <div className="socials">
            <p>Social media</p>
            <div className="socials" style={{paddingTop:"22px"}}> <a href="">
            <FaLinkedin/>
            </a><a href="">
                <FaYoutube/></a> <a href="">
                    <FaInstagramSquare/>
                </a></div>
          
          </div>
        </div>
      </div>
      <div className="navItems" style={{padding:"75px", display:"flex", justifyContent:"space-between", borderTop:"#F1F5F9 solid 2px"}}>
        <div><a href="">Blogs</a><a href="">Feature</a><a href="">Price</a><a href="">Integration</a></div>
        <div><p>Copyright © 2024 • ExpenseBook</p></div>
      </div>
    </>
  );
};

export default Footer;
