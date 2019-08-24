const ipc = require('electron').ipcRenderer;

let currentAgent = null;
let isSpeakingOrAnimating = false;

function run(agent) {
  currentAgent = agent;
  currentAgent.moveTo(10,10);
  currentAgent.show();
  currentAgent.speak('Hi! Every 10 minutes I\'ll give you a different quote.' );
  close();
}

document.addEventListener('DOMContentLoaded', function() {
  clippy.load('Clippy', run, ()=>{}, './agents/');
});

ipc.on('changeAgent', (e, newAgent) => {
  currentAgent.stop();
  currentAgent.hide();
  clippy.load(newAgent, run, ()=>{}, './agents/');
});

ipc.on('message', (e, message) => {
  if (!isSpeakingOrAnimating) {
    isSpeakingOrAnimating = true;
    currentAgent.show();
    currentAgent.speak(message);
    close();
  }
});

ipc.on('animate', () => {
  if (!isSpeakingOrAnimating) {
    isSpeakingOrAnimating = true;
    currentAgent.show();
    currentAgent.animate();
    close();
  }
});

function close() {
  setTimeout(() => {
    currentAgent.hide();
    isSpeakingOrAnimating = false;
    setTimeout(() => {
      ipc.send('timeout');
    }, 1000);
  }, 10000);
}
