"use client"

import React, { useEffect, useState } from 'react';
import { fetchUltimasMovimentacoes } from './movimentacoes/UltimasMovimentacoes'
import MovimentacaoTable from '@/components/MovimentacaoTable';
import { NavBar } from '@/components/NavBar';

export default function Home() {
  const [totais, setTotais] = useState([]);
  const [ultimasMovimentacoes, setUltimasMovimentacoes] = useState([]);

  useEffect(() => {
    async function carregarDados() {

      // Buscar últimas movimentações
      const ultimasMovimentacoesData = await fetchUltimasMovimentacoes();
      setUltimasMovimentacoes(ultimasMovimentacoesData);
    }

    carregarDados();
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
    </main>
  );
}


