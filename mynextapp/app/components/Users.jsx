const url = "https://reqres.in/api/users"

async function getUsers(){
    const result = await fetch(url);
    const js = await result.json();
    console.log(js);
    return js.data;
}


export default async function Users(){
    const users = await getUsers();
    
    return(
        <div className="flex flex-wrap">
            {users.map((user) => (
            <div className="usuarios bg-amber-300  p-2 sm:w-full md:w-1/2 lg:w-1/4">
                <p>{user.id}</p>
                <p>{user.email}</p>
                <p>{user.last_name}</p>
                <img src={user.avatar}></img>
            </div>))}
        </div>
    );
}