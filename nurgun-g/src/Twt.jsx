import { createRef, useState } from 'react'
import './App.css'
import { useScreenshot, createFileName } from "use-react-screenshot";
import { ReplyIcon, RetweetIcon, LikeIcon, ShareIcon, VerifiedIcon, Sun, Pen, Save, TwitterIcon } from './assets/icons'
function Twt() {
  const [name, setName] = useState('anonymous');
  const [username, setUsername] = useState('anonymous');
  const [isVerified, setIsVerified] = useState(true);
  const [tweet, setTweet] = useState(0);
  const [avatar, setAvatar] = useState(null);
  const [retweets, setRetweets] = useState(0);
  const [quoteTweets, setQuoteTweets] = useState(0);
  const [likes, setLikes] = useState(0);
  const [theme, setTheme] = useState('light');
  const [isShown, setIsShown] = useState(false);
  const ref = createRef(null);
  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);
  const showContext = event => {
    setIsShown(current => !current);
  };
  let comment = (event) => {
    setQuoteTweets(Number(quoteTweets) == 0 && Number(quoteTweets) + 1);


  }
  let reply = (event) => {
    let toadd2 = document.querySelector('.tweet');
    let toadd = document.querySelector('.tweet');
    toadd2.append(toadd)
  }
  let arrow = (event) => {
    setRetweets(Number(retweets) == 0 && Number(retweets) + 1)
  }
  let liked = (event) => {
    setLikes(Number(likes) == 0 && Number(likes) + 1)

  }
  let x = "./download.jpg"
  const tweetFormat = tweet => {
    tweet = tweet
      .replace(/@([\w]+)/g, '<span className="xt">@$1</span>')
      .replace(/#([\wşçöğüıİ]+)/gi, '<span className="xt">#$1</span>')
      .replace(/(https?:\/\/[\w\.\/]+)/, '<span className="xt">$1</span>')
      .replace(/\n/g, '<br />');
    return tweet;
  };



  function avatarHandle(e) {
    console.log(e.target.files);
    setAvatar(URL.createObjectURL(e.target.files[0]));
  }
  function replied() {
    let b = document.querySelector('.reply')
    console.log(b)
    b.classList.toggle('hid')

  }
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.background = 'linear-gradient(to bottom, rgba(0,1,0,0) 0%,rgba(0,0,0,0.01) 1%,rgba(0,0,0,1) 100%)';
    } else {
      setTheme('light');
      document.body.style.background = 'aliceblue'
    }
  };
  return (
    <div className={`tweet-container ${theme}`} id='photo'>

      <div className="tweet" ref={ref}>
        <div className="tweet-author">
          <div>
            {
              <img src={avatar || x} alt="ss" />
            }
          </div>
          <div>
            <div className="name">{name || 'nurgun'}
              <div className='icons'>
                {isVerified && <VerifiedIcon width={19} />}

              </div>

            </div>
            <div className="username">@{username || 'anonymous'}
            </div>

          </div>
          <div className='iconn'>
            <TwitterIcon />
          </div>

        </div>

        <div className="tweet-content">
          <p dangerouslySetInnerHTML={{
            __html:
              (tweet && tweetFormat(tweet)) ||
              'bu test yazisidir'
          }} ></p>
          <p className='date'>
            4:50 PM · Sep 29, 1890
           <span className='infoo'>
           Twitter for iPhone
           </span>

          </p>
        </div>
        <div className="tweet-stats">
          <span>
            <b>{retweets} </b> retweet </span>
          <span>
            <b>{quoteTweets} </b> quotations </span>
          <span>
            <b>{likes}</b> likes </span>
        </div>
        <div className="tweet-actions">
          <button id='ans' onClick={comment}>
            <ReplyIcon />
          </button>
          <button onClick={arrow}>
            <RetweetIcon />
          </button>
          <button onClick={liked}>
            <LikeIcon />
          </button>
          <button>
            <ShareIcon />
          </button>
        </div>
        <div className="tweet reply">
          <div className="tweet-content">
            <p >
              <input id='rep' type="text" />
            </p>
            <p className='date'>
            4:50 PM · Sep 29, 1890
           <span className='infoo'>
           Twitter for iPhone
           </span>

          </p>
          </div>
          <div className="tweet-stats">
            <span>
              <b>{retweets} </b> retweet </span>
            <span>
              <b>{quoteTweets} </b> quotations </span>
            <span>
              <b>{likes}</b> likes </span>
          </div>
          <div className="tweet-actions">
            <button id='ans' onClick={comment}>
              <ReplyIcon />
            </button>
            <button onClick={arrow}>
              <RetweetIcon />
            </button>
            <button onClick={liked}>
              <LikeIcon />
            </button>
            <button>
              <ShareIcon />
            </button>
          </div>
        </div>
      </div>
      <div className='tools'>
        <button className='edit' onClick={showContext}><Pen /></button>
        <button onClick={downloadScreenshot} id='save'>
          <Save />
        </button>
        <button id='theme' onClick={toggleTheme}><Sun /></button>
        <button id='answer2' onClick={replied}>
          <ReplyIcon />
        </button>

      </div>
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
              <label htmlFor="">
                I think
                <textarea name="" id="" cols="1" rows="1"

                  maxLength={50}
                  value={tweet}
                  onChange={e => setTweet(e.target.value)}
                ></textarea>
              </label>
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
              <label>Likes
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


    </div>

  )

}

export default Twt
