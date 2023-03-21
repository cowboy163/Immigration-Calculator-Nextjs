/*
 * @param {Object} content - data for select bar
 * @param {callback} onChange
 * @param {string} value - pair with option's value to control them
 *
 * interface options { text: string, value: string }
 * interface content { description: string, options: Array<options> }
 */

const SelectBar = ({content, onChange, value}) => {

    return(
        <select name="" id=""
                value={value}
                onChange={onChange}
                style={{
                    border: "1px solid lightgray",
                    background: "white",
                    height: "2.5rem",
                }}
        >
            <option value="" defaultValue hidden>
                {content?.description}
            </option>
            {
                content?.options?.map((item, index) =>
                    <option key={index}
                            value={item.value}
                    >
                        {item.text}
                    </option>
                )
            }
        </select>
    )
}
export default SelectBar