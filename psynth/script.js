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
    var protein = '';
    for (i = 0; i < mRNA.length - 2; i++) {
        if (mRNA.charAt(i) !== ' ') {
            switch (mRNA.substring(i, i + 3)) {
                case 'UUU' || 'UUC':
                    protein += 'Phe-';
                    break;
                case 'UUA' || 'UUG' || 'CUU' || 'CUC' || 'CUA' || 'CUG':
                    protein += 'Leu-';
                    break;
                case 'AUC' || 'AUU' || 'AUA':
                    protein += 'Ile-';
                    break;
                case 'AUG':
                    protein += 'Start (Met)-';
                    break;
                case 'GUU' || 'GUC' || 'GUA' || 'GUG':
                    protein += 'Val-';
                    break;
                case 'UCU' || 'UCC' || 'UCA' || 'UCG':
                    protein += 'Ser-';
                    break;
                case 'CCU' || 'CCC' || 'CCA' || 'CCG':
                    protein += 'Pro-';
                    break;
                case 'ACU' || 'ACC' || 'ACA' || 'ACG':
                    protein += 'Thr-';
                    break;
                case 'GCU' || 'GCC' || 'GCA' || 'GCG':
                    protein += 'Ala-';
                    break;
                case 'UAU' || 'UAC':
                    protein += 'Tyr-';
                    break;
                case 'UAA' || 'UAG' || 'UGA':
                    protein += 'Stop ';
                    break;
                case 'CAU' || 'CAC':
                    protein += 'His-';
                    break;
                case 'CAA' || 'CAG':
                    protein += 'Gln-';
                    break;
                case 'AAU' || 'AAC':
                    protein += 'Asn-';
                    break;
                case 'AAA' || 'AAG':
                    protein += 'Lys-';
                    break;
                case 'GAU' || 'GAC':
                    protein += 'Asp-';
                    break;
                case 'GAA' || 'GAG':
                    protein += 'Glu-';
                    break;
                case 'UGC' || 'UGU':
                    protein += 'Cys-';
                    break;
                case 'UGG':
                    protein += 'Trp-';
                    break;
                case 'CGU' || 'CGC' || 'CGA' || 'CGG':
                    protein += 'Arg-';
                    break;
                case 'AGU' || 'AGC':
                    protein += 'Ser-';
                    break;
                case 'AGA' || 'AGG':
                    protein += 'Arg-';
                    break;
                case 'GGU' || 'GGC' || 'GGA' || 'GGG':
                    protein += 'Gly-';
                    break;
            }
            i += 2;
        }
    }
    console.log(protein);
    if (isValid) {
        document.getElementById('mRNA').value = mRNA;
        document.getElementById('dna').value = dna;
        document.getElementById('protein').value = protein;
    }
}