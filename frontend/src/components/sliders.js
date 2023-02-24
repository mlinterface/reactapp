import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import icon from '../icon.png';


const Input = styled(MuiInput)`
  width: 75px;
`

export default function Sliders() {
    const [value, setValue] = React.useState(30000)

    const handleSliderChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleInputChange = event => {
        setValue(event.target.value === "" ? "" : Number(event.target.value))
    }

    const handleBlur = () => {
        if (value < 10000) {
            setValue(10000)
        } else if (value > 1000000) {
            setValue(1000000)
        }
    }

    return (
        <Box sx={{ width: 700 }}>
            <Typography id="input-slider" gutterBottom>
                Images
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <img src={icon} style={{
                        resizeMode: 'cover',
                        height: 30,
                        width: 30,
                    }} alt="icon" />
                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        valueLabelDisplay="auto"
                        step={10000}
                        marks
                        min={10000}
                        max={100000}
                    />
                </Grid>
                <Grid item>
                    <Input
                        value={value}
                        size="small"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 10000,
                            min: 10000,
                            max: 100000,
                            type: "number",
                            "aria-labelledby": "input-slider"
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}
