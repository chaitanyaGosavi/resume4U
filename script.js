function addNewEd() {
    let newNode = document.createElement('textarea');
    let newSpan = document.createElement('span');
    newNode.classList.add('form-control');
    newNode.classList.add('eduBg');
    newNode.classList.add('mb-4');
    newSpan.classList.add('input-group-text');
    newSpan.innerText='Add new Educational information'
    newNode.setAttribute('rows', 3);
    let eduBg=document.getElementById('EducationalBG');
    let btnOb=document.getElementById('eduBtn');
    eduBg.insertBefore(newNode, btnOb);
    eduBg.insertBefore(newSpan, newNode);
}

function addNewWorkEx() {
    let newNode = document.createElement('textarea');
    let newSpan = document.createElement('span');
    newNode.classList.add('form-control');
    newNode.classList.add('workEx');
    newNode.classList.add('mb-4');
    newSpan.classList.add('input-group-text');
    newSpan.innerText='Add new Work experience';
    newNode.setAttribute('rows', 3);
    let workEx=document.getElementById('workExperience');
    let btnOb=document.getElementById('workBtn');
    workEx.insertBefore(newNode, btnOb);
    workEx.insertBefore(newSpan, newNode);
}
function generateResume() {
    let nameInput = document.getElementById("nameInput").value;
    let mobInput = document.getElementById("mobInput").value;
    let addInput = document.getElementById("addInput").value;
    let gmailInput = document.getElementById("gmailInput").value;
    let linInput = document.getElementById("linInput").value;
    let gitInput = document.getElementById("gitInput").value;
    let objInput = document.getElementById("objInput").value;

    let nameEntry = document.getElementById("nameEntry");
    let mobEntry = document.getElementById("mobEntry");
    let addEntry = document.getElementById("addEntry");
    let gmailEntry = document.getElementById("gmailEntry");
    let linEntry = document.getElementById("linEntry");
    let gitEntry = document.getElementById("gitEntry");
    let objEntry = document.getElementById("objEntry");


    nameEntry.innerHTML = nameInput;
    mobEntry.innerHTML = "mob no: "+mobInput;
    addEntry.innerHTML = addInput;
    gmailEntry.innerHTML = gmailInput;
    linEntry.innerHTML = linInput;
    gitEntry.innerHTML = gitInput;
    objEntry.innerHTML = objInput;

    eduBg=document.getElementsByClassName("eduBg");
    eduElement="";

    for (let x of eduBg)
    {
        eduElement=eduElement+ `<li>${x.value}</li>`;
    }
    document.getElementById("eduEntry").innerHTML=eduElement;

    workExBg=document.getElementsByClassName("workEx");
    workExElement="";

    for (let y of workExBg)
    {
        workExElement=workExElement+ `<li>${y.value}</li>`;
    }
    document.getElementById("workExEntry").innerHTML=workExElement;

    
    document.getElementById("resume_form").style.display="none";
    document.getElementById("resume_template").style.display="block";
    document.getElementById("printBtn").style.display="block";
    let file=document.getElementById("imgInput").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=function(){
        document.getElementById("imgEntry").src=reader.result;
    }

}

function printResume() {
    var getFullContent = document.body.innerHTML;
    var printsection = document.getElementById("resume_template").innerHTML;
    document.body.innerHTML = printsection;
    window.print();
    document.body.innerHTML = getFullContent;
//     window.print();

}
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    let nameInput = document.getElementById("nameInput").value;
    let mobInput = document.getElementById("mobInput").value;
    let gmailInput = document.getElementById("gmailInput").value;
    let file=document.getElementById("imgInput").value;
    let regex = /^[a-zA-Z\s]+$/; 
    let  numRegex = /^\d{10}$/;
    let fileRegex = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let valCount=1
    if(regex.test(nameInput) === false) {
        alert("incorrect name");
        valCount=-1;
    }
    if(numRegex.test(mobInput)===false)
    {
        alert("incorrect mobile number");
        valCount=-1;
    }
    if (!fileRegex.exec(file)) {
        alert('Invalid file type');
        valCount=-1;
    } 
    if(emailRegex.test(gmailInput) === false) {
        alert("incorrect gmail");
        valCount=-1;
    }
    if (valCount!=-1) {
    generateResume();
    }
};
