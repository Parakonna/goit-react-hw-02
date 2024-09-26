import style from './FriendListItem.module.css'

const FriendListItem = ({ name, isOnline, avatar }) => {
  return (
    <div className={style.conteiner}>
          <img className={style.img} src={avatar} alt="Avatar" width="48" />
          <p className={style.name}>{name}</p>
          {isOnline ? <p className={style.online}>Online</p> : <p className={style.offline}>Offline</p>}
</div>
  )
}

export default FriendListItem