export function updateUser(update) {
    return new Promise(async(resolve) => {
        const  response = await fetch('http://localhost:8000/users/'+update.id,{
            method:'PATCH',
            body:JSON.stringify(update),
            headers:{'content-type':'application/json'},
        });
        const data = await response.json();
        resolve({data});
    })
}