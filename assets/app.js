$("#snake-btn").on("click", function() {
    event.preventDefault();
    $("#snake-btn").addClass("active");
    $("#lizard-btn, #turtle-btn, #arach-btn").removeClass("active")
    $("#snake-sec").removeClass("hidden");
    $("#lizard-sec, #turtle-sec, #arach-sec").addClass("hidden");
})

$("#lizard-btn").on("click", function() {
    event.preventDefault();
    $("#lizard-btn").addClass("active");
    $("#snake-btn, #turtle-btn, #arach-btn").removeClass("active")
    $("#lizard-sec").removeClass("hidden");
    $("#snake-sec, #turtle-sec, #arach-sec").addClass("hidden");
    

})

$("#turtle-btn").on("click", function() {
    event.preventDefault();
    $("#turtle-btn").addClass("active");
    $("#snake-btn, #lizard-btn, #arach-btn").removeClass("active")
    $("#turtle-sec").removeClass("hidden");
    $("#snake-sec, #lizard-sec, #arach-sec").addClass("hidden");
    
})

$("#arach-btn").on("click", function() {
    event.preventDefault();
    $("#arach-btn").addClass("active");
    $("#snake-btn, #lizard-btn, #turtle-btn").removeClass("active")
    $("#arach-sec").removeClass("hidden");
    $("#snake-sec, #lizard-sec, #turtle-sec").addClass("hidden");
    $("#arach-sec").removeClass("hidden");
    
})

$("#fresh-btn").on("click", function() {
    $("#fresh-sec").removeClass("hidden");
    $("#salt-sec").addClass("hidden");
    $("#salt-btn").removeClass("active");
    $("#fresh-btn").addClass("active");

})

$("#salt-btn").on("click", function() {
    $("#fresh-sec").addClass("hidden");
    $("#salt-sec").removeClass("hidden");
    $("#salt-btn").addClass("active");
    $("#fresh-btn").removeClass("active");
})