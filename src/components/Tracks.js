import React, {Component} from 'react';

class Tracks extends Component{
    state = {
        play:false,
        audio:null,
        previewUrl:null
    }

    playAudioPreview = preview_url => () =>{
        const audio = new Audio(preview_url);
        if(!this.state.play){
            audio.play();
            this.setState({play:true,audio, previewUrl:preview_url})
            
        }else{
            this.state.audio.pause();
            if(this.state.previewUrl === preview_url){
                
                this.setState({play:false})
            }else{
                audio.play()
                this.setState({audio, previewUrl:preview_url})
            }
           
        }
       
    }
   
    render(){
        const {tracks} = this.props;
        if(!tracks) return null
        return(
            <div>
               <ul>
              { 
                  tracks.map(track=>{
                   const {id, name, album, preview_url} = track;
                   return (<div key={id} onClick={this.playAudioPreview(preview_url)}> 
                       <span>
                       <img src={album.images[0].url} alt="trackImg" style={{height:50,width:50,display:'inline'}}/>
                       <p>{name}</p>
                       </span>
    
                   </div>)
               })
               }
               </ul>
        
            </div>
        )
    }
}

export default Tracks