/*
 * type placeholder: string
 */

const Input = ({placeholder, onChange, value, index}) => {
    return (
        <input type="text"
               placeholder={placeholder}
               onChange={onChange}
               value={value}
               index={index}
               style={{
                   width: "4rem",
                   height: "2rem",
                   textAlign: "center",
                   border: "1px solid lightgray",
                   background: "white",
                   boxShadow: "0 0 2px gray inset"
               }}
        />
    )
}
export default Input