var geno1Arr, geno2Arr;
var gam1Arr;
var gam2Arr;
var body, tbl, tbdy;

function init() {
    var geno1 = document.getElementById('first-parent').value;
    var geno2 = document.getElementById('second-parent').value;
    if ((geno1 === "" || geno2 === "") || (geno1.length % 2 !== 0 || geno2.length % 2 !== 0))
        alert("Invalid genotype.");
    else if (geno1.length !== geno2.length)
        alert("The genotypes are not of the same length. Cannot complete cross.");
    else {
        gam1Arr = new Array(Math.pow(2, (geno1.length+1) / 2));
        gam2Arr = new Array(Math.pow(2, (geno2.length+1) / 2));
        geno1Arr = Array.from(geno1);
        geno2Arr = Array.from(geno2);
        getGametes();
        tableCreate();
    }
}

function getGametes() {
    switch ((geno1.length+1) / 2) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        default:
            alert("Too many genes.");
    }
}

function tableCreate() {

}
