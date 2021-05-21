export interface item{
    id:number;
    email:string;
    first_name:string;
    last_name:string;
    avatar:string;
}
export interface Details{
    page:number;
    per_page:number;
    total:number;
    total_pages:number;
    data:{
        [key:string]:item
    };

}