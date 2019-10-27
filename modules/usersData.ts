export class Email{
    private _email:string = "";
    constructor(){}

    get indirizzo(){
        return this._email;
    }

    set indirizzo(newEmail:string){
        if(validate(newEmail,"email")){
            this._email=newEmail;
        }else{
            throw new Error("Errore, impossibile cambiare indirizzo email");
        }
    }
}

export class CodiceFiscale{
    private _codice:string = "";
    constructor(){}
    
    get codice(){
        return this._codice;
    }

    set codice(newCodice:string){
        if(validate(newCodice,"codiceFiscale")){
            this._codice = newCodice;
        }else{
            throw new Error("Errore, impossibile cambiare codice fiscale");
        }
    }
}

export class Telefono{
    private _numero:string = "";
    constructor(){}

    get numero(){
        return this._numero;
    }

    set numero(newNumero:string){
        if(validate(newNumero,"telefono")){
            this._numero=newNumero;
        }else{
            throw new Error("Errore, impossibile cambiare numero di telefono");
        }
    }
}

export class Pagamento{
    constructor(
        private _data:string,
        private _saldo:number
    ){}

    get data(){
        return this._data;
    }

    set data(newData:string){
        this._data = newData;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(newSaldo:number){
        this._saldo = newSaldo;
    }
}

export function validate(input:any,tipo:string):boolean {
    switch (tipo) {
        case "telefono":
            if(input.length == 10){
                for(let i = 0; i<input.length;i++){
                    if(isNaN(input[i])){
                        return false;
                    }
                }
                return true;
            }
            return false;
            break;

        case "email":
            let brokenEmail = input.split("@");
            if(brokenEmail.length == 2 && brokenEmail[0].length != 0 && brokenEmail[1].length != 0){
                let brokenMailDom = brokenEmail[1].split(".");
                if(brokenMailDom.length == 2){
                    if(brokenMailDom[1].length >= 2 && brokenMailDom[1].length <=3){
                        return true;
                    }
                    return false;
                }
                return false;
            }
            return false;
            break;

        case "codiceFiscale":
            if(input.length == 16){
                return true;
            }
            return false;
            break;

        default:
            break;
    }
    return false;
}
