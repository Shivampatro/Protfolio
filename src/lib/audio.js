import { get } from 'svelte/store';
import { soundEnabled } from './stores.js';

let audioCtx = null;
let ambientOscillator = null;
let ambientGain = null;

function initAudio() {
  if (typeof window !== 'undefined' && !audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

export function playHoverSound() {
  if (!get(soundEnabled)) return;
  initAudio();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  
  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
  
  gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
  
  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  osc.start();
  osc.stop(audioCtx.currentTime + 0.1);
}

export function toggleAmbient() {
  initAudio();
  const isEnabled = get(soundEnabled);
  if (!isEnabled) {
    if (ambientGain) {
      ambientGain.gain.setTargetAtTime(0, audioCtx.currentTime, 1);
      setTimeout(() => { 
        if (ambientOscillator) {
          try { ambientOscillator.stop(); } catch(e){} 
        }
        ambientOscillator = null; 
      }, 1000);
    }
    return;
  }
  
  if (audioCtx.state === 'suspended') audioCtx.resume();
  if (ambientOscillator) return; 
  
  ambientOscillator = audioCtx.createOscillator();
  ambientGain = audioCtx.createGain();
  
  ambientOscillator.type = 'sine';
  ambientOscillator.frequency.value = 65; 
  
  const lfo = audioCtx.createOscillator();
  lfo.type = 'sine';
  lfo.frequency.value = 0.15; 
  const lfoGain = audioCtx.createGain();
  lfoGain.gain.value = 5;
  lfo.connect(lfoGain);
  lfoGain.connect(ambientOscillator.frequency);
  lfo.start();
  
  ambientGain.gain.setValueAtTime(0, audioCtx.currentTime);
  ambientGain.gain.setTargetAtTime(0.1, audioCtx.currentTime, 2); 
  
  ambientOscillator.connect(ambientGain);
  ambientGain.connect(audioCtx.destination);
  ambientOscillator.start();
}
