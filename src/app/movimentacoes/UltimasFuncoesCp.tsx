"use client"

import axios from 'axios';

// Função para buscar a menor movimentação
export const fetchMenorMovimentacao = async () => {
try {
    const response = await axios.get('/movimentacao/menor');
    return response.data;
} catch (error) {
    console.error('Erro ao buscar a menor movimentação:', error);
    throw error;
}
};

// Função para buscar a maior movimentação
export const fetchMaiorMovimentacao = async () => {
try {
    const response = await axios.get('/movimentacao/maior');
    return response.data;
} catch (error) {
    console.error('Erro ao buscar a maior movimentação:', error);
    throw error;
}
};

// Função para buscar a última movimentação
export const fetchUltimaMovimentacao = async () => {
try {
    const response = await axios.get('/movimentacao/ultima');
    return response.data;
} catch (error) {
    console.error('Erro ao buscar a última movimentação:', error);
    throw error;
}
};
