import {ProfilePic} from '../images/profile.png'

const CustomersList = [
    {
        name: "Rohit Mehra",
        imgUrl: ProfilePic,
        position: "CFO, XYZ",
        para: "ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No more unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.",
        bg: "rgba(54, 94, 238, 0.1)", // Adding transparency to the background color
        border: "rgba(54, 94, 238, 0.3)" // Adding transparency to the border color
    },
    {
        name: "Alan Turing",
        imgUrl: ProfilePic,
        position: "CFO, XYZ",
        para: "ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No more unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.",
        bg: "rgba(26, 172, 234, 0.1)", // Adding transparency to the background color
        border: "rgba(26, 172, 234, 0.3)" // Adding transparency to the border color
    },
    {
        name: "Mark Jacob",
        imgUrl: ProfilePic,
        position: "CEO, XYZ",
        para: "ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No more unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.",
        bg: "rgba(36, 128, 235, 0.1)", // Adding transparency to the background color
        border: "rgba(36, 128, 235, 0.3)" // Adding transparency to the border color
    },
];

const Customer = () => {
    return (
        <div className="integrations">
            <h2 className="titles">Our customers love us</h2>
            <div className="Integrationlist">
                {CustomersList.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            background: item.bg,
                            border: `1px solid ${item.border}`,
                            padding: "15px",
                            paddingBottom: "45px",
                            borderRadius: "15px",
                            marginBottom: "20px" // Added marginBottom for better spacing
                        }}
                    >
                        <p style={{ padding: "20px" }}>{item.para}</p>
                        <div className="profile">
                            <img
                                src={item.imgUrl}
                                alt={item.name}
                                width={80}
                                height={50}
                                style={{ paddingTop: "30px" }}
                            />
                            <div style={{}}>
                                <h3 style={{ fontWeight: "bold" }}>{item.name}</h3>
                                <p>{item.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Customer;
