const voiceSelect = document.querySelector('#voiceSelect');
const playButton = document.querySelector('#playButton');
const textArea = document.querySelector('textarea');

//load available Voices
let voices = [];
function loadVoices() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML += voices.map((voice, index) => `<option value=${index}>${voice.name} (${voice.lang})</option>`).join('');
}

//trigger loading voices when they become available
speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

//Play TTS
playButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    const selectedVoice = voices[voiceSelect.value];
    if(selectedVoice) utterance.voice = selectedVoice;
    speechSynthesis.speak(utterance);
})