import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCegKd2CfaWWI5xFYqludDONoqEzgMFx0A';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'kayaking'}, (videos) => {
			this.setState({ videos });
			//same as this.setState({ videos: videos });
			//can only be used in ES6 when key value pair is named the same
		});
	}
	render() {
		return (
		<div>
			<SearchBar />
			<VideoDetail video={this.state.videos[0]} />
			<VideoList videos={this.state.videos} />
		</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));