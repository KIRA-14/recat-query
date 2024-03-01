export interface IPostData{
    posts:[IPost],
}

export interface IPost{
    id: number,
    title: string,
    views: number
}