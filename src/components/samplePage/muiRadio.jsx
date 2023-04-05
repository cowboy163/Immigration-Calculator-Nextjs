import React from 'react';
import { useForm } from 'react-hook-form';
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';
import { styled } from '@mui/system';

const CustomRadio = styled(Radio)(({ theme }) => ({
    '&.Mui-checked': {
        color: "blue",
    },
    '&.Mui-focusVisible': {
        boxShadow: `0 0 0 3px red`,
    },
    '&:hover': {
        backgroundColor: "red",
    },
}));

const RadioButtonGrid = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl component="fieldset">
                <FormLabel component="legend">选择一个选项</FormLabel>
                <RadioGroup
                    row
                    aria-label="options"
                    name="options"
                    defaultValue=""
                    {...register('options', { required: true })}
                >
                    {Array.from({ length: 2 }, (_, i) => i + 1).map((row) =>
                        Array.from({ length: 4 }, (_, j) => j + 1).map((column) => (
                            <FormControlLabel
                                key={`option-${row}-${column}`}
                                value={`option-${row}-${column}`}
                                control={<CustomRadio />}
                                label={`选项 ${row}-${column}`}
                                labelPlacement="bottom"
                            />
                        ))
                    )}
                </RadioGroup>
            </FormControl>
            <button type="submit">提交</button>
        </form>
    );
};
export default RadioButtonGrid