let swap = (vetor, posicao1, posicao2) => {
    auxiliar = vetor[posicao1];
    vetor[posicao1] = vetor[posicao2];
    vetor[posicao2] = auxiliar;
    return vetor;
};
let shuffle = (vetor, numero_trocas) => {
    for (i = 0; i < numero_trocas; i ++) {
        var posicao1 = parseInt(Math.random() * numero_trocas);
        var posicao2 = parseInt(Math.random() * numero_trocas);
        vetor = swap(vetor, posicao1, posicao2);
    }
    return vetor;
};
let bubble_sort = (vetor) => {
    for (i = vetor.length - 1; i > 0; i --){
        for (j = 0; j < i; j ++){
            if (vetor[j] > vetor[j + 1]){
                vetor = swap(vetor, j, j + 1);
            }
        }
    }
    return vetor;
};
let selection_sort = (vetor) => {
    for (i = 0; i < vetor.length - 1; i ++){
        menor = i;
        for (j = i + 1; j < vetor.length; j ++){
            if (vetor[menor] > vetor[j]){
                menor = j;
            }
        }
        vetor = swap(vetor, i, menor);
    }
    return vetor
};
let parcionamento = (vetor, posicao_inicial, posicao_final, pivot) => {
    for (i = posicao_inicial; i < posicao_final; i ++){
        if (vetor[i] <= pivot){
            auxiliar = vetor[i];
            vetor[i] = vetor[posicao_inicial];
            vetor[posicao_inicial] = auxiliar;
            posicao_inicial = posicao_inicial + 1;
        }
    }
    return posicao_inicial - 1
};
let quick_sort = (vetor, posicao_inicial, posicao_final) => {
    pivot = vetor[posicao_final - 1];
    if (posicao_inicial <posicao_final){
        auxiliar = parcionamento(vetor, posicao_inicial, posicao_final, pivot);
        quick_sort(vetor, posicao_inicial, auxiliar);
        quick_sort(vetor, auxiliar + 1, posicao_final);
    }
    return vetor
};