import "../index.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img src='https://images.unsplash.com/photo-1764377723685-31e60ed8e550?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D'></img>
      <h3> Name : {props.name}</h3>
      <p> Age : {props.age}</p>
     <button>Follow </button>
    </div>
  )
}

export default Card
