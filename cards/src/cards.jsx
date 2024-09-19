import profilePic from './assets/profilePic.jpg'

function Card()
{
return(
    <div className="card">
        <img src={profilePic} alt="profile picture" className='cardImage'></img>
        <h2 className='cardTitle'>Joby John</h2>
        <p className='cardText'>I'm a MCA student</p>

    </div>
)
}

export default Card;