import React from "react";
import { Segment, Icon } from "semantic-ui-react";
import "./comment.scss";

export default ({ data: { description } }) => {
  return (
    <Segment>
      <div className="comment-wrap">
        <div className="user-pic">
          <img
            src="https://robohash.org/sintrerumut.png?size=350x350&set=set1"
            alt="avatar"
          />
        </div>
        <div className="comment-content">
          <div className="comment-header">
            <span className="username">
              <a href="#">@{"username"}</a>
            </span>
            <div className="remove-comment">
              <Icon name="remove" />
            </div>
          </div>
          <span className="comment-text">{description}</span>
        </div>
      </div>
    </Segment>
  );
};
