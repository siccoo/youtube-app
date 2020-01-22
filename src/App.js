import React from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetail } from './components/';

import youtube from './api/youtube';

class App extends React.Component {
    state = {
        video: [],
        selectedVideo: null,
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: { 
                part: 'snippet',
                maxResult: 3,
                key: 'AIzaSyDBghoqfsf5Gp4IwZgNWSr0BJMq_UVPgdc', 
                q: searchTerm, 
                // [API_KEY]
            }
        });
        // console.log(response.data.items);
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });    
    } 

    render() {
        return (
            <Grid justify="center" container spacing={10}>
                <Grid items xs={9}>
                    <Grid container spacing={10}>
                        <Grid item xs={9}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail /> 
                        </Grid>
                        <Grid item xs={4}>
                            {/* VIDEO LIST */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;