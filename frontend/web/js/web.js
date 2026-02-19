//=================
// Variabler
//=================
    // Song Varibales
    const musicSlider = document.getElementById
    ("musicSliderRange");
    const songCurrentDuration = document.getElementById("songCurrentTime");
    const currentAudio = new Audio('audio.mp3');

    // Value change volume slider
    let volumeSlider = document.getElementById("soundValueRange");
    let volumeOutput = document.getElementById("volumeShow");
    volumeOutput.innerHTML = volumeSlider.value;

//================
// Functions
//================
    //==================
    // Volume functions
    //==================
        // Volume value show
        volumeSlider.oninput = function() {
            volumeOutput.innerHTML = this.value;
        }

        // Volume slider update
        function updateVolumeFill() {
            const value = (volumeSlider.value - volumeSlider.min) / (volumeSlider.max - volumeSlider.min) * 100;

            volumeSlider.style.setProperty("--value", value + "%");
        }
    
    //============================
    // Volume Duration functions
    //============================
        // Uppdatera songDurrationTime when loading new song

        // Song Durration slider update

        // Jump in song whith slider


//===============
// Calls
//===============
volumeSlider.addEventListener("input", updateVolumeFill);
updateVolumeFill();