$(document).ready(function() {
  // Initialize SimpleMDE
  var txt = new SimpleMDE({
    element: $("#textarea")[0],
    status: false,
    autosave: {
      enabled: true,
      delay: 100,
      uniqueId: "txt"
    }
  });
});
