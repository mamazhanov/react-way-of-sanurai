import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = (props) => {

    if (!props.profile){
        return <Preloader/>
    }
debugger
    return (
        <div>
            <div className={s.descriptionBlock}>
                
                <div>
                    <img className={s.ava} src={props.profile.photos.large != null ? props.profile.photos.small : userPhoto}/>
                </div>
                
                <div className={s.description}>
                    <h2> {props.profile.fullName}</h2>
                    <div>
                        О мне: {props.profile.aboutMe} <br/>
                        Ищу описание работы: {props.profile.lookingForAJobDescription}
                        {props.profile.lookingForAJob ? <p>Безработник</p> : <h2>Работает</h2>}
                    </div>
                    <div className={s.contacts}>
                        <div className={s.contacts}>
                            {props.profile.contacts.facebook ?
                                <a href={props.profile.contacts.facebook} title={props.profile.contacts.facebook}>
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/145/145802.svg" alt=""/>
                                </a> : ''
                            }
                            { props.profile.contacts.vk ?
                                <a href={props.profile.contacts.vk} title={props.profile.contacts.vk}>
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/145/145813.svg" alt=""/>
                                </a> : ''
                            }
                            {props.profile.contacts.instagram ?
                                <a href={props.profile.contacts.instagram} title={props.profile.contacts.instagram}>
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/185/185985.svg" alt=""/>
                                </a> : ''
                            }
                            {props.profile.contacts.youtube ?
                                <a href={props.profile.contacts.youtube} title={props.profile.contacts.youtube}>
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/187/187209.svg" alt=""/>
                                </a> : ''
                            }
                            {props.profile.contacts.twitter ?
                                <a href={props.profile.contacts.twitter} title={props.profile.contacts.twitter}>
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/145/145812.svg" alt=""/>
                                </a> : ''
                            }
                            {props.profile.contacts.github ?
                                <a href={props.profile.contacts.github} title={props.profile.contacts.github}>
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/733/733609.svg" alt=""/>
                                </a> : ''
                            }
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProfileInfo;