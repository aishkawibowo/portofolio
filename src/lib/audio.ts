let soundEnabled = true;

const SOUND_STORAGE_KEY = 'aishka-sound';

export function getSoundEnabled(): boolean {
  if (typeof window === 'undefined') return soundEnabled;
  try {
    const stored = localStorage.getItem(SOUND_STORAGE_KEY);
    if (stored !== null) return stored === 'true';
    return soundEnabled;
  } catch {
    return soundEnabled;
  }
}

export function setSoundEnabled(enabled: boolean): void {
  soundEnabled = enabled;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(SOUND_STORAGE_KEY, enabled ? 'true' : 'false');
    } catch {
      // noop
    }
  }
}

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

/**
 * Synthesizes an elegant, soft UI click sound using Web Audio API.
 * High-end glassy pop with warm resonance in the Velvet Plum / Lavender aesthetic.
 */
export function playClickSound(customPitchMultiplier = 1.0) {
  if (typeof window === 'undefined' || !getSoundEnabled()) return;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.12, now + 0.003);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.065);
    masterGain.connect(ctx.destination);

    const osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    const baseFreq = 920 * customPitchMultiplier;
    osc1.frequency.setValueAtTime(baseFreq, now);
    osc1.frequency.exponentialRampToValueAtTime(baseFreq * 0.48, now + 0.05);

    const osc2 = ctx.createOscillator();
    osc2.type = 'triangle';
    const overtoneFreq = baseFreq * 1.5;
    osc2.frequency.setValueAtTime(overtoneFreq, now);
    osc2.frequency.exponentialRampToValueAtTime(overtoneFreq * 0.6, now + 0.04);

    const osc2Gain = ctx.createGain();
    osc2Gain.gain.setValueAtTime(0.04, now);
    osc2Gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

    osc1.connect(masterGain);
    osc2.connect(osc2Gain);
    osc2Gain.connect(masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.07);
    osc2.stop(now + 0.07);
  } catch {
    // AudioContext blocked or unsupported
  }
}
