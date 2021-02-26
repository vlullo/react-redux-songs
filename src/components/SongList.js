import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}
// const SongList = songs => {
//     const renderedSongs = songs.map(song => {
//         return (
//             <div className="item" key={song.title}>
//                 <div className="right floated content">
//                     <button className="ui button primary">Select</button>
//                 </div>
//                 <div className="content">{song.title}</div>
//             </div>
//         );
//     });
//     return <div className="ui divided list">{renderedSongs}</div>;
// };

const mapStateToProps = state => { //you can name this function any way you want
    // console.log(state);
    return { songs: state.songs };
};

export default connect(
    mapStateToProps, 
    { selectSong }
)(SongList); 
//connect()(SongList) - Calls a function inside the connect function
//{selectSong: selectSong} - ES6 abbreviation
//{ selectSong } - By passing an action creator into the connect function, whenever we call props.actionCreator the connect funtion automatically takes the action that gets returned and throws it into the dispatch fuction for us (All of that is happening behind the scenes).
