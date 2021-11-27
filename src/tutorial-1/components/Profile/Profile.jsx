import React from 'react'
import classes from './Profile.module.css'

// class Profile extends React.Component {
//   render() {
//     const registerDay = this.props.registredAt.getDate();
//     const registerMonth = this.props.registredAt.getMonth();
//     const registerYear = this.props.registredAt.getFullYear();

//     const months = [
//       'января',
//       'февраля',
//       'марта',
//       'апреля',
//       'мая',
//       'июня',
//       'июля',
//       'августа',
//       'сентября',
//       'октября',
//       'ноября',
//       'декабря',
//     ];

//     return (
//       <div className={classes.wrapper}>
//         <p>Привет, <b>{this.props.name}!</b></p>
//         <p>Дата регистрации: {`${registerDay} ${months[registerMonth]} ${registerYear}`}</p>
//       </div>
//     )
//   }
// }

const Profile = props => {

  const registerDay = props.registredAt.getDate();
  const registerMonth = props.registredAt.getMonth();
  const registerYear = props.registredAt.getFullYear();

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  return (
    <div className={classes.wrapper}>
      <p>Привет, <b>{props.name}!</b></p>
      <p>Дата регистрации: {`${registerDay} ${months[registerMonth]} ${registerYear}`}</p>
    </div>
  )
}

export default Profile
