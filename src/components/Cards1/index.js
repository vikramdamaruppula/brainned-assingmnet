import './index.css'

const Cards1 = props => {
  const {userDetails} = props
  const {login, avatarUrl, url} = userDetails
  return (
    <li className="list-container">
      <img src={avatarUrl} alt="user" className="image1" />
      <div className="list-inner-container1">
        <p> {login}</p>
        <a href={url} className="link">
          {url}
        </a>
        <div className="top-container">
          <div className="top-container-1">
            <p> Articles</p>
            <span> 38</span>
          </div>
          <div className="top-container-1">
            <p> followers</p>
            <span> 980</span>
          </div>
          <div className="top-container-1">
            <p> Rating</p>
            <span> 89</span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Cards1