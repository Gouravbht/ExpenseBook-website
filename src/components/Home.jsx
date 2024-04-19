import {ImageLogo} from '../images/Google.png'
const CompanyList = [
    { name: "Google", image: ImageLogo },
    { name: "Google", image: ImageLogo },
    { name: "Google", image: ImageLogo },
    { name: "Google", image: ImageLogo },
  ];
const Home = () => {
  return (
    <>
      <div className="heroSection">
        {/* Navbar */}
        <nav className="navbar">
          <div style={{ color: "#1353DD" }}>
            Expense<span style={{ fontWeight: "bold" }}>Book</span>
          </div>
          <div className="navItems">
            <a href="">Blogs</a>
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Integrations</a>
            <button>Start trial</button>
          </div>
        </nav>
        {/* Main section of user's name and mail */}
        <div className="mainSection">
          <h2  className="heroHeading">
            The World&apos;s Most Configurable
          </h2>
          <h1 style={{ color: "#334155", fontFamily: "extatica" }}>
            Travel & Expense Management Software
          </h1>
          <p style={{ width: "60%", fontSize: "1.2rem", color: "#64748B" }}>
            Configure any rule. Enable a world class mobile experience for your
            users. Get seamless reporting & integrations. Inbuilt OCR expense
            scanning. Manage travel & non-travel expenses. Open APIs to connect
            with external systems.
          </p>
          {/* Input section */}
          <div className="inputData">
            <input type="text" placeholder="Name" />
            <input
              type="text"
              placeholder="Official email ID"
              style={{ paddingRight: "25px", paddingLeft: "5px" }}
            />
            <button>Start trial</button>
          </div>
          <p style={{ fontSize: "17px", color: "#64748B" }}>
            30 Days free trial . Upto 10 users
          </p>
        </div>
        {/* Used by enterprices */}
        <div
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="enterprice">
            <p style={{ color:"#94A3B8", fontSize:"25px"}}>USED BY OVER 50 ENTERPRISES</p>
            <div className="company-list">
              {CompanyList.map((company) => (
                <div className="company-item" key={company.name}>
                  <img
                    src={company.image}
                    alt={company.name}
                    width={70}
                    height={40}
                    style={{ marginTop: "10px" }}
                  />
                  <h3>{company.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home