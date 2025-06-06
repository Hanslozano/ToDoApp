import profile from '../Assets/cat.jpg'


export default function Card() {
    return(
        <div className="card">
            <img src={profile}  className="image"></img>
            <h1>Basic Card</h1>
            <p>Meow Meow Meow</p>
        </div>
    )
}


