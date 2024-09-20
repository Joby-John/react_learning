
function ProfilePicture()
{
    const imageUrl  = './src/assets/profilePic.jpg';
    const handleClick  = (e) =>{
        e.target.style.border = "2px solid"
    }

    return (<img src = {imageUrl} onClick={(e)=>{handleClick(e)}}></img>);
}

export default ProfilePicture;