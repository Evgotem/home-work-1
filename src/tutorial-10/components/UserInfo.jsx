import React from 'react'

export const UserInfo = ({userData}) => {
  return (
    <div className="app-user">
      <div className="app-user_info">
        <div className="app-user_image">
          <img src="./assets/img/avatar.png" alt="" />
        </div>
        <div className="app-user_data">
          <h1 className="app-user_name">
            {userData.name}
            <span>@{userData.login}</span>
          </h1>
          <p className="app-user_about">
          {userData.bio}
          </p>
        </div>
      </div>
      <ul className="app-user_stats">
        <li className="app-user_stats-item">
          Репозитории
          <span>{userData.public_repos}</span>
        </li>
        <li className="app-user_stats-item">
          Подписчиков
          <span>{userData.followers}</span>
        </li>
        <li className="app-user_stats-item">
          <a href={userData.html_url} target='_blank' className='github-link'>
          <svg height="32" viewBox="0 0 16 16" width="32">
            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          </a>
        </li>
      </ul>
      <ul className="app-user_location">
        <li className="app-user_location-item">{userData.location}</li>
        <li className="app-user_location-item">
          <a href="http://archakov.im">{userData.blog}</a>
        </li>
      </ul>
    </div>
  )
}
