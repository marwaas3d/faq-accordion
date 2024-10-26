let content = document.querySelectorAll('.req');

content.forEach(function(con) {
    let plusBtn = con.querySelector(".plus");
    let minusBtn = con.querySelector(".minus");
    let target = con.querySelector(".target") || con.querySelector(".appear"); 

    if (plusBtn) { 
        plusBtn.onclick = function() {
            if (target) {
                target.style.display = "block";
                minusBtn.style.display = "inline";
                plusBtn.style.display = "none";
                con.style.height = "200px";
            }
        };
    }

    if (minusBtn) { 
        minusBtn.onclick = function() {
            if (target) {
                target.style.display = "none";
                minusBtn.style.display = "none";
                plusBtn.style.display = "inline";
                con.style.height = "88px";
            }
        };
    }
});
