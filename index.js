document.getElementById("childsafe").addEventListener("submit",function(e){
    e.preventDefault();
    const data={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        passs:document.getElementById("pass").value,
        who:document.getElementById("who").value
    };
    fetch("http://localhost:8082/child/create",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(res=>{
        alert("Data Saved Successfully");
        console.log(res);
    })
    .catch(err=>console.log(err));
});