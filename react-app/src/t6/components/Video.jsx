import { useState, useRef } from "react";

const Video = () => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef();

    const playButtonHandler = () => {
        if (playing) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setPlaying(!playing);
    };

    return (
        <div>
            <h2>Video Player using useRef()</h2>
            <div className="container p-10 mx-auto mb-10 max-w-screen-md">
                <video ref={videoRef} className="rounded-lg">
                    <source src="./pr.mp4"></source>
                </video>
            </div>
            <div className="text-center m-10">
                <button onClick={playButtonHandler}>
                    {playing ? "Pause" : "Play"}
                </button>
            </div>
        </div>
    );
};

export default Video;
