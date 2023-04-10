import React, {useEffect, useState} from 'react';
import TextTransition, {presets} from "react-text-transition";

const ScorePad = ({ text, paddingRight, takePlace }) => {
    const index = 1
    const [texts, setTexts] = useState(["0"])
    const [newText, setNewText] = useState("")

    useEffect(() => {
        let newScore = "0"
        if(newText && newText !== "") {
            newScore = newText
        }
        setTimeout(() => {
            setTexts(prevTexts => {
                const updatedTexts = [...prevTexts, newScore]
                return updatedTexts.slice(-2)
            })
        }, 100)

    }, [newText])

    useEffect(() => {
        if(text && text.length === 1 && text !== "0" && takePlace) {
            setNewText("0" + text)
        } else {
            setNewText(text)
        }
    }, [text])

    return (
        <h5 style={{display: 'flex', color: "gray", paddingRight: paddingRight && paddingRight}}>
            分数：
            <TextTransition springConfig={presets.wobbly}
            >{texts[index % texts.length]}</TextTransition>
        </h5>
    );
};

export default ScorePad;