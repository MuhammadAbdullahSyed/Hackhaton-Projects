//get reference to the form and display area
var form = document.getElementById('resume-form');
var displayElement = document.getElementById('resume-display');
//handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input value
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //generate the resume dtnimically
    var resume = "\n    <h2><b>Resume</b><h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone Number:</b>").concat(number, "</p>\n\n   <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n    ");
    //display generated resume
    if (displayElement) {
        displayElement.innerHTML = resume;
    }
    else {
        console.error('Some Element is Missing');
    }
});
