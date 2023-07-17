
var value="---";
async function scanAndGetData(){
    var finalResult = barcode_data
    return Promise.resolve(finalResult)
}

function getBarcodeData(){
    return barcode_data;
}

var barcode_data="000" ;
var _debug_intent_Received;
var callback = function(intentval){
    _debug_intent_Received = intentval;
    barcode_data = "Barcode value: " + Object.values(intentval.data)[3]  + "\n\nBarcode Symbology: "+ Object.values(intentval.data)[2] ;
    console.log("JS Barcode value: " + Object.values(intentval.data)[3]  + "\n\nBarcode Symbology: "+ Object.values(intentval.data)[2] );
};
EB.Intent.startListening(callback); 



function triggerBarcodeScanner(){
    //window.alert("triggerBarcodeScanner");

    var extra= {'com.symbol.datawedge.api.SOFT_SCAN_TRIGGER' : 'START_SCANNING'};
    var params = {
                intentType: EB.Intent.BROADCAST,
               action: 'com.symbol.datawedge.api.ACTION',
               data: extra
            };
    EB.Intent.send(params);

}

//window.alert("RN/web - IntegrateZebraEB.js loaded!-3");
