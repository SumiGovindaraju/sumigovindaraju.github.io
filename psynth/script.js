function templateToRNA() {
    var template = document.getElementById('template').value;
    var mRNA = '';
    var dna = '';
    var isValid = true;
    for (var i = 0; i < template.length; i++) {
        if (template.charAt(i).toLowerCase() == 'a') {
            mRNA += 'U';
            dna += 'T';
        }
        else if (template.charAt(i).toLowerCase() == 't') {
            mRNA += 'A';
            dna += 'A'
        }
        else if (template.charAt(i).toLowerCase() == 'g') {
            mRNA += 'C';
            dna += 'C';
        }
        else if (template.charAt(i).toLowerCase() == 'c') {
            mRNA += 'G';
            dna += 'G';
        }
        else if (template.charAt(i) == ' ') {
            mRNA += ' ';
            dna += ' ';
        }
        else {
            isValid = false;
            alert("Invalid Template DNA");
            break;
        }
    }
    if (isValid) {
        document.getElementById('mRNA').value = mRNA;
        document.getElementById('dna').value = dna;
    }
}