import React, { useRef, useState } from 'react';
import './Video.css';

function Video() {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className='video'>
            <video
                className='video__player'
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src="https://youtu.be/H-mMQSOKUVo?list=PL4cNKClL5QoG8PdZHa8u99n5a4J-RZwQU"></video>
        </div>
    )
}

export default Video
