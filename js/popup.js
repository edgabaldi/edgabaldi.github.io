
const strWindowFeatures = "width=780,height=265,menubar=no,location=no,resizable=no,scrollbars=yes,status=no";
let windowObjectReference;

function openPopup(){
    windowObjectReference = window.open(
        'investing.html', 
        'Investing Dashboard',
        strWindowFeatures);
}
