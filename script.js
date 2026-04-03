document.getElementById('fileInput').addEventListener('change', function(e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    document.getElementById('output').textContent = event.target.result;
  };

  reader.readAsText(file);
});