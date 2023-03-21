/*
 * use papaparse readString method
 * transform CSV files to Array
 * @param {string} fileLocation
 *
 * use csvToArray().then() to get the result and set it in local state
 */

import {readString} from "react-papaparse";

const csvToArray = (fileLocation) => {
    return fetch(fileLocation)
        .then(response => response.text())
        .then(data => {
            return readString(data, {
                header: true,
                skipEmptyLines: true,
            })
        })
        .catch(e => console.log(e))
}

export default csvToArray