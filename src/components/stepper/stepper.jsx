/*
 * @function CalcStepper - a stepper for the immigration calculator
 * @params {number} numOfSteps - the numbers of steps
 * @params {number} activeStep - the current step index
 */
import {Box, Step, StepLabel, Stepper} from "@mui/material";
import * as React from "react";
import getEmptyArray from "@/utility/getEmptyArray";

const CalcStepper = ({numOfSteps, activeStep}) => {
    const steps = getEmptyArray(numOfSteps)
    return(
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
    )
}

export default CalcStepper