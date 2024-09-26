import style from './Profile.module.css'

const Profile = ({name, tag, location, image, stats}) => {
  return (
      <div className={style.userInfo}>
        <div className={style.img}>
          <img className={style.icon}
            src={image}
            alt="User avatar"
           />
          <p className={style.name}>{name}</p>
          <p className={style.gmail}>@{tag}</p>
          <p className={style.location}>{location}</p>
        </div>
        <ul className={style.list}>
          <li className={style.item}>
            <span className={style.sp}>Followers</span>
            <span className={style.fol}>{stats.followers}</span>
          </li>
          <li className={style.item}>
            <span className={style.sp}>Views</span>
            <span className={style.fol}>{stats.views}</span>
          </li>
          <li className={style.item}>
            <span className={style.sp}>Likes</span>
            <span className={style.fol}>{stats.likes}</span>
          </li>
        </ul>
      </div>
  )
}

export default Profile