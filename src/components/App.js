import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';


class App extends Component {
    state = {
        artist:null,
        tracks: null
    }

    searchArtistHistory = (musicArtist) => {
        console.log('artists name:', musicArtist)
        fetch(`https://spotify-api-wrapper.appspot.com/artist/${musicArtist}`)
            .then(response => response.json())
            .then(json => {

                if (json.artists.total > 0) {
                    const artist = json.artists.items[0];
                    this.setState({ artist });

                    fetch(`https://spotify-api-wrapper.appspot.com/artist/${this.state.artist.id}/top-tracks`)
                        .then(response => response.json())
                        .then(json => {
                            this.setState({ tracks: json.tracks })

                        }).catch(error => console.log(error.message))
                }
            }).catch(error => console.log(error.message))
    }




    render() {


        return (
            <div>

                <h2>Music Master</h2>
                <Search searchArtistHistory={this.searchArtistHistory}/>
                <Artist artist={this.state.artist} />
                <Tracks tracks={this.state.tracks} />

            </div>

        )
    }

}


// const AppWithHeader = ()=>{

// }
export default App;
