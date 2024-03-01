import { IPost } from "../Interface/IPostdata";

export const getPost = async ()=>{
    const apiResponse = await fetch('http://localhost:3000/posts');
    const responseData = await apiResponse.json();
    return responseData;
}
export const getLastId= async ()=>{
    const response:[IPost] = await getPost();
    const data  = response.map(item=>Number(item.id)).sort((a,b)=>b-a);
    console.log(data);
    const newItemId: number = data[0] + 1;
    console.log(newItemId)
    return newItemId;
}

export const addNewPost = async (requestBody: {})=>{
    const apiResponse = await fetch('http://localhost:3000/posts',{
        method:'POST',
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(requestBody)
    });
    const responseData = await apiResponse.json();
    return responseData;
}

export const getComments = async ()=>{
    const apiResponse = await fetch('http://localhost:3000/comments');
    const responseData = await apiResponse.json();
    return responseData;
}


export const getProfile = async ()=>{
    const apiResponse = await fetch('http://localhost:3000/profile');
    const responseData = await apiResponse.json();
    return responseData;
}

function item(value: never, index: number, array: never[]): unknown {
    throw new Error("Function not implemented.");
}
