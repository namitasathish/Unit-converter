document.addEventListener('DOMContentLoaded', () => {
    const unitselect = document.getElementById('unitselect');
    const tempbox = document.getElementById('tempbox');
    const weightbox = document.getElementById('weightbox');
    const lengthbox = document.getElementById('lengthbox');
    const timebox = document.getElementById('timebox');
    const anglebox = document.getElementById('anglebox');

    const boxes = [tempbox, weightbox, lengthbox, timebox, anglebox];
    const results = document.querySelectorAll('.res div');

    unitselect.addEventListener('change', () => {
        boxes.forEach(box => box.style.display = 'none');
        results.forEach(result => result.innerText = "");

        if (unitselect.value === 'temperature') {
            tempbox.style.display = 'block';
        } else if (unitselect.value === 'weight') {
            weightbox.style.display = 'block';
        } else if (unitselect.value === 'length') {
            lengthbox.style.display = 'block';
        } else if (unitselect.value === 'time') {
            timebox.style.display = 'block';
        } else if (unitselect.value === 'angle') {
            anglebox.style.display = 'block';
        }
    });
});

// temperature
function tempfn() {
    var input = document.getElementsByClassName("input")[0].value;
    var fromtemp = document.getElementById("fromtemp").value;
    var totemp = document.getElementById("totemp").value;
    var result;

    if (fromtemp === "celcius" && totemp === "farenhiet") {
        result = (input * 9 / 5) + 32;
    } else if (fromtemp === "farenhiet" && totemp === "celcius") {
        result = (input - 32) * 5 / 9;
    } else if (fromtemp === "celcius" && totemp === "kelvin") {
        result = parseFloat(input) + 273.15;
    } else if (fromtemp === "kelvin" && totemp === "celcius") {
        result = parseFloat(input) - 273.15;
    } else if (fromtemp === "farenhiet" && totemp === "kelvin") {
        result = (input - 32) * 5 / 9 + 273.15;
    } else if (fromtemp === "kelvin" && totemp === "farenhiet") {
        result = (input - 273.15) * 9 / 5 + 32;
    }

    document.getElementById("resultboxt").innerText = "Result: " + result;
    console.log(result);
}

// weight
function weightfn(){
    var input = document.getElementsByClassName("input")[1].value;
    var fromweight = document.getElementById("fromweight").value;
    var toweight = document.getElementById("toweight").value;
    var result;
    var grams;

    if (fromweight === "pound") {
        grams = input * 453.592; 
    } else if (fromweight === "kilogram") {
        grams = input * 1000;
    } else if (fromweight === "gram") {
        grams = input;
    } else if (fromweight === "milligram") {
        grams = input / 1000; 
    } else if (fromweight === "microgram") {
        grams = input / 1000000;
    } else if (fromweight === "tonne") {
        grams = input * 1000000;
    } else if (fromweight === "megatonne") {
        grams = input * 1e12;
    }

    if (toweight === "pound") {
        result = grams / 453.592;
    } else if (toweight === "kilogram") {
        result = grams / 1000;
    } else if (toweight === "gram") {
        result = grams;
    } else if (toweight === "milligram") {
        result = grams * 1000;
    } else if (toweight === "microgram") {
        result = grams * 1e6;
    } else if (toweight === "tonne") {
        result = grams / 1e6;
    } else if (toweight === "megatonne") {
        result = grams / 1e12;
    }

    document.getElementById("resultboxwt").innerText = "Result: " + result;
    console.log(result);
}

// length
function lengthfn() {
    var input = parseFloat(document.getElementsByClassName("input")[2].value);
    var fromlength = document.getElementById("fromlength").value;
    var tolength = document.getElementById("tolength").value;
    var result;

    const conversions = {
        millimeter: 1,
        centimeter: 10,
        meter: 1000,
        kilometer: 1000000,
        inch: 25.4,
        foot: 304.8,
        yard: 914.4,
        mile: 1609344,
    };

    var inputValueInMillimeters = input * conversions[fromlength];

    result = inputValueInMillimeters / conversions[tolength];

    document.getElementById("resultboxlen").innerText = "Result: " + result;
    console.log(result);
}

// time
function timefn() {
    var input = parseFloat(document.getElementsByClassName("input")[3].value);
    var fromtime = document.getElementById("fromtime").value;
    var totime = document.getElementById("totime").value;
    var result;

    const conversions = {
        hour: {
            minute: 60,
            second: 3600,
            millisecond: 3600000,
        },
        minute: {
            hour: 1 / 60,
            second: 60,
            millisecond: 60000,
        },
        second: {
            hour: 1 / 3600,
            minute: 1 / 60,
            millisecond: 1000,
        },
        year: {
            day: 365,
            hour: 365 * 24,
            minute: 365 * 24 * 60,
            second: 365 * 24 * 60 * 60,
            millisecond: 365 * 24 * 60 * 60 * 1000,
        },
        day: {
            year: 1 / 365,
            hour: 24,
            minute: 24 * 60,
            second: 24 * 60 * 60,
            millisecond: 24 * 60 * 60 * 1000,
        },
        millisecond: {
            year: 1 / (365 * 24 * 60 * 60 * 1000),
            day: 1 / (24 * 60 * 60 * 1000),
            hour: 1 / (60 * 60 * 1000),
            minute: 1 / (60 * 1000),
            second: 1 / 1000,
        },
    };

    var inputValueInMilliseconds = input * conversions[fromtime].millisecond;

    result = inputValueInMilliseconds / conversions[totime].millisecond;

    document.getElementById("resultboxtim").innerText = "Result: " + result;
    console.log(result);
}

// angle
function anglefn(){
    var input = document.getElementsByClassName("input")[4].value;
    var fromangle = document.getElementById("fromangle").value;
    var toangle = document.getElementById("toangle").value;
    var result;

    if(fromangle === "radian" && toangle === "degree"){
        result = input / 0.0174533;
    } else if(fromangle === "degree" && toangle === "radian"){
        result = input * 0.0174533;
    }

    document.getElementById("resultboxang").innerText = "Result: " + result;
    console.log(result);
}
