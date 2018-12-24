import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDtail from './VideoDetail';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        //console.log(response);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items.length > 0 ? response.data.items[0] : null
        });
    };

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        });
    };

    componentDidMount(){
        this.onTermSubmit('foods');
    }

    render(){
        return (
            <div className="ui container">                
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDtail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                videos={this.state.videos} 
                                onVideoSelect={this.onVideoSelect} 
                            />                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;