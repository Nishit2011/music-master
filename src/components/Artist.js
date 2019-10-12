import React from 'react';

const Artist = ({artist}) =>{
    if (!artist) return null 
 console.log(artist)
 const {images,name,type,popularity,followers,genres} = artist
    return(
        <div>
        <h3>Name: {name}</h3>
        <h4>Followers: {followers.total}</h4>
        <h4>Genres: {genres.join(',')}</h4>
        <h4>Popularity: {popularity}</h4>
        <img src={images[0] && images[0]["url"]} alt="artistImg" style={{width:200, height:200, borderRadius:100}}/>
        </div>
    )
}
export default Artist