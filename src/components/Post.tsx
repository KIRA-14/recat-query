import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { addNewPost, getLastId, getPost } from '../api/api';
import Loader from './CommonComponents/Loader';
import { IPost } from '../Interface/IPostdata';
import AddPost from './AddPost';




function Post() {

  const queryClient  = useQueryClient();
  
  const { data: postData, isLoading, isError, error } = useQuery({
    queryKey: ['post'],
    queryFn: getPost,
    staleTime: Infinity
  });

  const { data: id, refetch: getIDRefresh} = useQuery({
    queryKey: ['getID'],
    queryFn: getLastId,
    enabled: false
  });

  const {mutate, isLoading: isAddPostLoading}=useMutation({
    mutationFn: addNewPost,
    onMutate: ()=>{
      getIDRefresh()
    },
    onSuccess: ()=>{
      queryClient.invalidateQueries({
        queryKey: ['post'],
        exact:true
      })
    },
    onError:()=>{ console.log('error')},
    onSettled:()=>{ console.log('done') }
  })

  return (
    <div className='post_container'>
      {isLoading && isAddPostLoading && <Loader />}
      {isError && <p>{error?.message}</p>}
      <AddPost mutate={mutate} id={id || 0}/>
      {postData?.map(({ id, title, views }: IPost) => {
        return (
        <div key={id}>
          <p>{title}<span >--{views}</span></p>
        </div>
        )
      })}
    </div>

  )
}

export default Post