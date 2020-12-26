import React from "react";
import styles from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/user1.webp'

class Users extends React.Component {

    constructor(props) {
        super(props);
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            })
    }


    render() {
        return (
            <div>
                {
                    this.props.users.map(u =>
                        <div key={u.id} className={styles.usersPage}>
                            <div className={styles.users}>
                                <div className={styles.ava}>
                                    <div>
                                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                    </div>
                                    <div>
                                        {u.followed
                                            ? <button onClick={() => {
                                                this.props.unfollow(u.id)
                                            }}>Unfollow</button>
                                            : <button onClick={() => {
                                                this.props.follow(u.id)
                                            }}>Follow</button>}
                                    </div>
                                </div>
                                <div className={styles.description}>
                                    <div>
                                        <div>{u.name}</div>
                                        <div className={styles.status}>{u.status}</div>
                                    </div>
                                    <div>
                                        <div>{"u.location.city"}</div>
                                        <div>{"u.location.country"}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Users;