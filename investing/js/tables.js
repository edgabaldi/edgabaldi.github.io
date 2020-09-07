
const principal = [
    {sigla: 'S&P 500 Fut', pid: '8839'},
    {sigla: 'WTI Oil', pid: '8849'},
    {sigla: 'DX', pid: '8827'},
    {sigla: 'USD/EUR', pid: '2124'},
    {sigla: 'Gold', pid: '8830'},
    {sigla: 'U.S. 10 Treasury', pid: '23705'},
    {sigla: 'USD/BRL', pid: '2103'},
];

const dx = [
    {sigla: 'DX', pid: '8827'},
    {sigla: 'USD/EUR', pid: '2124'},
    {sigla: 'USD/CAD', pid: '7'},
    {sigla: 'USD/CHF', pid: '4'},
    {sigla: 'USD/GBP', pid: '2126'},
    {sigla: 'USD/JPY', pid: '3'},
    {sigla: 'USD/SEK', pid: '41'}
];

const emergentes = [
    {sigla: 'USD/BRL', pid: '2103'},
    {sigla: 'USD/CNY', pid: '2111'},
    {sigla: 'USD/CZK', pid: '103'},
    {sigla: 'USD/HUF', pid: '91'},
    {sigla: 'USD/IDR', pid: '2138'},
    {sigla: 'USD/INR', pid: '160'},
    {sigla: 'USD/MXN', pid: '39'},
    {sigla: 'USD/PLN', pid: '40'},
    {sigla: 'USD/RUB', pid: '2186'},
    {sigla: 'USD/TRY', pid: '18'},
    {sigla: 'USD/ZAR', pid: '17'}
]

const eua = [
    {sigla: 'SP500 Fut', pid: '8839'},
    {sigla: 'Dow Jones', pid: '8873'},
    {sigla: 'Nasdaq', pid: '8874'},
    {sigla: 'Russell 2000', pid: '8864'},
    {sigla: 'VIX', pid: '8884'},
]

const europa = [
    {sigla: 'DAX (Alemanha)', pid: '172'},
    {sigla: 'FTSE 100 (Reino Unido)', pid: '27'},
    {sigla: 'Euro Stoxx 50', pid: '175'},
]

const asia = [
    {sigla: 'Hang Seng', pid: '40'},
    {sigla: 'China A50', pid: '44486'},
    {sigla: 'Shanghai', pid: '40820'},
    {sigla: 'SZSE Component', pid: '942630'},
    {sigla: 'Kospi (Sul-coreano)', pid: '37426'},
    {sigla: 'Taiex (Taiwan)', pid: '38017'},
    {sigla: 'DJ Shanghai', pid: '954522'},
    {sigla: 'China A50', pid: '28930'},
    {sigla: 'S&P/ASX 200', pid: '171'},
]

const dolar = [
    {origem: "Argentina", sigla: "USD/ARS", pid: '2090'},
    {origem: "Brasil", sigla: "USD/BRL", pid: '2103'}, 
    {origem: "Canada", sigla: "USD/CAD", pid: '7'},
    {origem: "Chile", sigla: "USD/CLP", pid: "2110"},
    {origem: "Colombia", sigla: "USD/COP", pid: "2112"},
    {origem: "Costa Rica", sigla: "USD/CRC", pid: "2113"},
    {origem: "Cuba", sigla: "USD/CUP", pid: "2114"},
    {origem: "Republica Dominicana", sigla: "USD/DOP", pid:"2118"},
    {origem: "Honduras", sigla: "USD/HNL", pid: "2135"},
    {origem: "Haiti", sigla:"USD/HTG", pid: "2137"},
    {origem: "Jamaica", sigla:"USD/JMD", pid: "2142"},
    {origem: "México", sigla: "USD/MXN", pid: "39"},
    {origem: "Nicarágua", sigla:"USD/NIO", pid: "2172"},
    {origem: "Panamá", sigla:"USD/PAB", pid: "2176"},
    {origem: "Peru", sigla:"USD/PEN", pid: "2177"},
    {origem: "Paraguai", sigla:"USD/PYG", pid: "2181"},
    {origem: "El Salvador", sigla:"USD/SVC", pid: "2199"},
    {origem: "Uruguai", sigla:"USD/UYU", pid: "2210"},
    {origem: "Suíça", sigla:"USD/CHF", pid: "4"},
    {origem: "Dinamarca", sigla:"USD/DKK", pid: "43"},
    {origem: "Zona do Euro", sigla:"USD/EUR", pid: "2124"},
    {origem: "Reino Unido", sigla:"USD/GBP", pid: "2126"},
    {origem: "Noruega", sigla:"USD/NOK", pid: "59"},
    {origem: "Suécia", sigla:"USD/SEK", pid: "41"},
    {origem: "Egito", sigla:"USD/EGP", pid: "2122"},
    {origem: "Nigéria", sigla:"USD/NGN", pid: "2171"},
    {origem: "África do Sul", sigla:"USD/ZAR", pid: "17"},
    {origem: "China", sigla:"USD/CNY", pid: "2111"},
    {origem: "Hong Kong", sigla:"USD/HKD", pid: "155"},
    {origem: "Indonésia", sigla:"USD/IDR", pid: "2138"},
    {origem: "Israel", sigla:"USD/ILS", pid: "63"},
    {origem: "Índia", sigla:"USD/INR", pid: "160"},
    {origem: "Japão", sigla:"USD/JPY", pid: "3"},
    {origem: "Coreia do Sul", sigla:"USD/KRW", pid: "650"},
    {origem: "Malásia", sigla:"USD/MYR", pid: "2168"},
    {origem: "Filipinas", sigla:"USD/PHP", pid: "2179"},
    {origem: "Rússia", sigla:"USD/RUB", pid: "2186"},
    {origem: "Cingapura", sigla:"USD/SGD", pid: "42"},
    {origem: "Tailândia", sigla:"USD/THB", pid: "147"},
    {origem: "Turquia", sigla:"USD/TRY", pid: "18"},
    {origem: "Taiwan", sigla:"USD/TWD", pid: "2206"},
    {origem: "Austrália", sigla:"USD/AUD", pid: "2091"},
    {origem: "Nova Zelândia", sigla:"USD/NZD", pid: "2174"}
]

let all_data = principal.concat(dolar, dx, emergentes, eua, europa, asia);

const row = (obj) => {

    return `
        <tr>
            <td class="text-left""><abbr title="${obj.origem}">${obj.sigla}</abbr></td>
            <td class="font-weight-bold text-center pid-${obj.pid}-pcp">0,00%</td>
            <td class="pid-${obj.pid}-last">0,00</td>
            <td class="pid-${obj.pid}-time"><i class="fa fa-circle"> <i class="fa fa-clock"></i></td>
        </tr>`;
}

const createTable = (table_name, data) => {
    const tbody = document.querySelector(table_name);
    console.log(tbody)
    tbody.innerHTML = data.map(obj => row(obj)).join('');   
}

createTable("#dolar-table", dolar);
createTable('#principal-table', principal);
createTable('#dx-table', dx);
createTable('#emergentes-table', emergentes);
createTable('#eua-table', eua);
createTable('#europa-table', europa);

var TimeZoneID = 12;
var pid_arr = all_data.map( obj => `pid-${obj.pid}:`);

