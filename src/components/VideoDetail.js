
const VideoDetail = ({video}) =>{
    if(!video){
        return <div></div>;
    }
    return(
        <div className="row">
            <div className="col-md-12">
                <iframe className="w-100 vh-100 appVideoHeight"  src={`https://www.youtube.com/embed/${video.id.videoId}`} 
                    frameBorder="0"
                    title={video.snippet.title} 
                    allow="accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture" 
                        allowFullScreen>
                </iframe>
            </div>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <p>
                            <span>{video.snippet.title}</span>
                        </p>
                        <p>
                            <span>{video.snippet.description}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoDetail;