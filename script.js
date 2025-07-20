const vidaUtilTabela = {
  "APARTAMENTOS": 60, "BANCOS": 70, "CASAS DE ALVENARIA": 70, "CASAS DE MADEIRA": 45, "HOTÉIS": 50,
  "LOJAS": 70, "TEATROS": 50, "ARMAZÉNS": 75, "FÁBRICAS": 50, "CONST. RURAIS": 60, "GARAGENS": 60,
  "EDIF ESCRITÓRIOS": 70, "DEPÓSITOS": 70, "GALPÕES": 80, "SILOS": 75
};

const rossHeideckenTabela = {
  2:  { A:0.0102, B:0.0105, C:0.0351, D:0.0903, E:0.189, F:0.393, G:0.531, H:0.754 },
  4:  { A:0.0208, B:0.0211, C:0.0455, D:0.1, E:0.198, F:0.346, G:0.536, H:0.757 },
  6:  { A:0.0318, B:0.0321, C:0.0562, D:0.11, E:0.207, F:0.353, G:0.541, H:0.76 },
  8:  { A:0.0432, B:0.0435, C:0.0673, D:0.121, E:0.216, F:0.361, G:0.546, H:0.763 },
  10: { A:0.055, B:0.0553, C:0.0788, D:0.132, E:0.226, F:0.369, G:0.552, H:0.766 },
  12: { A:0.0672, B:0.0675, C:0.0907, D:0.143, E:0.236, F:0.377, G:0.558, H:0.769 },
  14: { A:0.0798, B:0.0801, C:0.103, D:0.154, E:0.246, F:0.385, G:0.564, H:0.772 },
  16: { A:0.0928, B:0.0931, C:0.116, D:0.166, E:0.257, F:0.394, G:0.57, H:0.775 },
  18: { A:0.106, B:0.106, C:0.129, D:0.178, E:0.268, F:0.403, G:0.576, H:0.778 },
  20: { A:0.12, B:0.12, C:0.142, D:0.191, E:0.279, F:0.418, G:0.583, H:0.782 },
  22: { A:0.134, B:0.134, C:0.156, D:0.204, E:0.291, F:0.422, G:0.59, H:0.785 },
  24: { A:0.149, B:0.149, C:0.17, D:0.218, E:0.303, F:0.431, G:0.596, H:0.789 },
  26: { A:0.164, B:0.164, C:0.185, D:0.231, E:0.315, F:0.441, G:0.604, H:0.793 },
  28: { A:0.179, B:0.179, C:0.2, D:0.246, E:0.328, F:0.452, G:0.611, H:0.796 },
  30: { A:0.195, B:0.195, C:0.215, D:0.26, E:0.341, F:0.462, G:0.618, H:0.8 },
  32: { A:0.211, B:0.211, C:0.231, D:0.275, E:0.354, F:0.473, G:0.626, H:0.804 },
  34: { A:0.228, B:0.228, C:0.247, D:0.29, E:0.368, F:0.484, G:0.634, H:0.808 },
  36: { A:0.245, B:0.245, C:0.264, D:0.305, E:0.381, F:0.495, G:0.642, H:0.813 },
  38: { A:0.262, B:0.262, C:0.281, D:0.322, E:0.396, F:0.507, G:0.65, H:0.817 },
  40: { A:0.288, B:0.288, C:0.299, D:0.338, E:0.41, F:0.519, G:0.659, H:0.821 },
  42: { A:0.299, B:0.298, C:0.316, D:0.355, E:0.425, F:0.531, G:0.667, H:0.826 },
  44: { A:0.317, B:0.317, C:0.334, D:0.372, E:0.44, F:0.544, G:0.676, H:0.831 },
  46: { A:0.336, B:0.336, C:0.352, D:0.389, E:0.456, F:0.556, G:0.685, H:0.835 },
  48: { A:0.356, B:0.355, C:0.371, D:0.407, E:0.472, F:0.569, G:0.694, H:0.84 },
  50: { A:0.375, B:0.375, C:0.391, D:0.426, E:0.488, F:0.582, G:0.704, H:0.845 },
  52: { A:0.395, B:0.395, C:0.419, D:0.44, E:0.505, F:0.596, G:0.713, H:0.85 },
  54: { A:0.416, B:0.416, C:0.43, D:0.463, E:0.521, F:0.61, G:0.723, H:0.855 },
  56: { A:0.437, B:0.437, C:0.451, D:0.482, E:0.539, F:0.624, G:0.733, H:0.86 },
  58: { A:0.458, B:0.458, C:0.472, D:0.502, E:0.556, F:0.638, G:0.743, H:0.866 },
  60: { A:0.488, B:0.488, C:0.493, D:0.522, E:0.574, F:0.653, G:0.753, H:0.871 },
  62: { A:0.502, B:0.502, C:0.515, D:0.542, E:0.592, F:0.667, G:0.754, H:0.877 },
  64: { A:0.525, B:0.525, C:0.537, D:0.563, E:0.611, F:0.683, G:0.775, H:0.882 },
  66: { A:0.548, B:0.548, C:0.559, D:0.584, E:0.69, F:0.698, G:0.786, H:0.888 },
  68: { A:0.571, B:0.571, C:0.582, D:0.606, E:0.649, F:0.714, G:0.797, H:0.894 },
  70: { A:0.595, B:0.595, C:0.605, D:0.628, E:0.668, F:0.729, G:0.808, H:0.904 },
  72: { A:0.622, B:0.622, C:0.629, D:0.65, E:0.688, F:0.746, G:0.819, H:0.909 },
  74: { A:0.644, B:0.644, C:0.653, D:0.673, E:0.708, F:0.762, G:0.831, H:0.912 },
  76: { A:0.669, B:0.669, C:0.677, D:0.696, E:0.729, F:0.779, G:0.843, H:0.918 },
  78: { A:0.694, B:0.694, C:0.722, D:0.719, E:0.749, F:0.896, G:0.855, H:0.924 },
  80: { A:0.72, B:0.72, C:0.727, D:0.743, E:0.771, F:0.813, G:0.867, H:0.931 },
  82: { A:0.746, B:0.746, C:0.753, D:0.767, E:0.792, F:0.83, G:0.88, H:0.937 },
  84: { A:0.773, B:0.773, C:0.778, D:0.791, E:0.814, F:0.845, G:0.892, H:0.944 },
  86: { A:0.8, B:0.8, C:0.805, D:0.816, E:0.836, F:0.866, G:0.905, H:0.95 },
  88: { A:0.827, B:0.827, C:0.832, D:0.841, E:0.858, F:0.885, G:0.918, H:0.957 },
  90: { A:0.855, B:0.855, C:0.859, D:0.867, E:0.881, F:0.903, G:0.931, H:0.964 },
  92: { A:0.883, B:0.883, C:0.886, D:0.893, E:0.904, F:0.922, G:0.945, H:0.971 },
  94: { A:0.912, B:0.912, C:0.914, D:0.919, E:0.928, F:0.941, G:0.958, H:0.978 },
  96: { A:0.941, B:0.941, C:0.942, D:0.946, E:0.951, F:0.96, G:0.972, H:0.985 },
  98: { A:0.97, B:0.97, C:0.971, D:0.973, E:0.976, F:0.98, G:0.98, H:0.998 },
  100:{ A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1 }
};

function formatarMoeda(valor) {
  if (isNaN(valor)) return '';
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
}

function formatarArea(valor) {
  if (isNaN(valor)) return '';
  return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + ' m²';
}

function formatarPercentual(valor) {
  return valor.toFixed(2).replace('.', ',');
}

function limparValor(valor) {
  if (typeof valor !== "string") valor = valor.toString();
  return parseFloat(valor.replace(/[^\d,.-]/g, '').replace(/\./g, '').replace(',', '.'));
}

let amostras = 3;

function gerarReferenciais() {
  let html = '';
  for (let i = 1; i <= amostras; i++) {
    html += `<tr>
      <td>R${i}</td>
      <td><input type="text" id="r${i}_fonte" required></td>
      <td><input type="text" min="0" id="r${i}_valor" class="valor-input" required></td>
      <td><input type="text" min="0" id="r${i}_area" class="area-input" required></td>
      <td>
        <select id="r${i}_estado" required>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="G">G</option>
          <option value="H">H</option>
        </select>
      </td>
      <td><input type="number" min="1" id="r${i}_vida" required></td>
      <td><input type="number" min="0" id="r${i}_idade" required></td>
    </tr>`;
  }
  document.getElementById('referenciais').innerHTML = html;
  aplicarFormatacaoInputs();
}

function addAmostra() { 
  amostras++; 
  gerarReferenciais(); 
  restaurarUltimosDados(); 
}

function removeAmostra() { 
  if (amostras > 1) { 
    amostras--; 
    gerarReferenciais(); 
    restaurarUltimosDados(); 
  } 
}

gerarReferenciais();

function aplicarFormatacaoInputs() {
  document.querySelectorAll('.valor-input').forEach(el => {
    el.addEventListener('blur', function() {
      let val = this.value.replace(/\./g, '').replace(',', '.').replace(/[^\d.]/g, '');
      if (val) this.value = parseFloat(val).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    });
  });
  document.querySelectorAll('.area-input').forEach(el => {
    el.addEventListener('blur', function() {
      let val = this.value.replace(/\./g, '').replace(',', '.').replace(/[^\d.]/g, '');
      if (val) this.value = parseFloat(val).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    });
  });
}
aplicarFormatacaoInputs();

function toggleTema() {
  document.body.classList.toggle('dark');
  localStorage.setItem('tema', document.body.classList.contains('dark') ? 'dark' : 'light');
}

if (localStorage.getItem('tema') === 'dark') document.body.classList.add('dark');

function restaurarUltimosDados() {
  const dados = JSON.parse(localStorage.getItem('ultimoCalculo') || '{}');
  if (!dados.referencia) return;
  for (let i = 1; i <= amostras; i++) {
    if (dados.referencia[i-1]) {
      document.getElementById(`r${i}_fonte`).value = dados.referencia[i-1].fonte || '';
      document.getElementById(`r${i}_valor`).value = dados.referencia[i-1].valor || '';
      document.getElementById(`r${i}_area`).value = dados.referencia[i-1].area || '';
      document.getElementById(`r${i}_estado`).value = dados.referencia[i-1].estado || 'A';
      document.getElementById(`r${i}_vida`).value = dados.referencia[i-1].vida || '';
      document.getElementById(`r${i}_idade`).value = dados.referencia[i-1].idade || '';
    }
  }
  if (dados.ia) {
    document.getElementById('ia_natureza').value = dados.ia.natureza || '';
    document.getElementById('ia_custo').value = dados.ia.custo || '';
    document.getElementById('ia_estado').value = dados.ia.estado || '';
    document.getElementById('ia_area').value = dados.ia.area || '';
    document.getElementById('ia_idade').value = dados.ia.idade || '';
  }
  // Reaplica a formatação nos campos após restaurar os valores
  document.querySelectorAll('.valor-input').forEach(el => {
    if (el.value) el.value = parseFloat(el.value.replace(/[^\d,.-]/g, '').replace(/\./g, '').replace(',', '.')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  });
  document.querySelectorAll('.area-input').forEach(el => {
    if (el.value) el.value = parseFloat(el.value.replace(/[^\d,.-]/g, '').replace(/\./g, '').replace(',', '.')).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  });
}

function getRossHeideckenFator(idadePct, estado) {
  let maisProximo = Math.round(idadePct / 2) * 2;
  maisProximo = Math.max(2, Math.min(100, maisProximo));
  return {
    fator: rossHeideckenTabela[maisProximo][estado],
    correlacao: `${estado}/${maisProximo}`
  };
}

let chartValoresBrutos = null;
let chartValoresM2 = null;

function criarGraficos(labels, valoresBrutos, valoresM2, iaValorBruto, iaValorM2) {
  const ctx1 = document.getElementById('graficoValoresBrutos').getContext('2d');
  const ctx2 = document.getElementById('graficoValoresM2').getContext('2d');
  if(chartValoresBrutos) chartValoresBrutos.destroy();
  if(chartValoresM2) chartValoresM2.destroy();
  labels.push('IA');
  valoresBrutos.push(iaValorBruto);
  valoresM2.push(iaValorM2);
  chartValoresBrutos = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Valor Bruto dos Imóveis (R$)',
        data: valoresBrutos,
        backgroundColor: labels.map((_, i) => i === labels.length-1 ? 'rgba(220, 53, 69, 0.7)' : 'rgba(46, 111, 161, 0.7)'),
        borderColor: labels.map((_, i) => i === labels.length-1 ? 'rgba(220, 53, 69, 1)' : 'rgba(46, 111, 161, 1)'),
        borderWidth: 1
      }]
    },
    options: {
      responsive:true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: val => val.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
          }
        }
      },
      plugins: {
        legend: { display: true },
        tooltip: {
          callbacks: {
            label: ctx => ctx.parsed.y.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
          }
        }
      }
    }
  });
  chartValoresM2 = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'Valor por m² dos Imóveis (R$)',
        data: valoresM2,
        backgroundColor: labels.map((_, i) => i === labels.length-1 ? 'rgba(220, 53, 69, 0.7)' : 'rgba(40, 167, 69, 0.7)'),
        borderColor: labels.map((_, i) => i === labels.length-1 ? 'rgba(220, 53, 69, 1)' : 'rgba(40, 167, 69, 1)'),
        borderWidth: 1
      }]
    },
    options: {
      responsive:true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: val => val.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
          }
        }
      },
      plugins: {
        legend: { display: true },
        tooltip: {
          callbacks: {
            label: ctx => ctx.parsed.y.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
          }
        }
      }
    }
  });
}

function calcular() {
  let referenciais = [];
  for (let i = 1; i <= amostras; i++) {
    let valor = limparValor(document.getElementById(`r${i}_valor`).value);
    let area = limparValor(document.getElementById(`r${i}_area`).value);
    let estado = document.getElementById(`r${i}_estado`).value;
    let vida = parseFloat(document.getElementById(`r${i}_vida`).value);
    let idade = parseFloat(document.getElementById(`r${i}_idade`).value);
    let fonte = document.getElementById(`r${i}_fonte`).value;
    referenciais.push({valor, area, estado, vida, idade, fonte});
  }
  let mediaCustoM2 = referenciais.reduce((sum, r) => sum + (r.valor / r.area), 0) / referenciais.length;
  document.getElementById('ia_custo').value = mediaCustoM2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  let ia_custo = limparValor(document.getElementById('ia_custo').value) || mediaCustoM2;
  let ia_natureza = document.getElementById('ia_natureza').value;
  let ia_estado = document.getElementById('ia_estado').value;
  let ia_area = limparValor(document.getElementById('ia_area').value);
  let ia_idade = parseFloat(document.getElementById('ia_idade').value);
  let ia_vida = vidaUtilTabela[ia_natureza] || 60;
  let ia_pct = (ia_idade/ia_vida)*100;
  let ia_rh = getRossHeideckenFator(ia_pct, ia_estado);
  let ia_fator = ia_rh.fator;
  let ia_correlacao = ia_rh.correlacao;
  let ia_depreciacao = ia_custo * ia_fator;
  let ia_valor_reavaliado = ia_custo - ia_depreciacao;
  let ia_valor_avaliacao = ia_valor_reavaliado * ia_area;

  // Tabela de homogeneização
  let tabela2 = referenciais.map((r, idx) => {
    let valorReduzido = r.valor * 0.95;
    let valorUnit = valorReduzido / r.area;
    let pctVida = (r.idade/r.vida)*100;
    let pctVidaFormatado = formatarPercentual(pctVida);
    let rh = getRossHeideckenFator(pctVida, r.estado);
    let fatorRoss = rh.fator;
    let correlacao = rh.correlacao;
    let valorHomogeneizado = valorUnit * (1 - fatorRoss);
    let valorTotalHomogeneizado = valorHomogeneizado * ia_area;
    let difIdade = ia_idade - r.idade;
    return `<tr>
      <td>R${idx+1}</td>
      <td>${formatarMoeda(valorReduzido)}</td>
      <td>${formatarArea(r.area)}</td>
      <td>${formatarMoeda(valorUnit)}</td>
      <td>${pctVidaFormatado}%</td>
      <td>${(fatorRoss*100).toFixed(2).replace('.', ',')}%</td>
      <td>${formatarMoeda(valorHomogeneizado)}</td>
      <td>${difIdade}</td>
      <td>${correlacao}</td>
    </tr>`;
  }).join('');
  document.getElementById('tabelaHomogeneizacao').innerHTML = tabela2;

  // Gráficos
  let labels = referenciais.map((_,i) => `R${i+1}`);
  let valoresBrutos = referenciais.map(r => r.valor);
  let valoresM2 = referenciais.map(r => r.valor / r.area);
  criarGraficos(labels, valoresBrutos, valoresM2, ia_valor_avaliacao, ia_valor_reavaliado);

  // Resultado detalhado
  document.getElementById('resultado').style.display = '';
  document.getElementById('resultado').innerHTML = `<b>Valor Avaliado:</b> ${formatarMoeda(ia_valor_avaliacao)} |
    <b>Valor Avaliado (m²):</b> ${formatarMoeda(ia_valor_reavaliado)} |
    <b>Fator Ross Heidecken:</b> ${(ia_fator*100).toFixed(2).replace('.', ',')}% (${ia_correlacao})`;

  // Resultado detalhado IA
  let detalheIA = `
  <h4>Resultado da Avaliação</h4>
  <table>
    <thead>
      <tr>
        <th colspan="5">Imóvel Avaliando (IA):</th>
      </tr>
      <tr>
        <th>Natureza</th>
        <th>Vida Útil</th>
        <th>Estado de Conservação</th>
        <th>Idade</th>
        <th>Área</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${ia_natureza}</td>
        <td>${ia_vida} anos</td>
        <td>${ia_estado}</td>
        <td>${ia_idade} anos</td>
        <td>${formatarArea(ia_area)}</td>
      </tr>
      <tr>
        <th>Idade em % de Vida</th>
        <th>Fator Ross-Heidecken</th>
        <th>Depreciação (R$)</th>
        <th>Valor Avaliado m² (R$)</th>
        <th>Valor Avaliado (R$)</th>
      </tr>
      <tr>
        <td>${formatarPercentual(ia_pct)}%</td>
        <td>${ia_fator.toFixed(4)}</td>
        <td>${formatarMoeda(ia_depreciacao)}</td>
        <td>${formatarMoeda(ia_valor_reavaliado)}</td>
        <td>${formatarMoeda(ia_valor_avaliacao)}</td>
      </tr>
    </tbody>
  </table>
  `;

  let valoresHomogeneizados = referenciais.map(r => {
    let valorReduzido = r.valor * 0.95;
    let valorUnit = valorReduzido / r.area;
    let pctVida = (r.idade/r.vida)*100;
    let rh = getRossHeideckenFator(pctVida, r.estado);
    let fatorRoss = rh.fator;
    return valorUnit * (1 - fatorRoss);
  });
  let mediaHomogeneizados = valoresHomogeneizados.reduce((a,b)=>a+b,0)/valoresHomogeneizados.length;

  detalheIA += `
  <p><b>Homogeneização - Valor de Avaliação por Comparação:</b> ${formatarMoeda(mediaHomogeneizados)} por m² |
  `;

  let valorHomogeneizadoTotal = mediaHomogeneizados * ia_area;
  detalheIA += `
  <b>Valor Total do Imóvel:</b> ${formatarMoeda(valorHomogeneizadoTotal)}
  </p>
  `;

  document.getElementById('avaliacaoDetalhe').style.display = '';
  document.getElementById('avaliacaoDetalhe').innerHTML = detalheIA;

  // Salvar último cálculo e histórico
  localStorage.setItem('ultimoCalculo', JSON.stringify({
    referencia: referenciais,
    ia: {
      natureza: ia_natureza,
      custo: document.getElementById('ia_custo').value,
      estado: ia_estado,
      area: document.getElementById('ia_area').value,
      idade: ia_idade
    }
  }));
  let historico = JSON.parse(localStorage.getItem('historicoAvaliacao') || '[]');
  historico.push({ data: new Date().toISOString(), referenciais, ia: { ia_natureza, ia_custo, ia_estado, ia_area, ia_idade } });
  localStorage.setItem('historicoAvaliacao', JSON.stringify(historico));
}

// Exportação PDF
function exportarPDF() {
  // ATENÇÃO: use window.jspdf.jsPDF (não const { jsPDF } = window.jspdf)
  const doc = new window.jspdf.jsPDF('l', 'pt', 'a4');
  doc.text('Homogeneização e Diferença de Idade', 40, 30);

  // Use doc.autoTable, não window.jspdf.autoTable
  doc.autoTable({
    html: document.querySelector('#tabelaHomogeneizacao').parentElement,
    startY: 40,
    headStyles: { fillColor: [46, 111, 161] }
  });

  // Gráficos
  const canvas1 = document.getElementById('graficoValoresBrutos');
  const canvas2 = document.getElementById('graficoValoresM2');
  if (canvas1 && canvas2) {
    doc.addPage();
    doc.text('Gráfico Valor Reduzido', 40, 30);
    doc.addImage(canvas1.toDataURL('image/png'), 'PNG', 40, 40, 500, 200);
    doc.addPage();
    doc.text('Gráfico Valor Homogeneizado', 40, 30);
    doc.addImage(canvas2.toDataURL('image/png'), 'PNG', 40, 40, 500, 200);
  }
  doc.save('homogeneizacao.pdf');
}

// Exportação Excel
function exportarExcel() {
  // 1. Crie uma lista de sheets para cada bloco de informações
  var wb = XLSX.utils.book_new();

  // Imóveis Referenciais (Amostra)
  var tabelaAmostra = document.querySelector('#referenciais').parentElement;
  var wsAmostra = XLSX.utils.table_to_sheet(tabelaAmostra);
  XLSX.utils.book_append_sheet(wb, wsAmostra, "Amostras");

  // Imóvel Avaliando (IA)
  var tabelaIA = document.querySelector('#formulario').querySelectorAll('table')[1];
  var wsIA = XLSX.utils.table_to_sheet(tabelaIA);
  XLSX.utils.book_append_sheet(wb, wsIA, "Imóvel Avaliando");

  // Resultado e Detalhes (se existirem)
  var resultado = document.getElementById('resultado');
  var detalhe = document.getElementById('avaliacaoDetalhe');
  if (resultado && resultado.style.display !== "none") {
    var wsResultado = XLSX.utils.aoa_to_sheet([["Resultado"], [resultado.textContent]]);
    XLSX.utils.book_append_sheet(wb, wsResultado, "Resultado");
  }
  if (detalhe && detalhe.style.display !== "none") {
    var wsDetalhe = XLSX.utils.aoa_to_sheet([["Detalhe"], [detalhe.textContent]]);
    XLSX.utils.book_append_sheet(wb, wsDetalhe, "Detalhe");
  }

  // Tabela de Homogeneização
  var tabelaHomog = document.querySelector('#tabelaHomogeneizacao').parentElement;
  var wsHomog = XLSX.utils.table_to_sheet(tabelaHomog);
  XLSX.utils.book_append_sheet(wb, wsHomog, "Homogeneização");

  // Salva o arquivo
  XLSX.writeFile(wb, 'avaliacao_imovel_completa.xlsx');
}
