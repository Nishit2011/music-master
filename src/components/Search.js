import React, {Component} from 'react';

class Search extends Component{

    state ={
        musicArtist: ''
    }

    getArtistName = event => {

        this.setState({ musicArtist: event.target.value });

    }

    handleArtistName = event => {
        if (event.key === 'Enter') {

            this.searchArtist();
        }


    }

    searchArtist = () =>{
        {console.log('musicArtist:---',this.state.musicArtist)}
        this.props.searchArtistHistory(this.state.musicArtist);
    }

    render(){
       
        return(
            <div>
            <input type="text"
                    onChange={this.getArtistName}
                    onKeyPress={this.handleArtistName}
                    placeholder="Please Enter a Music Artist name" />
                <input type="submit" value="Search" onClick={this.searchArtist} />

            </div>
        )
    }

}

export default Search