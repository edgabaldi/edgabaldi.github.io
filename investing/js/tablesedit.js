const eua = [
    {sigla: 'S&P 500', pid: '8839'},
    {sigla: 'Nasdaq', pid: '8874'},
    {sigla: 'Dow Jones', pid: '8873'},
    {sigla: 'US2Y', pid: '23701'},
    {sigla: 'US10Y', pid: '23705'},
];

const commodities = [
    {origem: "Petróleo EUA", sigla: 'WTI Oil', pid: '8849'},
    {origem: "Bloomberg Commodities", sigla: "BCOM", pid: '948434'},

];

const dx = [
    {origem: "Índice Dólar", sigla: 'DX', pid: '8827'},
    {origem: "Euro", sigla: 'USD/EUR', pid: '2124'},
    {origem: "Japão", sigla: 'USD/JPY', pid: '3'},
    {origem: "Inglaterra", sigla: 'USD/GBP', pid: '2126'},
    {origem: "Canadá", sigla: 'USD/CAD', pid: '7'},
    {origem: "Suecia", sigla: 'USD/SEK', pid: '41'},
    {origem: "Suiça", sigla: 'USD/CHF', pid: '4'}
];

const europa = [
    {sigla: "Stoxx 600", pid: "40823"},
    {sigla: 'Reino Unido', pid: '27'}, // FTSE 100
    {sigla: 'Alemanha', pid: '8826'} // DAX
];

const emergentes = [
    {origem: "México", sigla: 'USD/MXN', pid: '39'},
    {origem: "África do Sul", sigla: 'USD/ZAR', pid: '17'},
    {origem: "Colombia", sigla: "USD/COP", pid: "2112"},
    {origem: "Chile", sigla: "USD/CLP", pid: "2110"},
    {origem: "Peru", sigla:"USD/PEN", pid: "2177"},
    {origem: "Tailândia", sigla:"USD/THB", pid: "147"},
    {origem: "Índia", sigla: 'USD/INR', pid: '160'},
    {origem: "Hungria", sigla: 'USD/HUF', pid: '91'}
];

const exportadores = [
    {origem: "Austrália", sigla:"USD/AUD", pid: "2091"},
    {origem: "África do Sul", sigla: 'USD/ZAR', pid: '17'},
    {origem: "Canadá", sigla: 'USD/CAD', pid: '7'},
    {origem: "Nova Zelândia", sigla:"USD/NZD", pid: "2174"},
    {origem: "Noruega", sigla:"USD/NOK", pid: "59"}
];

let all_data = eua.concat(europa, emergentes, exportadores, dx, commodities);

const row = (obj) => {

    return `
        <tr class="pid-${obj.pid}-line">
            <td class="pid-${obj.pid}-ativo text-left text-uppercase font-weight-bold">${obj.sigla}</td>
            <td class="pid-${obj.pid}-pcp text-center font-weight-bold"">0,00%</td>
            <td class="pid-${obj.pid}-last font-weight-bold">0,00</td>
        </tr>`;
}

const createTable = (table_name, data) => {
    const tbody = document.querySelector(table_name);
    tbody.innerHTML = data.map(obj => row(obj)).join('');
    summary.initSummary(table_name, data);
}

createTable('#eua', eua);
createTable('#europa', europa);
createTable('#emergentes', emergentes);
createTable('#exportadores', exportadores);
createTable('#dx', dx);
createTable('#commodities', commodities);

var pid_arr = all_data.map( obj => `pid-${obj.pid}:`);
