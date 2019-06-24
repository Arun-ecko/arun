
function validateme() {
    let username = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;

    let usernamevalidate = (function () {

        return new Promise(function (resolve, reject) {

            resolve((function () {

                let requiredcond = /^[A-Za-z]+$/;
                if (!username.match(requiredcond)) {

                    document.getElementById('dispname').innerHTML = "Not a valid name";
                }
                else {
                    document.getElementById('dispname').innerHTML = "";
                }
            })())
        })
    })();
    usernamevalidate.then(function (result) {
        return usernamevalidate(result);
    });


    //email validate
    let emailvalidate = (function () {

        return new Promise(function (resolve, reject) {

            resolve((function () {

                let requiredcondemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                if (!email.match(requiredcondemail)) {

                    document.getElementById('dispemail').innerHTML = "Not a valid email";
                }
                else {
                    document.getElementById('dispemail').innerHTML = "";
                }
            })())
        })
    })();
    emailvalidate.then(function (result) {
        return emailvalidate(result);
    });
    //Mobile validate
    let mobilevalidate = (function () {

        return new Promise(function (resolve, reject) {

            resolve((function () {

                let requiredcondmob = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/
                if (!mobile.match(requiredcondmob)) {

                    document.getElementById('dispmob').innerHTML = "Not a valid number";
                }
                else {
                    document.getElementById('dispmob').innerHTML = "";
                }
            })())
        })
    })();
    mobilevalidate.then(function (result) {
        return mobilevalidate(result);
    });

    Promise.all([usernamevalidate, emailvalidate, mobilevalidate]).then((function () {

        var pushall = [];

        var datas = [username, email, mobile];
        pushall.push(...datas);
        insertNewRecord();
        alert("Inserted Successfully");
     
        function insertNewRecord() {
            alert("hi")
            var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.length);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = pushall[0];
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = pushall[1];
            cell3 = newRow.insertCell(2);
            cell3.innerHTML = pushall[2];
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = `< button  onclick= "onDelete()"> delete</button>`
        }
     
     
        
        
        function onDelete() {
            alert("hi");
            if (confirm('Are you sure to delete this record ?')) {
                row = td.parentElement.parentElement;
                document.getElementById("employeeList").deleteRow(row.rowIndex);
                
            }
        }
       
    })())



}


