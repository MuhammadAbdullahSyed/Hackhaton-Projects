//get reference to the form and display area
const form=document.getElementById('resume-form') as HTMLFormElement;
const displayElement=document.getElementById('resume-display')as HTMLDivElement
//handle form submission
form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();//prevent page reload
    //collect input value
    const name=(document.getElementById('name') as HTMLInputElement ).value 
    const number=(document.getElementById('number') as HTMLInputElement ).value 
    const email=(document.getElementById('email') as HTMLInputElement ).value
    const education=(document.getElementById('education') as HTMLInputElement ).value
    const experience=(document.getElementById('experience') as HTMLInputElement ).value
    const skills=(document.getElementById('skills') as HTMLInputElement ).value

    //generate the resume dtnimically
    const resume=`
    <h2><b>Editable Resume</b><h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Phone Number:</b><span contenteditable="true">${number}</span></p>

   <h3>Education</h3>
    <p contenteditable="true">${education}</p>

<h3>Experience</h3>
<p contenteditable="true">${experience}</p>

<h3>Skills</h3>
<p contenteditable="true">${skills}</p>
    `;
    //display generated resume
    if(displayElement){
        displayElement.innerHTML=resume;
    }
    else{
        console.error('Some Element is Missing')
    }
})