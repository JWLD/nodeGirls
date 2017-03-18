// API request
function makeRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  }
  xhr.open('GET', url);
  xhr.send();
}

function log(result) {
  console.log(result);
}

// event listener
document.getElementById('form-submit-button').addEventListener('click', function(event) {
  event.preventDefault();
  console.log('HI');
});
