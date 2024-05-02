"use client"

import React, { useEffect, useState } from 'react';
import MovimentacaoTable from '@/components/MovimentacaoTable';
import { NavBar } from '@/components/NavBar';
import axios from 'axios';

export default function Home() {
  const [totais, setTotais] = useState([]);
  const [ultimasMovimentacoes, setUltimasMovimentacoes] = useState([]);
  const [menorMovimentacao, setMenorMovimentacao] = useState(null);
  const [maiorMovimentacao, setMaiorMovimentacao] = useState(null);
  const [ultimaMovimentacao, setUltimaMovimentacao] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const menorResposta = await axios.get('http://localhost:8080/movimentacao/menor');
        setMenorMovimentacao(menorResposta.data);
        
        const maiorResposta = await axios.get('http://localhost:8080/movimentacao/maior');
        setMaiorMovimentacao(maiorResposta.data);
        
        const ultimaResposta = await axios.get('http://localhost:8080/movimentacao/ultima');
        setUltimaMovimentacao(ultimaResposta.data);
      } catch (error) {
        console.error('Erro ao buscar as movimentações:', error);
      }
    }

    fetchData();

  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center gap-4">
      <NavBar active="dashboard"/>
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <section className="grid grid-flow-col-dense gap-5">
        {/*{totais.map(t => <CardStats {...t} key={t.title} />)}*/} {/* Comentado, pois totais não está definido */}
      </section>

      {/* Seção para outros componentes como gráficos, se necessário */}

      <section>
        <h3 className="text-lg font-bold">Últimas movimentações</h3>
        <MovimentacaoTable data={ultimasMovimentacoes} />
      </section>

      <section>
        <h3 className="text-lg font-bold">Menor Movimentação</h3>
        <p>{menorMovimentacao ? JSON.stringify(menorMovimentacao) : 'Carregando...'}</p>
      </section>

      <section>
        <h3 className="text-lg font-bold">Maior Movimentação</h3>
        <p>{maiorMovimentacao ? JSON.stringify(maiorMovimentacao) : 'Carregando...'}</p>
      </section>

      <section>
        <h3 className="text-lg font-bold">Última Movimentação</h3>
        <p>{ultimaMovimentacao ? JSON.stringify(ultimaMovimentacao) : 'Carregando...'}</p>
      </section>
    </main>
  );
}


