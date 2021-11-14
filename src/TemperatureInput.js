import React from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

const TemperatureInput = (props) => {
    const handleChange = (e) => {
        props.onTemperatureChange(e.target.value);
    };

    const temperature = props.temperature;
    const scale = props.scale;
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}</legend>
            <input value={temperature} onChange={handleChange} />
        </fieldset>
    );
}

export default TemperatureInput;