import { createRef,useState } from 'react'
// import { useScreenshot } from 'use-react-screenshot'
import Examples from './Examples';
import './App.css'
import { ReplyIcon, RetweetIcon, LikeIcon, ShareIcon, VerifiedIcon } from './assets/icons'
// import { AvatarLoader } from './loader.jsx';
function App() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [isVerified, setIsVerified] = useState(true);
  const [tweet, setTweet] = useState();
  const [avatar, setAvatar] = useState();
  const [retweets, setRetweets] = useState();
  const [quoteTweets, setQuoteTweets] = useState();
  const [likes, setLikes] = useState();
  const [theme, setTheme] = useState('light');
  const [isShown, setIsShown] = useState(false);
  const showContext = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  let x = "./download.jpg"
  // const [image, takeScreenshot] = useScreenshot();
  const tweetFormat = tweet => {
    tweet = tweet
      .replace(/@([\w]+)/g, '<span>@$1</span>')
      .replace(/#([\wşçöğüıİ]+)/gi, '<span>#$1</span>')
      .replace(/(https?:\/\/[\w\.\/]+)/, '<span>$1</span>')
      .replace(/\n/g, '<br />');
    return tweet;
  };

  function avatarHandle(e) {
    console.log(e.target.files);
    setAvatar(URL.createObjectURL(e.target.files[0]));
}
const toggleTheme = () => {
    if (theme === 'light') {
     setTheme('dark');
      document.body.style.background='black'
    } else {
     setTheme('light');
  document.body.style.background='white'

    }
   };
  // const ref = createRef(null)
  // const [image, takeScreenshot] = useScreenshot()
  // const getImage = () => takeScreenshot(ref.current)
  return (
    <div className={`tweet-container ${theme}`}>
      <button id='theme' onClick={toggleTheme}>Toggle Theme</button>
      <div className="tweet">
        <div className="tweet-author">{
          <img src={avatar ||x} alt="ss" />
        }

          <div>
            <div className="name">{name || 'nurgun'}
              {isVerified && <VerifiedIcon width={19} />}
            </div>
            <div className="username">@{username || 'anonymous'}</div>
          </div>
        </div>
        <div className="tweet-content">
          <p dangerouslySetInnerHTML={{
            __html:
              (tweet && tweetFormat(tweet)) ||
              'bu test yazisidir'
          }} ></p>
        </div>
        <div className="tweet-stats">
          <span>
            <b>{retweets || 0} </b> retweet </span>
          <span>
            <b>{quoteTweets || 0} </b> quotations </span>
          <span>
            <b>{likes || 0}</b> like </span>
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
      <button onClick={showContext}>edit</button>
      {isShown && (
        <div className="tweet-settings">
        <h1>Tweet settings</h1>
        <ul>
          <li>
            <label htmlFor="">Name
              <input type="text" value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
          </li>
          <li>
            <label htmlFor="">Username
              <input type="text" value={username}
                onChange={e => setUsername(e.target.value)} />
            </label>
          </li>
          <li>
            <textarea name="" id="" cols="1" rows="1"
              placeholder='I think...'
              maxLength={50}
              value={tweet}
              onChange={e => setTweet(e.target.value)}
            ></textarea>
          </li>
          <li key={1}>
            <label>Retweet
              <input
                type="number"
                className="input"
                value={retweets}
                onChange={e => setRetweets(e.target.value)}
              />
            </label>
          </li>
          <li key={2}>
            <label>Quote
              <input
                type="number"
                className="input"
                value={quoteTweets}
                onChange={q => setQuoteTweets(q.target.value)}
              />
            </label>
          </li>
          <li key={3}>
            <label>Likelar
              <input
                type="number"
                className="input"
                value={likes}
                onChange={x => setLikes(x.target.value)}
              />
            </label>
          </li>
          <li key={4}>
            <label>Photo
              <input
                type="file"
                className="input"
                onChange={avatarHandle}
              />
            </label>
          </li>

        </ul>
      </div>
      )}
      <div id='sub' ></div>
      {/* <Examples/> */}
      
    </div>
  )
}

export default App
