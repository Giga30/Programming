const bal = document.getElementById("bal");
const withdrawInp = document.getElementById("with-inp");
const withdrawSub = document.getElementById("with-sub");
const depositInp = document.getElementById("dep-inp");
const depositSub = document.getElementById("dep-sub");
let totalBal = 0;
bal.innerHTML = totalBal;
withdrawSub.addEventListener("click", function() {
    totalBal -= withdrawInp.value;
    bal.innerHTML = totalBal;
});
depositSub.addEventListener("click", function() {
    totalBal += depositInp.value;
    bal.innerHTML = totalBal;
});

//# sourceMappingURL=index.44983732.js.map
