import React from 'react';

import { addPostAC, onChangeTextAreaAC } from '../../../../redux/profile-reducer';

import { RootStateType, store } from '../../../../redux/redux-store';
import { MyPosts } from './MyPosts';
import { Post } from './Post/Post';
import { connect, useSelector } from 'react-redux';
import { ProfilePageType } from '../../../../redux/state';



type MyPostsContainerPropsType = {
  // myPostData: MyPostDataType[]
  // addPost: () => void
  // newPostText: string
  // updateNewPost: (newPostText: string) => void
  // dispatch: (action: any) => void
}




export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {
  const profilePage = useSelector<RootStateType, ProfilePageType>(state => state.profilePage)
  console.log(profilePage);
  // const profilePage = useSelector<RootStateType, ProfilePageType>(state => state.profilePage)

  // const newPostElement = useRef<HTMLTextAreaElement>(null)

  const addPostH = () => {
    store.dispatch(addPostAC());
  }

  const onChangeTextArea = (text: string) => {
    // let textFromTexArea = e.currentTarget.value;
    let action = onChangeTextAreaAC(text);
    store.dispatch(action);
  }

  //  const myPostsElement = store.getState().profilePage.myPostData
  // console.log(myPostsElement);

  return (
    <MyPosts
      updateNewTextAreaText={onChangeTextArea}
      updateAddPost={addPostH}
      posts={profilePage}
    />
  )
}


//connect
// const mapStateToProps = () => {
//   return {
//     myPostsData: store.getState().profilePage.myPostData
//   }
// }

// const mapDispatchToProps = () => {
//   return {
//     updateNewTextAreaText: (text: string) => {
//       let action = onChangeTextAreaAC(text);
//       store.dispatch(action);
//     },
//     updateAddPost: () => {
//       store.dispatch(addPostAC());
//     }
//   }
// }

// export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);