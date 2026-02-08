function PasswordField({
    password,
    onChangePassword,
    passwordConfirm,
    onChangePasswordConfirm,
    confirmClassName,
    showMatchMessage,
    isMatched,
}) {
    return (
        <>
            <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={onChangePassword}
            />

            <input
                type="password"
                placeholder="비밀번호 확인"
                value={passwordConfirm}
                onChange={onChangePasswordConfirm}
                className={confirmClassName}
            />

            {showMatchMessage && isMatched && (
                <p className="success">✅ 비밀번호가 일치합니다.</p>
            )}

            {showMatchMessage && !isMatched && (
                <p className="error">❌ 비밀번호가 일치하지 않습니다.</p>
            )}
        </>
    );
}

export default PasswordField;
