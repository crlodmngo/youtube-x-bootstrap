import React from 'react';
import SearchBar from './components/Searchbar';
import youtube from './APIs/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import './app.css';
class App extends React.Component {
    state = {videos: [],selectedVideo: null};
    onTermSubmit =  async searchValue =>{
        const response = await youtube.get('/search',{
            params:{
                q: searchValue
            }
        });
        this.setState({videos: response.data.items});
        this.setState({selectedVideo: null});
    };

    onVideoSelect = (video) => {
        if(video.id.kind === 'youtube#video'){
            this.setState({selectedVideo: video});
        }
        else{
            alert('selection on channels is coming soon! :)');
        }
    }
    render(){
        if(this.state.selectedVideo){
            return (
                <div className="containter">
                    <div className="vh-100 py-5 d-flex justify-content-center row">
                        <div className="col-md-10">
                            <div className="card">
                                <div className="card-header text-center">
                                    <span className="font-weight-bold">Youtube x Bootstrap</span>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <SearchBar onFormSubmit={this.onTermSubmit} />
                                        </div>
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-9">
                                                    <VideoDetail video={this.state.selectedVideo}/>
                                                </div>
                                                <div className="col-md-3">
                                                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            );
        }
        else{
            return(
                <div className="containter">
                    <div className="vh-100 py-5 d-flex justify-content-center row">
                        <div className="col-md-10">
                            <div className="card">
                                <div className="card-header text-center">
                                    <span className="font-weight-bold">Youtube x Bootstrap</span>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <SearchBar onFormSubmit={this.onTermSubmit} />
                                        </div>
                                        
                                        <div className="col-md-12">
                                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default App;