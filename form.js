const buttoncalled=document.getElementById("button");
buttoncalled.addEventListener('click', submit)
const getButtoncalled=document.getElementById("get");
getButtoncalled.addEventListener('click', get)

function submit(){
    let name1=document.getElementById("name").value;
    let name2=document.getElementById("phonenumber").value;
    let name3=document.getElementById("mail").value;
    let name4=document.getElementById("password").value;
    let name5=document.getElementById("feedback").value;
    let request = new Request('http://localhost:8080/registrations',{
        headers: new Headers({
            
            'Content-type': 'application/json'
        }),
        method: 'POST',
        body: JSON.stringify({
            "name": name1,
            "phonenumber": name2,
            "mail": name3,
            "password": name4,
            "feedback": name5
        })
        
});
fetch(request).then((response)=>{
    console.log(response);
    response.json().then((data)=>{
        console.log(data);
    })
})
}
function refresh(){
    window.location.reload();
}