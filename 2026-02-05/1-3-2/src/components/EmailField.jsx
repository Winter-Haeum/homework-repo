function EmailField({
  email,
  onChangeEmail,
  onClickCheck,
  message,
  status,
}) {
  return (
    <>
      <input
        type="email"
        placeholder="test@example.com"
        value={email}
        onChange={onChangeEmail}
      />

      <button type="button" onClick={onClickCheck}>
        중복 확인
      </button>

      <p className={status}>
        {status === "success" && "✅ "}
        {status === "error" && "❌ "}
        {message}
      </p>
    </>
  );
}

export default EmailField;
