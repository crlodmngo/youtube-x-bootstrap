
const VideoItem = ({video,onVideoSelect}) => {
    return(
        <div className="py-2" onClick={() => onVideoSelect(video)}>
            <div className="row">
                <div className="col-md-2">
                    <img className="img-fluid" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}></img>
                </div>
                <div className="col-md-10">
                    <p className="mb-0">
                        <span className="font-weight-bolder">{video.snippet.title}</span>
                    </p>
                    <p>
                        <span>{video.snippet.channelTitle}</span>
                    </p>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default VideoItem;