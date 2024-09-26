import FriendListItem from '../FriendListItem/FriendListItem'
import style from "./FriendList.module.css"

const FriendList = ({ friends }) => {
    return (
        <ul className={style.list} >
            {friends.map((FrItem) => {
                return (<li className={style.item} key={FrItem.id}>
                    <FriendListItem name={FrItem.name}
                        avatar={FrItem.avatar}
                        isOnline={FrItem.isOnline} />
                </li>
                )
            })
            }
</ul>      
  )
}

export default FriendList