const url = "https://reqres.in/api/users/"  

export default async function idUserPage({params}){

    const result = await fetch(url + params.id);
    
    const js = await result.json();

    console.log(js);

    return(
        <div className="usuario columns-3">
            <p>{js.data.id}</p>
            <p>{js.data.email}</p>
            <p>{js.data.last_name}</p>
            <img src={js.data.avatar}></img>
        </div>
    );
}