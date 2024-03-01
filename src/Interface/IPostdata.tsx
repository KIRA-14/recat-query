export interface IPostData{
    [index: number]: IPost
}

export interface IPost{
    id: number,
    title: string,
    views: number
}