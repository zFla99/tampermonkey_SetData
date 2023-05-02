// ==UserScript==
// @name         SetData
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Imposta automaticamente la data in base ai parametri passati
// @author       Flavio Doroci
// @match        https://goldenring.tesisquare.com/client/procedure/ra/fra080formoremese.cfm*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let url = window.location.href
    if (url != "https://goldenring.tesisquare.com/client/procedure/ra/fra080formoremese.cfm") {
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const Data = urlParams.get('Data')

    document.getElementsByClassName("ClsSel40Bis").Data.value = Data;
    document.querySelectorAll("input").item(14).click();
    //alert("Inserito cliente")
    //window.location.href = "https://goldenring.tesisquare.com/client/procedure/ra/fra080formoremese.cfm"
    } else {
        window.close();
        //alert("Chiusa pagina")
    }
})()