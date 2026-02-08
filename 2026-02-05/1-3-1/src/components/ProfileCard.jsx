import { useState, useEffect } from "react";

function ProfileCard({ theme, imageSrc, englishName, koreanName, desc }) {
    const [isFront, setIsFront] = useState(true);
    const storageKey = `likes:${koreanName}`;

    const [likes, setLikes] = useState(() => {
        const saved = localStorage.getItem(storageKey);
        return saved ? Number(saved) : 0;
    });

    useEffect(() => {
        localStorage.setItem(storageKey, String(likes));
    }, [likes, storageKey]);

    // 카드 뒤집기 토글
    function handleCardClick() {
        setIsFront(!isFront);
    }

    // 좋아요 버튼 클릭 시 이벤트 전파 방지
    function handleLikeClick(e) {
        e.stopPropagation(); 
        setLikes((prevLikes) => prevLikes + 1);
    }

    return (
        /* isFront 상태에 따라 flipped 클래스 부여 */
        <div className={`profileCardContainer ${isFront ? "" : "flipped"}`} onClick={handleCardClick}>
            <div className={`profileCard ${theme}`}>
                {/* 앞면 */}
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

                {/* 뒷면 */}
                <div className="cardBack">
                    <p className="label">특징</p>
                    <p className="desc">{desc}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;