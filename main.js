"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = require("./modules/users");
var utenti = [];
utenti.push(new users.UtenteNewsletter("email@email.it", true));
utenti.push(new users.UtenteInteressato("email2@email.it", true, "Marco", "Rossi", "3399990000"));
utenti.push(new users.UtenteSelezioni("email3@email.it", true, "Giuseppe", "Bianchi", "3388880000", "CodiceFiscale", "CartaIdentita", "Diploma", "Curriculum", "Lettera"));
utenti.push(new users.UtenteGraduatoria("email4@email.it", true, "Giovanni", "Verdi", "3377770000", "CodiceFiscale", "CartaIdentita", "Diploma", "Curriculum", "Lettera", 30, 25));
utenti.push(new users.Iscritto("email5@email.it", true, "Maria", "Azzurri", "3366660000", "CodiceFiscale", "CartaIdentita", "Diploma", "Curriculum", "Lettera", 30, 25));
utenti.push(new users.Allievo("email6@email.it", true, "Giacomo", "Arancioni", "3355550000", "CodiceFiscale", "CartaIdentita", "Diploma", "Curriculum", "Lettera", 30, 25, "PasswordStraSegreta"));
utenti.push(new users.Docente("emailDoc@email.it", true, 2000));
//RIFARE TUTTO DA 0!
/* function addUtente(tipoUtente:string,email:string,privacy:boolean,nome?:string,cognome?:string,telefono?:string,CF?:string,CI:string,titoloStudio:string,CV:string,lettera:string,puntTest:number,puntColloquio:number,password:string,){
    switch (tipoUtente) {
        case "NEWSLETTER":
                if(userData.validate(email,"email")){
                    utenti.push(new users.UtenteNewsletter(email,privacy));
                }
            break;

        case "INTERESSATO":
                if(userData.validate(email,"email") && userData.validate(telefono,"telefono")){
                    utenti.push(new users.UtenteInteressato(email,privacy,nome,cognome,telefono));
                }
            break;

        case "SELEZIONI":
                if(userData.validate(email,"email") && userData.validate(telefono,"telefono") && userData.validate(CF,"certificatoFiscale")){
                    utenti.push(new users.UtenteSelezioni(email,privacy,nome,cognome,telefono,CF,CI,titoloStudio,CV,lettera));
                }
            break;

        case "GRADUATORIA":
                if(userData.validate(email,"email") && userData.validate(telefono,"telefono") && userData.validate(CF,"certificatoFiscale")){
                    utenti.push(new users.UtenteGraduatoria(email,privacy,nome,cognome,telefono,CF,CI,titoloStudio,CV,lettera,puntTest,puntColloquio));
                }
            break;

        case "ISCRITTO":
                if(userData.validate(email,"email") && userData.validate(telefono,"telefono") && userData.validate(CF,"certificatoFiscale")){
                    utenti.push(new users.Iscritto(email,privacy,nome,cognome,telefono,CF,CI,titoloStudio,CV,lettera,puntTest,puntColloquio));
                }
            break;

        case "ALLIEVO":
                if(userData.validate(email,"email") && userData.validate(telefono,"telefono") && userData.validate(CF,"certificatoFiscale")){
                    utenti.push(new users.Allievo(email,privacy,nome,cognome,telefono,CF,CI,titoloStudio,CV,lettera,puntTest,puntColloquio,password));
                }
            break;
        
        case "DOCENTE":
                if(userData.validate(email,"email")){
                    utenti.push(new users.Docente(email,privacy,paga));
                }
            break;

        default:
            break;
    }
} */ 
