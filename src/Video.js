import React, { useRef } from 'react';
import './Video.css';

function Video() {
    const videoRef = useRef(null);

    const onVideoPress = () => {

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
