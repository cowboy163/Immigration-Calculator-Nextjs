import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {Box, TextField} from "@mui/material";

export default function ColorToggleButton() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div>
            <br/>
            <br/>
            <br/>

            &nbsp;
            &nbsp;
            &nbsp;
            <Box width="100%">
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    orientation="vertical"
                >
                    <Box marginBottom={2}>
                        <ToggleButton
                            value="web"
                        >Web</ToggleButton>
                    </Box>

                    <ToggleButton value="android">Android</ToggleButton>
                    <ToggleButton value="ios">iOS</ToggleButton>
                </ToggleButtonGroup>
                <TextField
                    error
                    id="outlined-error"
                    label="Error"
                    defaultValue="Hello World"
                />
            </Box>


            <br/>
            <br/>
            <br/>
        </div>
    );
}