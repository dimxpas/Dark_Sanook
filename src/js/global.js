array_case = [];
result1 = 0;
result2 = 0;
jQuery(document).ready(function () {
    diceSound = new Audio('./src/audio/dice_roll.wav');
    diceSound.muted = true;
    lucky_vid = document.getElementById('luck');
    versus_vid = document.getElementById('duel');
    poisse = "";

    $("#roll").on("click", function() {
        $(".dices-block").removeClass("hidden");
        $("#message").html("");

        result1 = randomDice(); 
        result2 = randomDice();
        console.log(result1 + " - " + result2);
        // lancement du dés 1
        // result1 = randomDice();
        throwDices("1", result1);
        // lancement du dés 2
        // result2 = randomDice();
        throwDices("2", result2);
        setTimeout(function () {
            $('#dice_1').removeClass("spinthatdice1");
            $('#dice_2').removeClass("spinthatdice2");
            console.log((result1 + result2));
            if (array_case.includes(result1) && array_case.includes(result2)) {
                if ((result1 + result2) < 10 && array_case.includes(result1 + result2)) {
                    setTimeout(function() {
                        alert("GAME OVER");
                        restartGame();
                    }, 1000);
                }
            }
        }, 950);
    });

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
// numéro random de 1 à 6
function randomDice() {
    return Math.round(Math.random() * 5) + 1;
}
// Affichage du lancer de dès
function throwDices(id_dice, dice_number) {
    // setTimeout(function () { $("#dice_" + id_dice).html(number_to_letter(randomDice())); }, 200);
    // setTimeout(function () { $("#dice_" + id_dice).html(number_to_letter(randomDice())); }, 400);
    // setTimeout(function () { $("#dice_" + id_dice).html(number_to_letter(randomDice())); }, 600);
    // setTimeout(function () { $("#dice_" + id_dice).html(number_to_letter(dice_number)); }, 800);
    if (dice_number == 1) {
        x = -90;
        y = 0;
    }
    if (dice_number == 2) {
        x = 0;
        y = 0;
    }
    if (dice_number == 3) {
        x = 0;
        y = -90;
    }
    if (dice_number == 4) {
        x = 180;
        y = 0;
    }
    if (dice_number == 5) {
        x = 0;
        y = 90;
    }
    if (dice_number == 6) {
        x = 90;
        y = 0;
    }
    diceSound.play();
    $('#dice_' + id_dice).addClass("spinthatdice" + id_dice);
    $('#dice_' + id_dice).css({'transform': 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)'});
}
// affichage du dès avec fontawesome && traduction du nombre en lettre
function number_to_letter(dice_number) {
    var numbers = ["one", "two", "three", "four", "five", "six"];
    return "<i class='fa-solid fa-dice-" + numbers[dice_number - 1] + "'></i>";
}
// recommencer la partie 
function restartGame() {
    array_case = [];
    $("[id^='case_']").removeClass("brown-card letter-background number-background pointer");
    $("[id^='case_']").addClass("brown-card number-background pointer");
    $("[id^='up_'], [id^='down_']").removeClass("hidden");
    $("[id^='down_']").addClass("hidden");
}
// retourner la case 
function turnCase(box_number) {
    $("#case_" + box_number).toggleClass("pointer letter-background number-background");
    $("#up_" + box_number + ", #down_" + box_number).toggleClass("hidden");
    array_case.push(box_number);
}
function selectedBox(box_number) {
    console.log(array_case);
    console.log(array_case.includes(box_number));
    if (result1 == 0) {
        alert("Veuillez lancer les dés une première fois !");
    } else {
        if ($("#up_" + box_number)[0].className == "") {
            if (box_number == 1 && !array_case.includes(box_number)) {
                if (result1 == 1 || result2 == 1) {
                    turnCase(box_number);
                }
            }
            if (box_number == 2 && !array_case.includes(box_number)) {
                if (result1 == 1 && result2 == 1 || result1 == 2 || result2 == 2) {
                    turnCase(box_number);
                }
            }
            if (box_number == 3 && !array_case.includes(box_number)) {
                if (result1 == 1 && result2 == 2 || result1 == 2 && result2 == 1 || result1 == 3 || result2 == 3) {
                    turnCase(box_number);
                }
            }
            if (box_number == 4 && !array_case.includes(box_number)) {
                if (result1 == 1 && result2 == 3 || result1 == 3 && result2 == 1 || result1 == 2 && result2 == 2 || result1 == 4 || result2 == 4) {
                    turnCase(box_number);
                }
            }
            if (box_number == 5 && !array_case.includes(box_number)) {
                if (result1 == 1 && result2 == 4 || result1 == 4 && result2 == 1 || result1 == 3 && result2 == 2 || result1 == 2 && result2 == 3 || result1 == 5 || result2 == 5) {
                    turnCase(box_number);
                }
            }
            if (box_number == 6 && !array_case.includes(box_number)) {
                if (result1 == 1 && result2 == 5 || result1 == 5 && result2 == 1 || result1 == 4 && result2 == 2 || result1 == 2 && result2 == 4 || result1 == 3 && result2 == 3 || result1 == 6 || result2 == 6) {
                    turnCase(box_number);
                }
            }
            if (box_number == 7 && !array_case.includes(box_number)) {
                if (result1 == 1 && result2 == 6 || result1 == 6 && result2 == 1 || result1 == 5 && result2 == 2 || result1 == 2 && result2 == 5 || result1 == 4 && result2 == 3 || result1 == 3 && result2 == 4 || result1 == 7 || result2 == 7) {
                    turnCase(box_number);
                }
            }
            if (box_number == 8 && !array_case.includes(box_number)) {
                if (result1 == 1 && result2 == 7 || result1 == 7 && result2 == 1 || result1 == 6 && result2 == 2 || result1 == 2 && result2 == 6 || result1 == 5 && result2 == 3 || result1 == 3 && result2 == 5 || result1 == 4 && result2 == 4 || result1 == 8 || result2 == 8) {
                    turnCase(box_number);
                }
            }
            if (box_number == 9 && !array_case.includes(box_number)) {
                if (result1 == 1 && result2 == 8 || result1 == 8 && result2 == 1 || result1 == 7 && result2 == 2 || result1 == 2 && result2 == 7 || result1 == 6 && result2 == 3 || result1 == 3 && result2 == 6 || result1 == 4 && result2 == 5 || result1 == 5 && result2 == 4 || result1 == 9 || result2 == 9) {
                    turnCase(box_number);
                }
            }
        }
    }
}