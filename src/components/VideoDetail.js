import React from 'react';

const VideoDetail = (props) => {

    const {video} = props;

    if(!video){
        return (<div>No video selected</div>);
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className='ui segment'>
                <h4 className="ui header">{video.snippet.title}</h4>
                <p className="">{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;