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
    // for (var i = 0; i < gam1Arr.length; i++) {
    //     gam1Arr[i] = 'aBcDe';
    //     gam2Arr[i] = 'AbCdE';
    // }
    gam1Arr[0] = 'A';
    gam1Arr[1] = 'a';
    gam2Arr[0] = 'A';
    gam2Arr[1] = 'a';
}

function tableCreate() {
    body = document.getElementsByTagName('body')[0];
    tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    tbdy = document.createElement('tbody');
    // for (var i = 0; i < gam2Arr.length; i++) {
    //     var tr = document.createElement('tr');
    //     for (var j = 0; j < gam1Arr.length; j++) {
    //         var td = document.createElement('td');
    //         var tableElement = "";
    //         for (var k = 0; k < gam1Arr[i].length; k++) {
    //             tableElement += gam1Arr[i].charAt(k) + gam2Arr[i].charAt(k);
    //         }
    //         td.appendChild(document.createTextNode(tableElement));
    //         tr.appendChild(td);
    //     }
    //     tbdy.appendChild(tr);
    // }
    var tr = document.createElement('tr');

    tbl.appendChild(tbdy);
    body.appendChild(tbl);
}