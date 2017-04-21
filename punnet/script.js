var geno1Arr, geno2Arr;
var gam1Arr;
var gam2Arr;
var body, tbl, tbdy;

function init() {
    var geno1 = document.getElementById('first-parent').value;
    var geno2 = document.getElementById('second-parent').value;
    if ((geno1 === "" || geno2 === "") || (geno1.length % 2 != 0 || geno2.length % 2 != 0))
        alert("Invalid genotype.");
    else if (geno1.length !== geno2.length)
        alert("The genotypes are not of the same length. Cannot complete cross.");
    else {
        gam1Arr = new Array(Math.pow(2, geno1.length / 2));
        gam2Arr = new Array(Math.pow(2, geno2.length / 2));
        geno1Arr = Array.from(geno1);
        geno2Arr = Array.from(geno2);
        getGametes();
        tableCreate();
    }
}

function getGametes() {
    console.log("Getting Gametes");
}

function tableCreate() {
    console.log("Creating Table");
}
