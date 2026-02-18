// Value change volume slider
let volumeSlider = document.getElementById("soundValueRange");
let volumeOutput = document.getElementById("volumeShow");
volumeOutput.innerHTML = volumeSlider.value;

//Volume value show
volumeSlider.oninput = function() {
    volumeOutput.innerHTML = this.value;
}

// Volume green update
function updateVolumeFill() {
    const value = (volumeSlider.value - volumeSlider.min) / (volumeSlider.max - volumeSlider.min) * 100;

    volumeSlider.style.setProperty("--value", value + "%");
}

volumeSlider.addEventListener("input", updateVolumeFill);
updateVolumeFill();