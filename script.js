document.getElementById('fileInput').addEventListener('change', function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const text = event.target.result;
    const lines = text.split('\n');
    const skills = {};

    lines.forEach(line => {
      line = line.trim();
      if (!line) return;

      const parts = line.split('\t');

      if (parts.length >= 2) {
        const skillName = parts[0].trim();
        const level = parseInt(parts[1].trim(), 10);

        if (!isNaN(level)) {
          skills[skillName] = level;
        }
      }
    });

    document.getElementById('output').textContent = JSON.stringify(skills, null, 2);
    console.log(skills);
  };

  reader.readAsText(file);
});