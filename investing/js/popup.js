
const strIndicadoresWindowProps = "width=450,height=450,menubar=no,location=no,resizable=no,scrollbars=yes,status=no";
const strCalendarWindowProps = "width=640,height=400,menubar=no,location=no,resizable=no,scrollbars=yes,status=no";

let windowObjectReference;

function openPopupIndicadores(){
    windowObjectReference = window.open(
        'investing/index.html', 
        'Monitor',
        strIndicadoresWindowProps);
}

function openPopupCalendario(){
    windowObjectReference = window.open(
        'investing/calendar.html', 
        'Calendário',
        strCalendarWindowProps);
}