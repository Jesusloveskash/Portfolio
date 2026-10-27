"""Original synthesized instrumental sketches for Kash OS, CC0.
No samples, recordings, external melodies, or model API calls.
Run with Python 3 and ffmpeg. Creates short, intentionally gentle tracks.
"""
import math, random, struct, subprocess, tempfile, wave
from pathlib import Path
RATE=22050
DURATION=32
OUT=Path(__file__).resolve().parents[1]/'public/assets/music'
OUT.mkdir(parents=True,exist_ok=True)
def hz(midi):return 440*2**((midi-69)/12)
def compose(name,seed,chords,melody):
    rng=random.Random(seed)
    samples=[0.0]*(RATE*DURATION)
    def note(midi,start,duration,amplitude,pad=False):
        freq=hz(midi); phase=rng.random()*math.tau
        for i in range(int(duration*RATE)):
            t=i/RATE;idx=int(start*RATE)+i
            if idx>=len(samples):break
            envelope=min(1,t/.07)*min(1,(duration-t)/.5)
            if not pad:envelope*=math.exp(-t*2.2)
            signal=math.sin(math.tau*freq*t+phase)+.16*math.sin(math.tau*freq*2*t+phase)+.05*math.sin(math.tau*freq*3*t)
            samples[idx]+=amplitude*envelope*signal
    for bar in range(8):
        chord=chords[bar%len(chords)]
        for pitch in chord:note(pitch,bar*4,4.5,.032,True)
        note(chord[0]-12,bar*4,3.6,.05)
        for beat in range(4):
            pitch=melody[(bar*4+beat)%len(melody)]
            if pitch:note(pitch,bar*4+beat+.12,1.8,.075)
    peak=max(abs(v) for v in samples) or 1
    with tempfile.NamedTemporaryFile(suffix='.wav') as f:
        with wave.open(f.name,'wb') as wav:
            wav.setnchannels(1);wav.setsampwidth(2);wav.setframerate(RATE)
            data=bytearray()
            for i,value in enumerate(samples):
                t=i/RATE;fade=min(1,t/1.5,(DURATION-t)/2)
                data.extend(struct.pack('<h',int(max(-1,min(1,value/peak*.65*fade))*32767)))
            wav.writeframes(data)
        subprocess.run(['ffmpeg','-y','-loglevel','error','-i',f.name,'-c:a','libvorbis','-q:a','4',str(OUT/(name+'.ogg'))],check=True)
compose('a-good-conversation',31,[[48,55,59,64],[45,52,55,60],[41,48,52,57],[43,50,55,59]],[76,0,71,67,72,76,0,69,77,0,72,69,74,71,67,0])
compose('the-scenic-route',73,[[50,57,61,66],[47,54,57,62],[43,50,54,59],[45,52,57,61]],[78,73,0,69,74,0,78,71,79,74,0,71,76,73,69,0])
print('Composed two original 32-second instrumental sketches.')
