React.createClass({
    getInitialState: function () {
        nextImg: false,
    },
    handleClick: function () {
        this.setState({ nextImg: !this.state.nextImg })
    },
    render: function() {
        var imgUrl = this.state.nextImg ? this.state.nextImgSrc : this.state.song.imgSrc;
        var divStyle = {
            backgroundImage: 'url(' + imgUrl + ')'
        }

        return (
            <li>
                <div ref="image-pane" style={divStyle} onClick={this.handleClick} className="player"></div>
            </li>
        )
    }
});