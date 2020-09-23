import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import {
  VerifiedUser,
  ChatBubbleOutline,
  Repeat,
  FavoriteBorder,
  Publish
} from '@material-ui/icons';

function Post({
  displayName,
  username,
  verified,
  text,
  image,
  avatar
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://avatars1.githubusercontent.com/u/31204077?s=200&v=4" />
      </div>

      <div className="post__body">

        <div className="post__header">
          <div className="post__headertext">
            <h3>
              Dushukhin Igor{" "}
              <span className="post__headerSpecial">
                <VerifiedUser className="post__badge" />
                @Ingwar92
              </span>
            </h3>
          </div>

          <div className="post__headerDescription">
            <p>build Twitter clone!</p>
          </div>
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_rr88ZCxi69-M50z5fj2PDkX0Xl_W0Q3InQ&usqp=CAU"
          alt=""
        />

        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;