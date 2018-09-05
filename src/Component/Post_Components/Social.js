import React from 'react';

//social icons
import comments from '../../static/images/chat.png';
import dislike from '../../static/images/dislike.png';
import like from '../../static/images/like.png';
import share from '../../static/images/share.png';
import view from '../../static/images/view.png';

export class Social extends React.Component {
  render() {
    return (<div className="social">

      <div className='share'>
        <img src={share}/>
        <span>{this.props.share}</span>
      </div>

      <div><img src={like}/>
        <span>{this.props.like}</span>
      </div>

      <div>
        <img src={dislike}/>
        <span>{this.props.dislike}</span>
      </div>

      <div><img src={comments}/>
        <span>{this.props.comments}</span>
      </div>

      <div><img src={view}/>
        <span>{this.props.postviews}</span>
      </div>

    </div>)
  }
}
