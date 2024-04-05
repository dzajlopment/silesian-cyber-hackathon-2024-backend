export default function validateId(id: string){
    //24 character length string with only letters a-f lower and uppercase
    return id.match(/^[0-9a-fA-F]{24}$/);
}