async function callStudentWS(url, method, sentData = {}) {
    let data;
    if (method == "insert") {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' },
            body: JSON.stringify(sentData)
        });
        data = await response.json();
    } 
    else if (method == "update") {
        let response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' },
                body: JSON.stringify(sentData)
        });
        data = await response.json();
    }
    else if (method == "delete") {
        let response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' },
                body: JSON.stringify(sentData)
        });
        data = await response.json();
    } 
    else if (method == "select") {
        let response = await fetch(url, {
            method: 'GET'
        });
        data = await response.json();
    } 
    else if (method == "selectall") {
        let response = await fetch(url, {
            method: 'GET'
        });
        data = await response.json();
    } 
    return data;
}
const output = document.getElementById("output");

let insertBtnRef = document.querySelector("#insert");
insertBtnRef.addEventListener("click", () => {
    let student = {
        StudentID : document.getElementById("input_id").value,
        "Firstname": document.getElementById("input_fname").value,
        "Lastname": document.getElementById("input_lname").value,
        "DOB": document.getElementById("input_age").value,
        "Mobilephone": document.getElementById("input_phone").value
    }
    console.log(student); 
    callStudentWS("http://localhost:3030/student/", "insert", student).then(
            (data) => {
                console.log(data);                
            }
        );
});

let updateBtnRef = document.querySelector("#update");
updateBtnRef.addEventListener("click", () => {
    let student = {
        StudentID : document.getElementById("input_id").value,
        "Firstname": document.getElementById("input_fname").value,
        "Lastname": document.getElementById("input_lname").value,
        "DOB": document.getElementById("input_age").value,
        "Mobilephone": document.getElementById("input_phone").value
    }
    console.log(student); 
    callStudentWS("http://localhost:3030/student/", "update", {student:student}).then(
            (data) => {
                console.log(data);                
            }
        );
});

let deleteBtnRef = document.querySelector("#delete");
deleteBtnRef.addEventListener("click", () => {
    let student = {
        StudentID : document.getElementById("input_id").value,
    }
    console.log(student); 
    callStudentWS("http://localhost:3030/student/", "delete", student).then(
            (data) => {
                console.log(data);                
            }
        );
});

let selectBtnRef = document.querySelector("#select");
selectBtnRef.addEventListener("click", () => {
    let STU_ID = document.getElementById("input_id").value;
    callStudentWS("http://localhost:3030/student/" + STU_ID, "select").then(
            (data) => {
                console.log(data);
                if (data) {
                    alert(data.message);
                    let sid = data.data.StudentID;
                    let fname = data.data.Firstname;
                    let lname = data.data.Lastname;
                    let datebirth = data.data.DOB;
                    let mphone = data.data.Mobilephone;

                    output.innerHTML = `Student Id ${sid} <ul><li>${fname} ${lname}</li><li>${datebirth}</li><li>${mphone}</li></ul>`;                    
                }
            }
        );
});

let selectAllBtnRef = document.querySelector("#selectall");
selectAllBtnRef.addEventListener("click", () => {
    let dataout = "";
    callStudentWS("http://localhost:3030/student/", "selectall").then(
            (data) => {
                console.log(data);
                if (data) {
                    alert(data.message);
                    for (const i of data.data) {
                    let sid = i.StudentID;
                    let fname = i.Firstname;
                    let lname = i.Lastname;
                    let datebirth = i.DOB;
                    let mphone = i.Mobilephone;

                    dataout += `Student Id ${sid} <ul><li>${fname} ${lname}</li><li>${datebirth}</li><li>${mphone}</li></ul>`;  
                    }                  
                }
                output.innerHTML = dataout;
            }
        );
});
