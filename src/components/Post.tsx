import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getPost } from '../api/api';
import Loader from './CommonComponents/Loader';
import { IPost } from '../Interface/IPostdata';




function Post() {

  const { data: postData, isLoading, isError, error, status } = useQuery({
    queryKey: ['post'],
    queryFn: getPost
  });

  console.log(status, postData)
  return (
    <div className='post_container'>
      {isLoading && <Loader />}
      {isError && <p>{error?.message}</p>}
      {postData && postData.map(({ id, title, views }: IPost) => {
        return (
        <div key={id}>
          <p>{title}<span >{views}</span></p>
        </div>
        )
      })}
    </div>

  )
}

export default Post