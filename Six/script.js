const insert = document.getElementById("insert");

window.addEventListener("keydown",(e)=>{
    console.log(e.key,e.code);
    insert.innerHTML=
    `<table border='1'>
            <tr>
                <th>key Name</th>
                <th>Key Code</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key === ' ' ? 'Space' : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    `;
})