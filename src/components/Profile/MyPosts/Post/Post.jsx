import React from 'react';
import s from './Post.module.css';


const Post = (props) => {

  return (
    <div className={s.item}>

        <div className={s.user}>
            <img src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' />
            <p>UserName</p>
        </div>

        <div className={s.posts}>
            { props.message }
        </div>

        <div className={s.postFooter}>
            <span>like</span> { props.likesCount }
        </div>

    </div>
  )
}

export default Post;