var toggle = function() {
  var btDiv = document.getElementById('bt-container');
  if (btDiv.style.display === 'block' || btDiv.style.display === ''){
    btDiv.style.display = 'none';
  }  else {
    btDiv.style.display = 'block'
  }
}
