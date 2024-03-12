
document.addEventListener('DOMContentLoaded', () => {
    const appDiv = document.getElementById('app');
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        // Assuming data is an array of rows, you can format and display it in your UI
        appDiv.innerHTML = '<ul>';
        data.forEach(row => {
          appDiv.innerHTML += `<li>Name: ${row[0]}, Major: ${row[1]}</li>`;
        });
        appDiv.innerHTML += '</ul>';
      })
      .catch(error => {
        appDiv.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
      });
  });
  
