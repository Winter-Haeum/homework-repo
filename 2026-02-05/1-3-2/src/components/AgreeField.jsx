function AgreeField({ isAgreed, onChangeAgreed }) {
    return (
        <label>
            <input
                type="checkbox"
                checked={isAgreed}
                onChange={onChangeAgreed}
            />
            약관에 동의합니다.
        </label>
    );
}

export default AgreeField;
