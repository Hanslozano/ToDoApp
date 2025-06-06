import cat from '../Assets/cat.jpg'

export default function Button() {

    
 
    const profile = (e) => e.target.style.display = "none"

    return( <img id='CatButton' onClick={(e) => profile(e) }  src={cat}></img> )

}