const IntegrationList = [
    {
        title: "HRMS Systems",
        para1: "We can integrate with any HRMS as long as the employee master can be made available to us over SFTP/API.",
        para2: "We are already deeply integrated with PeopleStrong and others are coming up.",
        bg: "rgba(252, 180, 40, 0.1)", // Adding transparency to the background color
        border: "linear-gradient(to right, rgba(252, 129, 40, 0.5) 50%, rgba(252, 180, 40, 0.5) 50%)" // Adding transparency to the border color gradient stops
    },
    {
        title: "Finance Systems",
        para1: "Connect us with your finance systems to get all cost centers mapped, and all data reconciled on a periodic/regular basis.",
        para2: "Open APIs available to connect.",
        bg: "rgba(108, 184, 32, 0.1)", // Adding transparency to the background color
        border: "linear-gradient(to right, rgba(108, 184, 32, 0.5) 50%, rgba(187, 225, 33, 0.5) 50%)" // Adding transparency to the border color gradient stops
    },
    {
        title: "Single Sign-on Systems",
        para1: "We can integrate to ensure that your users don’t have to log in multiple times into different logins. ",
        para2: "SSO is possible with any system that offers it.",
        bg: "rgba(54, 94, 238, 0.1)", // Adding transparency to the background color
        border: "linear-gradient(to right, rgba(45, 88, 236, 0.5) 50%, rgba(29, 161, 235, 0.5) 50%)" // Adding transparency to the border color gradient stops
    },
];

const Integration = () => {
    return (
        <div className="integrations" style={{ background: "#E3F0F9" }}>
            <h2 className="titles">Integrations</h2>
            <div className="Integrationlist">
                {IntegrationList.map((item, index) => (
                    <div key={index} style={{ background: item.bg, border: item.border, padding: "15px", paddingBottom: "45px", borderRadius: "15px", marginBottom: "20px" }}>
                        <h3 style={{ fontWeight: "bold" }}>{item.title}</h3>
                        <p>{item.para1}</p>
                        <p>{item.para2}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Integration;
