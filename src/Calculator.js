import React, { useState } from "react";

import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) return '';

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

const Calculator = (props) => {
    const [temperature, setTemperature] = useState({ value: '0', scale: 'c' });

    const handleCelsiusChange = (temperature) => {
        setTemperature({ value: temperature, scale: 'c' });
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature({ value: temperature, scale: 'f' });
    };

    const scale = temperature.scale;
    const temp = temperature.value;
    const celsius = scale === 'f' ? tryConvert(temp, toCelsius) : temp;
    const fahrenheit = scale === 'c' ? tryConvert(temp, toFahrenheit) : temp;

    return (
        <React.Fragment>
            <TemperatureInput
                scale='c'
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale='f'
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </React.Fragment>
    );
}

export default Calculator;