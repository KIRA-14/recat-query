import React from 'react'

interface IAddPost{
  mutate: Function
  id: number
}
function AddPost(props:IAddPost) {
  const { mutate, id } = props;
  const handelSubmit =(e: { target:any, preventDefault:Function })=>{
    e.preventDefault();
    const fromData = new FormData(e.target);
    const title  = fromData.get('title');
    const views = fromData.get('views');
    mutate({id,title,views})
  }

  return (
    <form onSubmit={ handelSubmit }>
        <input name="title"/>
        <input name="views" />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default AddPost