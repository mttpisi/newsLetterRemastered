import * as users from "./modules/users";
import * as userData from "./modules/usersData";

const utenti: any = [];
var errorFlag:boolean = true;


utenti.push(new users.UtenteNewsletter("email@email.it",true));
utenti.push(new users.UtenteInteressato("email2@email.it",true,"Marco","Rossi","3399990000"));
utenti.push(new users.UtenteSelezioni("email3@email.it",true,"Giuseppe","Bianchi","3388880000","CodiceFiscale123","CartaIdentita","Diploma","Curriculum","Lettera"));
utenti.push(new users.UtenteGraduatoria("email4@email.it",true,"Giovanni","Verdi","3377770000","CodiceFiscale123","CartaIdentita","Diploma","Curriculum","Lettera",30,25));
utenti.push(new users.Iscritto("email5@email.it",true,"Maria","Azzurri","3366660000","CodiceFiscale123","CartaIdentita","Diploma","Curriculum","Lettera",30,25));
utenti.push(new users.Allievo("email6@email.it",true,"Giacomo","Arancioni","3355550000","CodiceFiscale123","CartaIdentita","Diploma","Curriculum","Lettera",30,25,"PasswordStraSegreta"));
utenti.push(new users.Docente("emailDoc@email.it",true,2000));

console.log(utenti);

console.log("\n\n\n\n")

let res: any[] = lookFor(utenti,"nome","Marco");
let res1: any[] = lookFor(utenti,"cognome","Bianchi");
let res2: any[] = lookFor(utenti,"email","emailDoc@email.it");
let res3: any[] = lookFor(utenti,"telefono","3366660000");
let res4: any[] = lookFor(utenti,"codicefiscale","CodiceFiscale123");

console.log(res);
console.log("1-_-_-_-");
console.log(res1); 
console.log("2-_-_-_-");
console.log(res2); 
console.log("3-_-_-_-");
console.log(res3); 
console.log("4-_-_-_-");
console.log(res4); 

function lookFor(array:any[], type:string, searchValue:string):any[]{
    let results:any[] = [];
    switch(type){
        case "email":
            for(let i = 0; i<array.length;i++){
                if(array[i].email._email == searchValue) results.push(array[i]);
            }
            return results;
            break;

        case "nome":
            for(let i = 0; i<array.length;i++){
                if(array[i].stringTipoUtente() != "NEWSLETTER" && array[i].stringTipoUtente() != "DOCENTE"){   
                    if(array[i].nome == searchValue) results.push(array[i]);
                }
            }
            return results;
            break;

        case "cognome":
            for(let i = 0; i<array.length;i++){
                if(array[i].stringTipoUtente() != "NEWSLETTER" && array[i].stringTipoUtente() != "DOCENTE"){   
                    if(array[i].cognome == searchValue) results.push(array[i]);
                }
            }
            return results;
            break;

        case "telefono":
            for(let i = 0; i<array.length;i++){
                if(array[i].stringTipoUtente() != "NEWSLETTER" && array[i].stringTipoUtente() != "DOCENTE"){   
                    if(array[i].telefono._numero == searchValue) results.push(array[i]);
                }
            }
            return results;
            break;

        case "codicefiscale":
            for(let i = 0; i<array.length;i++){
                if(array[i].stringTipoUtente() != "NEWSLETTER" && array[i].stringTipoUtente() != "INTERESSATO" && array[i].stringTipoUtente() != "DOCENTE"){   
                    if(array[i].CF._codice == searchValue) results.push(array[i]);
                }
            }
            return results;
            break;
        
        default:
            break;
    }
    return results;
}

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