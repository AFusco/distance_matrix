$(document).ready(function() {
  
  var input = $('fileInput');
  var output = $('output');

  $('fileInput').change(function() {
    if (this.files && this.files[0]) {
      var myFile = this.files[0];
      var reader = new FileReader();

      reader.onload = function(evt) {
        console.log(evt.target.result);
      };
      reader.readAsText(file);
    }
  });

});
