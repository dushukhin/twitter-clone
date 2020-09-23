import React from 'react';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from "react-twitter-embed";
import { Search } from '@material-ui/icons';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening?</h2>

        <TwitterTweetEmbed tweetId="858551177860055040" />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={ "https://telegram.me/Ingwar92" }
          options={{ text: "#reactjs is zbs", via:"Ingwar92" }}
        />
      </div>
    </div>
  );
}

export default Widgets;