jQuery(document).ready(function () {
    // Pour fermer la modal
    $(".modal-content span.close").on("click", function() {
        closeModal();
    });
});

// ouverture de la modal
function openModal(id_modal) {
    $("#" + id_modal).removeClass("hidden fade-out").addClass("fade-in");
    $("#" + id_modal + " .modal-content").removeClass("move-down").addClass("move-up");
    $("body").css("overflow", "hidden");
    $(".dice-align").fadeOut(100);
}
// fermeture de la modal
function closeModal() {
    $(".modal-content").removeClass("move-up").addClass("move-down");
    $(".modal").removeClass("fade-in").addClass("fade-out");
    $("body").css("overflow", "auto");
    $(".dice-align").fadeIn();
    setTimeout(() => {
        $(".modal").addClass("hidden");
        $("#add_player_in_game, #add_rules").removeClass("hidden");
    }, 450);
}
window.onclick = function (event) {
    if (event.target.classList[0] == "modal") {
        closeModal();
    }
}
