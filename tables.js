$(document).ready(function() {
  $("#table-list").on("change", function() {
    $(".tables").addClass("is-hidden");
    $("#" + $(this).val() ).removeClass("is-hidden");
  }).trigger("change");
});
