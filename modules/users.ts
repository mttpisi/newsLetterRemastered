import * as userData from "./usersData";

enum userType {
    'NEWSLETTER',
    'INTERESSATO',
    'SELEZIONI',
    'GRADUATORIA',
    'ISCRITTO',
    'ALLIEVO',
    'DOCENTE'
};

/* export class Utente{
    private _password:string
    constructor(
        public email:string,
        public privacy:boolean,
        public nome:string = "",
        public cognome:string = ""
    ){}

    get password(){
        return this._password;
    }
    set password(newPassword:string){
        this._password = newPassword;
    }
} */

export class UtenteNewsletter{
    protected _tipoUtente:userType;
    public email:userData.Email;
    constructor(
        iEmail:string,
        public privacy:boolean
    ){
        this.tipoUtente = 0;
        this.email = new userData.Email();
        this.email.indirizzo = iEmail;
    };
    
    get tipoUtente():userType{
        return this.tipoUtente;
    }
    set tipoUtente(newRuolo:userType){
        this.tipoUtente = newRuolo;
    }
}

export class UtenteInteressato extends UtenteNewsletter{
    public telefono:userData.Telefono;
    constructor(
        email:string,
        privacy:boolean,
        public nome:string,
        public cognome:string,
        iNumero:string
    ){  
        super(email,privacy);
        this.telefono = new userData.Telefono();
        this.telefono.numero = iNumero;
        this.tipoUtente = 1;
    }
}

export class UtenteSelezioni extends UtenteInteressato{
    public CF:userData.CodiceFiscale
    constructor(
        email:string,
        privacy:boolean,
        nome:string,
        cognome:string,
        telefono:string,
        iCF:string,
        public CI:string,
        public titoloStudio:string,
        public CV:string,
        public lettera:string
    ){
        super(email,privacy,nome,cognome,telefono);
        this.CF = new userData.CodiceFiscale();
        this.CF.codice = iCF;
        this.tipoUtente = 2;
    }
}

export class UtenteGraduatoria extends UtenteSelezioni{
    public puntTot:number
    constructor(
        email:string,
        privacy:boolean,
        nome:string,
        cognome:string,
        telefono:string,
        CF:string,
        CI:string,
        titoloStudio:string,
        CV:string,
        lettera:string,
        public puntTest:number = 0,
        public puntColloquio:number = 0
    ){
        super(email,privacy,nome,cognome,telefono,CF,CI,titoloStudio,CV,lettera);
        this.puntTot = puntTest + puntColloquio;
        this.tipoUtente = 3;
    }

    
}


export class Iscritto extends UtenteGraduatoria{
    private pagamenti:userData.Pagamento[] = [];
    constructor(
        email:string,
        privacy:boolean,
        nome:string,
        cognome:string,
        telefono:string,
        CF:string,
        CI:string,
        titoloStudio:string,
        CV:string,
        lettera:string,
        puntTest:number,
        puntColloquio:number,
    ){
        super(email,privacy,nome,cognome,telefono,CF,CI,titoloStudio,CV,lettera,puntTest,puntColloquio);
        this.tipoUtente = 4;
    }

    addPagamento(data:string,versamento:number){
        let pagamento = new userData.Pagamento(data,versamento);
        this.pagamenti.push(pagamento);
    }

    getPagamenti(){
        let res = [];
        for(let i = 0; i<this.pagamenti.length;i++){
            let temp = {
                data:this.pagamenti[i].data,
                versamento:this.pagamenti[i].saldo
            };
            res.push(temp);
        }
        return res;
    }

    getPagamentiByData(data:string){
        let res = [];
        for(let i = 0; i<this.pagamenti.length;i++){
            if(this.pagamenti[i].data == data){
                let temp = {
                    data:this.pagamenti[i].data,
                    versamento:this.pagamenti[i].saldo
                };
                res.push(temp)
            }
        }
        return res;
    }
}


interface voto {
    nomeModulo:string,
    voto?:number
}
export class Allievo extends Iscritto{
    private votiModuli: voto[] = [];
    private percPresenze: number = 0;
    constructor(
        email:string,
        privacy:boolean,
        nome:string,
        cognome:string,
        telefono:string,
        CF:string,
        CI:string,
        titoloStudio:string,
        CV:string,
        lettera:string,
        puntTest:number,
        puntColloquio:number,
        private password:string
    ){
        super(email,privacy,nome,cognome,telefono,CF,CI,titoloStudio,CV,lettera,puntTest,puntColloquio);
        this.tipoUtente = 5;
    }

    addVoto(modulo:string,esito:number){
        let nuovoVoto:voto = {
            nomeModulo: modulo,
            voto: esito
        }
        this.votiModuli.push(nuovoVoto);
    }

    getVoti(){
        return this.votiModuli;
    }

    changePercPresenze(input:number){
        this.percPresenze = input;
    }

    getPercPresenze(){
        return this.percPresenze;
    }

}

export class Docente extends UtenteNewsletter{
    constructor(
        email:string,
        privacy:boolean,
        public paga:number
    ){
        super(email,privacy);
        this.tipoUtente = 6;
    }
}