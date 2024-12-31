
// Get the form and output container elements
const resumeForm = document.getElementById('resumeform') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeoutput') as HTMLDivElement;

// Function to generate the resume
function generateResume(event: Event): void {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the input values from the form
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Create the resume content
  const resumeContent = `
    <div>
      <h2>${name}'s Resume</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    </div>
  `;

  // Display the generated resume in the #resumeoutput div
  resumeOutput.innerHTML = resumeContent;
}

// Add an event listener to the form submit button
resumeForm.addEventListener('submit', generateResume);










