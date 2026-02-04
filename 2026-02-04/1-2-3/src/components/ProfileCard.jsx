function ProfileCard({ name, age, job }) {
    return (
        <div className="profilecard">
            <h2>이름 : {name}</h2>
            <p>나이 : {age}</p>
            <p>직업 : {job}</p>
        </div>
    );
}

export default ProfileCard;