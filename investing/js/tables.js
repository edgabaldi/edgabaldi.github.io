
const principal = [
    {name: 'S&P 500 Fut', pid: '8839'},
    {name: 'WTI Oil', pid: '8849'},
    {name: 'DX', pid: '8827'},
    {name: 'USD/EUR', pid: '2124'},
    {name: 'Gold', pid: '8830'},
    {name: 'U.S. 10 Treasury', pid: '23705'},
    {name: 'USD/BRL', pid: '2103'},
];

const dx = [
    {name: 'DX', pid: '8827'},
    {name: 'USD/EUR', pid: '2124'},
    {name: 'USD/CAD', pid: '7'},
    {name: 'USD/CHF', pid: '4'},
    {name: 'USD/GBP', pid: '2126'},
    {name: 'USD/JPY', pid: '3'},
    {name: 'USD/SEK', pid: '41'}
];

const emergentes = [
    {name: 'USD/BRL', pid: '2103'},
    {name: 'USD/CNY', pid: '2111'},
    {name: 'USD/CZK', pid: '103'},
    {name: 'USD/HUF', pid: '91'},
    {name: 'USD/IDR', pid: '2138'},
    {name: 'USD/INR', pid: '160'},
    {name: 'USD/MXN', pid: '39'},
    {name: 'USD/PLN', pid: '40'},
    {name: 'USD/RUB', pid: '2186'},
    {name: 'USD/TRY', pid: '18'},
    {name: 'USD/ZAR', pid: '17'}
]

const eua = [
    {name: 'SP500 Fut', pid: '8839'},
    {name: 'Dow Jones', pid: '169'},
    {name: 'Nasdaq', pid: '14958'},
    {name: 'Russell 2000', pid: '170'},
]

const europa = [
    {name: 'DAX (Alemanha)', pid: '172'},
    {name: 'FTSE 100 (Reino Unido)', pid: '27'},
    {name: 'Euro Stoxx 50', pid: '175'},
]

const asia = [
    {name: 'Hang Seng', pid: '179'},
    {name: 'China A50', pid: '28930'},
    {name: 'Shanghai', pid: '40820'},
    {name: 'SZSE Component', pid: '942630'},
    {name: 'Kospi (Sul-coreano)', pid: '37426'},
    {name: 'Taiex (Taiwan)', pid: '38017'},
    {name: 'DJ Shanghai', pid: '954522'},
    {name: 'China A50', pid: '28930'},
    {name: 'S&P/ASX 200', pid: '171'},

]

let all_data = principal.concat(dx, emergentes, eua, europa, asia);

const row = (name, pid) => {

    return `
        <tr>
            <td class="text-left">${name}</td>
            <td class="font-weight-bold text-center pid-${pid}-pcp">0,00%</td>
            <td class="pid-${pid}-last">0,00</td>
            <td class="pid-${pid}-time">00:00:00</td>
        </tr>`;
}

const createTable = (table_name, data) => {
    const tbody = document.querySelector(table_name);
    tbody.innerHTML = data.map(obj => row(obj.name, obj.pid)).join('');   
}

createTable('#principal-table', principal);
createTable('#dx-table', dx);
createTable('#emergentes-table', emergentes);
createTable('#eua-table', eua);
createTable('#europa-table', europa);
createTable('#asia-table', asia);

var TimeZoneID = 12;
var pid_arr = all_data.map( obj => `pid-${obj.pid}:`);

