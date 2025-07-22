/**
 * Custom hook for sound effects
 * Provides audio feedback for user interactions
 */
import { useCallback, useRef } from 'react';

interface SoundConfig {
  volume?: number;
  playbackRate?: number;
}

export function useSound() {
  const audioContext = useRef<AudioContext | null>(null);

  const createTone = useCallback((frequency: number, duration: number, type: OscillatorType = 'sine'): Promise<void> => {
    return new Promise((resolve) => {
      try {
        if (!audioContext.current) {
          audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }

        const context = audioContext.current;
        const oscillator = context.createOscillator();
        const gainNode = context.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(context.destination);

        oscillator.frequency.setValueAtTime(frequency, context.currentTime);
        oscillator.type = type;

        gainNode.gain.setValueAtTime(0, context.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, context.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + duration);

        oscillator.start(context.currentTime);
        oscillator.stop(context.currentTime + duration);

        setTimeout(resolve, duration * 1000);
      } catch (error) {
        resolve(); // Silently fail if Web Audio API is not supported
      }
    });
  }, []);

  const playHoverSound = useCallback(() => {
    createTone(800, 0.1, 'sine');
  }, [createTone]);

  const playClickSound = useCallback(() => {
    createTone(1000, 0.15, 'sine');
  }, [createTone]);

  const playSuccessSound = useCallback(() => {
    createTone(523, 0.2, 'sine').then(() => 
      createTone(659, 0.2, 'sine')
    ).then(() =>
      createTone(784, 0.3, 'sine')
    );
  }, [createTone]);

  const playErrorSound = useCallback(() => {
    createTone(200, 0.3, 'square');
  }, [createTone]);

  return {
    playHoverSound,
    playClickSound,
    playSuccessSound,
    playErrorSound,
  };
}