import { createRef,useState } from 'react'
// import { useScreenshot } from 'use-react-screenshot'
import './App.css'
import { ReplyIcon, RetweetIcon, LikeIcon, ShareIcon, VerifiedIcon } from './assets/icons'
// import { AvatarLoader } from './loader.jsx';
function Examples() {

  return (
    <div className="tweet-container">
      <div className="tweet">
        <div className="tweet-author">{
          <img src='' alt="ss" />
        }

          <div>
            <div className="name">mickey
               
            </div>
            <div className="username">mickey mouse</div>
          </div>
        </div>
        <div className="tweet-content">
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quae repudiandae tempora vel minima modi, nihil molestias laudantium inventore ab voluptatibus aliquid earum aliquam, explicabo ipsum saepe, labore incidunt esse.</p>
        </div>
        <div className="tweet-stats">
          <span>
            <b>12 </b> retweet </span>
          <span>
            <b>22</b> alinti </span>
          <span>
            <b>33</b> like </span>
        </div>
        <div className="tweet-actions">
          <span>
            <ReplyIcon />
          </span>
          <span>
            <RetweetIcon />
          </span>
          <span>
            <LikeIcon />
          </span>
          <span>
            <ShareIcon />
          </span>
        </div>

      </div>
      
      
    </div>
  )
}

export default Examples
