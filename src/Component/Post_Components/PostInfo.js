import React from 'react'

export class PostInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "110px"
    }
    this.ReedMore = this.ReedMore.bind(this)
  }
  ReedMore() {

    if (this.state.height == "110px") {
      this.setState({height: "auto"})
    } else {
      this.setState({height: "110px"})
    }
  }
  render() {
    return (<div className="postInfo">
      <img className="postFoto" src={this.props.postFoto}/>

      <p style={{
          "height" : this.state.height
        }} className='postText'>{this.props.postText}
      </p>

      <span onClick={this.ReedMore}>
        {
          this.props.postText.length > 415 && this.state.height == "110px"
            ? "Reed more"
            : ""
        }
        {
          this.state.height == "auto"
            ? "Close"
            : ""
        }

      </span>
    </div>)
  };
}
