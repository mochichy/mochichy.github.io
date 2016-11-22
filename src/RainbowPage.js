import React from 'react';
import './css/RainbowPage.css'

var RainbowPage = React.createClass({
    getInitialState:function() {
        return {text:''};
    },

    update:function(event) {
        var value = event.target.value;
        this.setState({text:value});
    },

    render:function(){
        return (

            <div className="something">
            	<p>Having a bad day? Write some rainbow words to cheer yourself up!</p>
                <input onChange={this.update} placeholder="type something..." />
                <br/> 
                <text>{this.state.text}</text>
                <div className="intro">
                    <p>This was inspired by Nyan cat. Nyan cat is currently my favorite character. I always browse
                    through Nyan cat GIFs when I am having a bad day. I think rainbow brings happiness and I hope all of you who are looking
                    at my portfolio can have good day :)</p>
                    <iframe src="//giphy.com/embed/sIIhZliB2McAo" width="300" height="304" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
            </div>
        );

    }

});
export default RainbowPage;