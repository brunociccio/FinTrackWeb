"use client"

import axios from 'axios';

export async function fetchUltimasMovimentacoes() {
try {
    const response = await axios.get('http://localhost:8080/movimentacao/ultimas');
    return response.data;
} catch (error) {
    console.error('Erro ao buscar as últimas movimentações:', error);
    return [];
}
}
