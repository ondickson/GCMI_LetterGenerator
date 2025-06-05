document.getElementById('letterForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const date = form.date.value;
  const name = form.name.value || "Mohammed Sumaila, Ph.D.";
  const house = form.location.value;
  const city = form.city.value;
  const region = form.region.value;
  const subject = form.subject.value;
  const body = form.body.value;
  const valediction = form.valediction.value;
  const position = form.position.value || "Chief Executive Officer";
  const signatureFile = form.signature.files[0];

  const address = `${name}\n${house}\n${city}\n${region}`;
  let letterHTML = `
    <p><strong>${date}</strong></p>
    <p>${address}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p>Dear Ag. CEO,</p>
    <p>${body}</p>
    ${valediction ? `<p>${valediction}</p>` : ""}
    <br><br>
    ${signatureFile ? `<img id="sig" style="width:200px;">` : `<img src="Signature.png" style="width:200px;">`}
    <p><strong>${name}</strong><br>${position}</p>
  `;

  document.getElementById('letterContent').innerHTML = letterHTML;

  if (signatureFile) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('sig').src = e.target.result;
    };
    reader.readAsDataURL(signatureFile);
  }

  // Hide form, show preview
  document.getElementById('inputForm').style.display = 'none';
  document.getElementById('letterPreview').style.display = 'block';
});

function downloadOptions() {
  const choice = confirm("Do you want to download as PDF?\nClick 'Cancel' to download as DOCX.");
  if (choice) {
    window.print(); // replace with html2pdf.js later
  } else {
    alert("DOCX download coming soon.");
  }
}
