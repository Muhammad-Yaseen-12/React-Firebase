function Input({ onChange, type, placeholder, value }) {
    return (
        <input onChange={onChange} type={type} placeholder={placeholder} value={value} />
    )
}

export default Input