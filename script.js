document.getElementById('majorForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var skills = document.getElementById('skills').value.toLowerCase();
    var interests = document.getElementById('interests').value.toLowerCase();
    var goals = document.getElementById('goals').value.toLowerCase();
  
    var resultMessage;
  
    if ((skills.includes("coding") || skills.includes("programming")) && interests.includes("tech") && goals.includes("software engineer")) {
       resultMessage = "Based on your skills (" + skills + "), interests (" + interests + "), and goals (" + goals + "), Computer Science seems to be a good fit.";
    } else if ((skills.includes("writing") || skills.includes("editing")) && interests.includes("journalism") && goals.includes("journalist")) {
       resultMessage = "Based on your skills (" + skills + "), interests (" + interests + "), and goals (" + goals + "), Journalism seems to be a good fit.";
     } else {
       resultMessage = "Your skills, interests, and goals do not match any predefined majors. Please consider exploring other options.";
    }
  
    document.getElementById('results').innerText = resultMessage;
  });