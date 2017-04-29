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
            dna += 'A';
        }
        else if (template.charAt(i).toLowerCase() == 'g') {
            mRNA += 'C';
            dna += 'C';
        }
        else if (template.charAt(i).toLowerCase() == 'c') {
            mRNA += 'G';
            dna += 'G';
        }
        else if (template.charAt(i) == ' ' && mRNA.charAt(i) != '\n') {
            mRNA += ' ';
            dna += ' ';
        }
        else {
            isValid = false;
            alert("Invalid Template DNA: " + template.charAt(i));
            break;
        }
    }
    var protein = '';
    for (i = 0; i < mRNA.length - 2; i++) {
        if (mRNA.charAt(i) != ' ' && mRNA.charAt(i) != '\n') {
            switch (mRNA.substring(i, i + 3)) {
                case 'UUU':
                    protein += 'Phe-';
                    break;
                case 'UUC':
                    protein += 'Phe-';
                    break;
                case 'UUA':
                    protein += 'Leu-';
                    break;
                case 'UUG':
                    protein += 'Leu-';
                    break;
                case 'CUU':
                    protein += 'Leu-';
                    break;
                case 'CUC':
                    protein += 'Leu-';
                    break;
                case 'CUA':
                    protein += 'Leu-';
                    break;
                case 'CUG':
                    protein += 'Leu-';
                    break;
                case 'AUC':
                    protein += 'Ile-';
                    break;
                case 'AUU':
                    protein += 'Ile-';
                    break;
                case 'AUA':
                    protein += 'Ile-';
                    break;
                case 'AUG':
                    protein += 'Start (Met)-';
                    break;
                case 'GUU':
                    protein += 'Val-';
                    break;
                case 'GUC':
                    protein += 'Val-';
                    break;
                case 'GUA':
                    protein += 'Val-';
                    break;
                case 'GUG':
                    protein += 'Val-';
                    break;
                case 'UCU':
                    protein += 'Ser-';
                    break;
                case 'UCC':
                    protein += 'Ser-';
                    break;
                case 'UCA':
                    protein += 'Ser-';
                    break;
                case 'UCG':
                    protein += 'Ser-';
                    break;
                case 'CCU':
                    protein += 'Pro-';
                    break;
                case 'CCC':
                    protein += 'Pro-';
                    break;
                case 'CCA':
                    protein += 'Pro-';
                    break;
                case 'CCG':
                    protein += 'Pro-';
                    break;
                case 'ACU':
                    protein += 'Thr-';
                    break;
                case 'ACC':
                    protein += 'Thr-';
                    break;
                case 'ACA':
                    protein += 'Thr-';
                    break;
                case 'ACG':
                    protein += 'Thr-';
                    break;
                case 'GCU':
                    protein += 'Ala-';
                    break;
                case 'GCC':
                    protein += 'Ala-';
                    break;
                case 'GCA':
                    protein += 'Ala-';
                    break;
                case 'GCG':
                    protein += 'Ala-';
                    break;
                case 'UAU':
                    protein += 'Tyr-';
                    break;
                case 'UAC':
                    protein += 'Tyr-';
                    break;
                case 'UAA':
                    protein += 'Stop ';
                    break;
                case 'UAG':
                    protein += 'Stop ';
                    break;
                case 'UGA':
                    protein += 'Stop ';
                    break;
                case 'CAU':
                    protein += 'His-';
                    break;
                case 'CAC':
                    protein += 'His-';
                    break;
                case 'CAA':
                    protein += 'Gln-';
                    break;
                case 'CAG':
                    protein += 'Gln-';
                    break;
                case 'AAU':
                    protein += 'Asn-';
                    break;
                case 'AAC':
                    protein += 'Asn-';
                    break;
                case 'AAA':
                    protein += 'Lys-';
                    break;
                case 'AAG':
                    protein += 'Lys-';
                    break;
                case 'GAU':
                    protein += 'Asp-';
                    break;
                case 'GAC':
                    protein += 'Asp-';
                    break;
                case 'GAA':
                    protein += 'Glu-';
                    break;
                case 'GAG':
                    protein += 'Glu-';
                    break;
                case 'UGC':
                    protein += 'Cys-';
                    break;
                case 'UGU':
                    protein += 'Cys-';
                    break;
                case 'UGG':
                    protein += 'Trp-';
                    break;
                case 'CGU':
                    protein += 'Arg-';
                    break;
                case 'CGC':
                    protein += 'Arg-';
                    break;
                case 'CGA':
                    protein += 'Arg-';
                    break;
                case 'CGG':
                    protein += 'Arg-';
                    break;
                case 'AGU':
                    protein += 'Ser-';
                    break;
                case 'AGC':
                    protein += 'Ser-';
                    break;
                case 'AGA':
                    protein += 'Arg-';
                    break;
                case 'AGG':
                    protein += 'Arg-';
                    break;
                case 'GGU':
                    protein += 'Gly-';
                    break;
                case 'GGC':
                    protein += 'Gly-';
                    break;
                case 'GGA':
                    protein += 'Gly-';
                    break;
                case 'GGG':
                    protein += 'Gly-';
                    break;
                default:
                    isValid = false;
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
