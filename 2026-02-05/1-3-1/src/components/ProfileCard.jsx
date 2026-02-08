import { useState } from "react";

function ProfileCard({ theme, imageSrc, englishName, koreanName, desc }) {

    const [isFront, setIsFront] = useState(true);
    const [likes, setLikes] = useState(0);

    function handleCardClick() {
        setIsFront(!isFront);
    }

    function handleLikeClick(e) {
        e.stopPropagation();
        setLikes((prevLikes) => prevLikes + 1);
    }

    return (
        <div className={`profileCard ${theme}`} onClick={handleCardClick}>
            {isFront && (
                <div className="cardFront">
                    <img className="profileImage" src={imageSrc} alt={koreanName} />
                    <p className="userName">{englishName}</p>
                    <p className="userKoreanName">{koreanName}</p>

                    <button className="likeButton" onClick={handleLikeClick} type="button">
                        <span className="heartIcon">❤️</span>
                        <span className="likeCount">{likes}</span>
                        <span className="likeText">좋아요</span>
                    </button>                
                </div>
            )}

            {!isFront && (
                <div className="cardBack">
                    <p className="label">특징</p>
                    <p className="desc">{desc}</p>
                </div>
            )}
        </div>
   );
}

export default ProfileCard;