export const getPost = async ()=>{
    const apiResponse = await fetch('http://localhost:3000/posts');
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