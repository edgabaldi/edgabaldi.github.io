
const principal = [
    {name: 'S&P 500 Fut', pid: '8839'},
    {name: 'WTI Oil', pid: '8849'},
    {name: 'DX', pid: '8827'},
    {name: 'USD/EUR', pid: '2124'},
    {name: 'Gold', pid: '8830'},
    {name: 'U.S. 10 Treasury', pid: '23705'},
    {name: 'USD/BRL', pid: '2103'},
];

const dx_data = [
    {name: 'DX', pid: '8827'},
    {name: 'USD/EUR', pid: '2124'},
    {name: 'USD/CAD', pid: '7'},
    {name: 'USD/CHF', pid: '4'},
    {name: 'USD/GBP', pid: '2126'},
    {name: 'USD/JPY', pid: '3'},
    {name: 'USD/SEK', pid: '41'}
];

const emergentes_data = [
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

let all_data = principal.concat(dx_data, emergentes_data);

const row = (name, pid) => {

    return `
        <tr>
            <td class="text-left">${name}</td>
            <td class="font-weight-bold text-center pid-${pid}-pcp">0,00%</td>
            <td class="pid-${pid}-last">0,00</td>
            <td class="pid-${pid}-low">00,00</td>
            <td class="pid-${pid}-high">00,00</td>
            <td class="pid-${pid}-time">00:00:00</td>
        </tr>`;
}


let principal_node = document.querySelector('#principal-node');
let dx_node = document.querySelector("#dx-table");
let emergentes_node = document.querySelector("#emergentes-node");

principal_node.innerHTML = principal.map( obj => row(obj.name, obj.pid)).join('');
dx_node.innerHTML = dx_data.map( obj => row(obj.name, obj.pid)).join('');
emergentes_node.innerHTML = emergentes_data.map( obj => row(obj.name, obj.pid)).join('');


var TimeZoneID = 12;
var pid_arr = all_data.map( obj => `pid-${obj.pid}:`);

