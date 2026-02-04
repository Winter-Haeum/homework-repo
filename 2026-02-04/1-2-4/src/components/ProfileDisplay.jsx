import ThemeToggle from "./ThemeToggle";

function ProfileDisplay({ 
    name, 
    statusMessage,
    isEditing,
    setIsEditing,
    setName,
    setStatusMessage,
    isDark,
    setIsDark
}) {

    const isTooLong = statusMessage.length > 20;

    return (
        <div className="profile">
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
            {isEditing ? (
                <div className="profile_section">
                    <div className="profile_group">
                        <p className="profile_label"><strong>이름</strong></p>
                        <input
                            className="profile_input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
            
                    <div className="profile_group">
                        <p className="profile_label"><strong>상태 메세지</strong></p>
                        <input
                            className="profile_input"
                            value={statusMessage}
                            onChange={(e) => setStatusMessage(e.target.value)}
                        />
                    </div>
            
                    {isTooLong && (
                        <p className="profile_warning">
                            상태 메세지는 20자 이하로 작성하세요.
                        </p>
                    )}
                </div>
            ) : (
                <div className="profile_section">
                    <div className="profile_group">
                        <p className="profile_label"><strong>이름</strong></p>
                        <h3 className="profile_value">{name}</h3>
                    </div>

                    <div className="profile_group">
                        <p className="profile_label"><strong>상태 메세지</strong></p>
                        <p className="profile_value">{statusMessage}</p>
                    </div>

                    {isTooLong && (
                        <p className="profile_warning">
                            상태 메세지는 20자 이하로 작성하세요.
                        </p>
                    )}
                </div>
            )}

            <button className="profile_button" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "저장" : "편집"}
            </button>
        </div>
    );
}

export default ProfileDisplay;