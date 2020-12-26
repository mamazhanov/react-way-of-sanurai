import React from "react";
import styles from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0){
        props.setUsers([
            {
                id: 1,
                followed: false,
                fullName: 'Dima',
                status: 'We all boss\'s',
                location: {city: 'Moscow', country: 'Russia'},
                photoUrl: 'icon.png'
            },
            {
                id: 2,
                followed: true,
                fullName: 'Vasya',
                status: 'We all boss\'s',
                location: {city: 'Moscow', country: 'Russia'},
                photoUrl: 'icon.png'
            },
            {
                id: 3,
                followed: false,
                fullName: 'Lena',
                status: 'We all boss\'s',
                location: {city: 'Moscow', country: 'Russia'},
                photoUrl: 'icon.png'
            },
            {
                id: 4,
                followed: true,
                fullName: 'Sasha',
                status: 'We all boss\'s',
                location: {city: 'Moscow', country: 'Russia'},
                photoUrl: 'icon.png'
            }
        ])
    }

    return (
        <div>
            {
                props.users.map( u =>
                    <div key={u.id} className={styles.usersPage}>
                        <div className={styles.users}>
                            <div className={styles.ava}>
                                <div>
                                    <img src={u.photoUrl}/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={ () =>{props.unfollow(u.id)} }>Unfollow</button>
                                        : <button onClick={ () => {props.follow(u.id)} }>Follow</button>}
                                </div>
                            </div>
                            <div className={styles.description}>
                                <div>
                                    <div>{u.fullName}</div>
                                    <div className={styles.status}>{u.status}</div>
                                </div>
                                <div>
                                    <div>{u.location.city}</div>
                                    <div>{u.location.country}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;