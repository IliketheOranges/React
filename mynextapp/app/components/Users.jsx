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
        <div>
            {users.map((user) => (
            <div className="usuarios">
                <p>{user.id}</p>
                <p>{user.email}</p>
                <p>{user.last_name}</p>
            </div>))}
        </div>
    );
}