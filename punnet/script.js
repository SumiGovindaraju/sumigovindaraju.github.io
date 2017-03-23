var geno1Arr;
var geno2Arr;
var gam1Arr;
var gam2Arr;

function init() {
    var geno1 = document.getElementById('first-parent').value;
    var geno2 = document.getElementById('second-parent').value;
    if (geno1 === "" || geno2 === "")
        alert("One or more of the genotypes are empty. Cannot complete cross.");
    else if (geno1.length !== geno2.length)
        alert("The genotypes are not of the same length. Cannot complete cross.");
    else {
        geno1Arr = Array.from(geno1);
        geno2Arr = Array.from(geno2);
    }
}
