function ProfilePicture(){
    const imageUrl = './src/assets/seek_progress.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return (<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);
}

export default ProfilePicture;