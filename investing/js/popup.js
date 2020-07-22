
const strWindowFeatures = "width=780,height=300,menubar=no,location=no,resizable=no,scrollbars=yes,status=no";
let windowObjectReference;

function openPopupIndicadores(){
    windowObjectReference = window.open(
        'investing/index.html', 
        'Monitor',
        strWindowFeatures);
}

function openPopupCalendario(){
    windowObjectReference = window.open(
        'investing/calendar.html', 
        'Calendário',
        strWindowFeatures);
}