import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user1.webp'
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id} className={styles.usersPage}>
                        <div className={styles.users}>

                            <div className={styles.ava}>
                                <NavLink to={'/profile/' + u.id}>
                                    <div>
                                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                                    </div>
                                </NavLink>
                                <div>
                                    {u.followed
                                        ? <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={() => {
                                            props.toggleFollowingProgress(true, u.id);
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "e9f77a73-7b1d-438b-9e96-62fe289ce549"
                                                }
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode == 0) {
                                                        props.unfollow(u.id)
                                                    }
                                                    props.toggleFollowingProgress(false,u.id);
                                                });
                                        }}>Unfollow</button>

                                        : <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={() => {
                                            props.toggleFollowingProgress(true, u.id);
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "e9f77a73-7b1d-438b-9e96-62fe289ce549"
                                                }
                                            })
                                                .then(response => {
                                                   if (response.data.resultCode == 0) {
                                                       props.follow(u.id)
                                                   }
                                                    props.toggleFollowingProgress(false, u.id);
                                                });
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

            <div>
                { props.isFetching ? <Preloader />: null }
            </div>

            <div className={styles.pagination_block}>
                {
                    pages.map( p => {
                        return <span className={props.currentPage === p && styles.selectedPage}
                                     title={p}
                                     onClick={ (event => {props.onPageChanged(p); } ) }>{p}</span>
                    })
                }
            </div>

        </div>
    )
}

export default Users;