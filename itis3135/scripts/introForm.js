
/* THIS IS FOR ADDING AND REMOVING CLASSES FROM THE COURSES FIELDSET */
function submitData() {
    // Get all form values
    const formData = {
        firstName: document.getElementById('firstName').value || "ERROR- EMPTY",
        middleName: document.getElementById('middleName').value || "ERROR- EMPTY",
        lastName: document.getElementById('lastName').value || "ERROR- EMPTY",
        prefName: document.getElementById('prefName').value || "ERROR- EMPTY",

        pictureIn: document.getElementById('picture').files[0],

        mascotAdjective: document.getElementById('mascotAdjective').value || "ERROR- EMPTY",
        mascotAnimal: document.getElementById('mascotAnimal').value || "ERROR- EMPTY",
        dividerSymbol: document.getElementById('dividerSymbol').value || "ERROR- EMPTY",
        picCaption: document.getElementById('picCaption').value || "ERROR- EMPTY",
        personalStatement: document.getElementById('personalStatement').value || "ERROR- EMPTY",
        personalBackground: document.getElementById('personalBackground').value || "ERROR- EMPTY",
        professionalBackground: document.getElementById('professionalBackground').value || "ERROR- EMPTY",
        academicBackground: document.getElementById('academicBackground').value || "ERROR- EMPTY",
        computerInformation: document.getElementById('computerInformation').value || "ERROR- EMPTY",
        quote: document.getElementById('quote').value || "ERROR- EMPTY",
        quoteAuthor: document.getElementById('quoteAuthor').value || "ERROR- EMPTY",
        linkedIn: document.getElementById('linkedIn').value || "ERROR- EMPTY",
        gitHub: document.getElementById('gitHub').value || "ERROR- EMPTY",
        gitHubIO: document.getElementById('gitHubIO').value || "ERROR- EMPTY",
        cltHomepage: document.getElementById('cltHomepage').value || "ERROR- EMPTY",
        coursePage: document.getElementById('coursePage').value || "ERROR- EMPTY",
        freeCodeCamp: document.getElementById('freeCodeCamp').value || "ERROR- EMPTY"
    };

    if (!pictureIn) {console.log('AAA');}















}
function addFields(){
    var number = parseInt(document.getElementById("courses").value, 10);
    var container = document.getElementById("container");

    // Clear previous fields
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    if (isNaN(number) || number <= 0) {
        // If invalid number, do nothing (or you could show a message)
        return;
    }

    for (var i = 0; i < number; i++){
        // Course heading
        var heading = document.createElement("div");
        heading.appendChild(document.createTextNode("Course " + (i+1)));
        heading.style.fontWeight = "bold";
        heading.style.marginTop = "0.5em";
        container.appendChild(heading);

        // Course Name
        var nameLabel = document.createElement("label");
        nameLabel.setAttribute("for", "courseName" + i);
        nameLabel.appendChild(document.createTextNode("Course Name: "));
        container.appendChild(nameLabel);

        var nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.id = "courseName" + i;
        nameInput.name = "courseName[]";
        nameInput.placeholder = "e.g. Intro to Programming";
        container.appendChild(nameInput);
        container.appendChild(document.createElement("br"));

        // Course ID
        var idLabel = document.createElement("label");
        idLabel.setAttribute("for", "courseId" + i);
        idLabel.appendChild(document.createTextNode("Course ID: "));
        container.appendChild(idLabel);

        var idInput = document.createElement("input");
        idInput.type = "text";
        idInput.id = "courseId" + i;
        idInput.name = "courseId[]";
        idInput.placeholder = "e.g. ITIS-3135";
        container.appendChild(idInput);
        container.appendChild(document.createElement("br"));

        // Course Description
        var descLabel = document.createElement("label");
        descLabel.setAttribute("for", "courseDesc" + i);
        descLabel.appendChild(document.createTextNode("Course Description: "));
        container.appendChild(descLabel);

        var descArea = document.createElement("textarea");
        descArea.id = "courseDesc" + i;
        descArea.name = "courseDesc[]";
        descArea.rows = 3;
        descArea.cols = 40;
        descArea.placeholder = "Brief description of the course";
        container.appendChild(descArea);
        container.appendChild(document.createElement("br"));
    }
}