import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Segment, Icon, Dimmer, Button } from "semantic-ui-react";
import "./comment.scss";

import * as actions from "../../../../../../Actions/singleProduct.actions";

export default connect(
  ({ singleProductReducer }) => ({ ...singleProductReducer }),
  (dispatch) => ({ ...bindActionCreators(actions, dispatch) })
)(
  ({
    data: { description, createdAt, id, product_id },
    deleteComment,
    deletingComment,
  }) => {
    const [active, handleActive] = React.useState(false);
    const date = new Date(createdAt);

    return (
      <Segment>
        <Dimmer.Dimmable dimmed={active} blurring>
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
                  <span>at {date.toLocaleString()}</span>
                </span>
                <div className="remove-comment">
                  <Icon name="remove" onClick={() => handleActive(true)} />
                </div>
              </div>
              <span className="comment-text">{description}</span>
            </div>
          </div>
          <Dimmer active={active} inverted>
            <div className="remove-comment-choice">
              <Button
                disabled={deletingComment}
                size="tiny"
                onClick={() => handleActive(false)}
                color="black"
              >
                Cancel
              </Button>
              <Button
                loading={deletingComment}
                size="tiny"
                onClick={() => {
                  deleteComment({
                    productId: product_id,
                    commentId: id,
                  }).then((res) => handleActive(false));
                }}
                style={{ marginLeft: "20px" }}
                color="youtube"
              >
                Delete
              </Button>
            </div>
          </Dimmer>
        </Dimmer.Dimmable>
      </Segment>
    );
  }
);
