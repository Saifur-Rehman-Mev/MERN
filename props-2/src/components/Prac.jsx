import "../index.css"
import {Bookmark} from 'lucide-react'


const Prac = (props) => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src={props.log}/>
           <button>save <Bookmark/> </button>
        </div>
        <div className="center">
          <h2>{props.company} </h2> 
          <p> {props.date}</p>
          <h2> {props.title} </h2>
          <div>
            <h4>~ {props.type} </h4>
            <h4> ~ {props.level}</h4>
          </div>
        </div>
        <hr></hr>
        <div className="bottom">
           <div>
            <p> ${props.pay} /hour <br />
              {props.location}</p>
            </div>
            <div>
              <button className="btn">Apply Now </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prac
