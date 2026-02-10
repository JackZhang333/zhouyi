import { useEffect, useRef } from 'react';
import { Howl, Howler } from 'howler';

export function useSound(src: string, options: any = {}) {
    const soundRef = useRef<Howl | null>(null);

    // Serialize options to avoid unnecessary re-creation on every render
    const optionsKey = JSON.stringify(options);

    useEffect(() => {
        soundRef.current = new Howl({
            src: [src],
            ...options,
        });

        return () => {
            if (soundRef.current) {
                soundRef.current.unload();
            }
        };
    }, [src, optionsKey]);

    const play = () => {
        if (soundRef.current) {
            // Ensure AudioContext is resumed (fixes browser autoplay policy issues)
            if (Howler.ctx && Howler.ctx.state === 'suspended') {
                Howler.ctx.resume();
            }
            soundRef.current.play();
        }
    };

    return play;
}
