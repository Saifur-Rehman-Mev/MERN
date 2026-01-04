import './App.css'
import Card from './components/Card'
import Prac from './components/Prac'

function App() {

  const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "6 days ago",
    jobType: "Full Time",
    level: "Senior Level",
    jobTitle: "Software Engineer",
    payPerHourUSD: 85,
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    jobType: "Part Time",
    level: "Junior Level",
    jobTitle: "Data Analyst",
    payPerHourUSD: 40,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    jobType: "Full Time",
    level: "Mid Level",
    jobTitle: "Data Scientist",
    payPerHourUSD: 70,
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    companyName: "Meta",
    datePosted: "3 days ago",
    jobType: "Full Time",
    level: "Senior Level",
    jobTitle: "Machine Learning Engineer",
    payPerHourUSD: 95,
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tata_Consultancy_Services_Logo.svg",
    companyName: "TCS",
    datePosted: "1 week ago",
    jobType: "Full Time",
    level: "Junior Level",
    jobTitle: "Software Developer",
    payPerHourUSD: 28,
    location: "Delhi, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Infosys_logo.svg",
    companyName: "Infosys",
    datePosted: "4 days ago",
    jobType: "Full Time",
    level: "Mid Level",
    jobTitle: "Backend Developer",
    payPerHourUSD: 35,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Accenture.svg",
    companyName: "Accenture",
    datePosted: "2 weeks ago",
    jobType: "Contract",
    level: "Senior Level",
    jobTitle: "Data Engineer",
    payPerHourUSD: 65,
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    companyName: "IBM",
    datePosted: "5 days ago",
    jobType: "Full Time",
    level: "Tech Lead",
    jobTitle: "AI Research Lead",
    payPerHourUSD: 105,
    location: "New York, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Adobe_Corporate_Logo.png",
    companyName: "Adobe",
    datePosted: "1 week ago",
    jobType: "Part Time",
    level: "Junior Level",
    jobTitle: "Frontend Developer",
    payPerHourUSD: 38,
    location: "Noida, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "3 days ago",
    jobType: "Full Time",
    level: "Senior Level",
    jobTitle: "Site Reliability Engineer",
    payPerHourUSD: 100,
    location: "Los Gatos, USA"
  }
];

  return (
    <>
     <div className='parent'>
      {jobOpenings.map((elem,idx)=> {
        return  <div key={idx}>
          <Prac log={elem.brandLogo} company={elem.companyName} date={elem.datePosted} type={elem.jobType} level={elem.level} pay={elem.payPerHourUSD} title={elem.jobTitle} location={elem.location} />
      
        </div>
        })}
     </div>
    </>
  )
}

export default App
