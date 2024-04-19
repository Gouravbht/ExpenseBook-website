
const FeaturesList = [
    {
        title:"Setup Employee Groups",
        description:"Use any parameter to setup distinc employee groups to implement policies"
        
    },
    {
        title:"The Definitive Rule Engine",
        description:"Configure ANY policy - and if you can’t configure it, we promise to work on it for free"
        
    },
    {
        title:"Customized Reports",
        description:"Setup the reports that you want using our seamless reporting engine."
        
    },
    {
        title:"Superior Employee Experience",
        description:"Manage all expenses and travel requests easily. Empower your employees with personalized reports."
        
    },
    {
        title:"Easy Integrations",
        description:"Integrate with your upstream, HRMS or your downstream finance system to seamlessly deliver value through our Open APIs."
        
    },
    {
        title:"Configurable Workflows",
        description:"Configure approvals or rejections. Escalations and reports. At will. Setup new groups."
        
    },
    {
        title:"Scan any Bill",
        description:"The world’s best OCR system backs up this product. All data goes in. 99% success."
        
    },
    {
        title:"AI-Based Concierge",
        description:"Ask the concierge to change things during your travel - and it will trigger relevant actions 24x7."
        
    },
    {
        title:"AI-Assisted Trip Planning",
        description:"Just tell us what you want to do in normal language and we will try and put together the best itinerary for you."
        
    },
]
const Features = () => {
  return (
    <>
    <div className="features">
        <h2 className="titles">Features that suit your needs</h2>
        <div className="featurelist" >
        {FeaturesList.map((feature)=>(
            <div key={feature} >
                <h3 style={{ color:"#475569"}}>{feature.title}</h3>
                <p style={{ color:"#64748B"}}>{feature.description}</p>
            </div>
        ))}
        </div>
    </div>
    </>
  )
}

export default Features