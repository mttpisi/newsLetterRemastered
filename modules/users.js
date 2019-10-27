"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var userData = require("./usersData");
var userType;
(function (userType) {
    userType[userType["NEWSLETTER"] = 0] = "NEWSLETTER";
    userType[userType["INTERESSATO"] = 1] = "INTERESSATO";
    userType[userType["SELEZIONI"] = 2] = "SELEZIONI";
    userType[userType["GRADUATORIA"] = 3] = "GRADUATORIA";
    userType[userType["ISCRITTO"] = 4] = "ISCRITTO";
    userType[userType["ALLIEVO"] = 5] = "ALLIEVO";
    userType[userType["DOCENTE"] = 6] = "DOCENTE";
})(userType || (userType = {}));
;
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
var UtenteNewsletter = /** @class */ (function () {
    function UtenteNewsletter(iEmail, privacy) {
        this.privacy = privacy;
        this._tipoUtente = 0;
        this.tipoUtente = 0;
        this.email = new userData.Email();
        this.email.indirizzo = iEmail;
    }
    ;
    Object.defineProperty(UtenteNewsletter.prototype, "tipoUtente", {
        get: function () {
            return this._tipoUtente;
        },
        set: function (newRuolo) {
            this._tipoUtente = newRuolo;
        },
        enumerable: true,
        configurable: true
    });
    UtenteNewsletter.prototype.stringTipoUtente = function () {
        return userType[this._tipoUtente];
    };
    return UtenteNewsletter;
}());
exports.UtenteNewsletter = UtenteNewsletter;
var UtenteInteressato = /** @class */ (function (_super) {
    __extends(UtenteInteressato, _super);
    function UtenteInteressato(email, privacy, nome, cognome, iNumero) {
        var _this = _super.call(this, email, privacy) || this;
        _this.nome = nome;
        _this.cognome = cognome;
        _this.telefono = new userData.Telefono();
        _this.telefono.numero = iNumero;
        _this.tipoUtente = 1;
        return _this;
    }
    return UtenteInteressato;
}(UtenteNewsletter));
exports.UtenteInteressato = UtenteInteressato;
var UtenteSelezioni = /** @class */ (function (_super) {
    __extends(UtenteSelezioni, _super);
    function UtenteSelezioni(email, privacy, nome, cognome, telefono, iCF, CI, titoloStudio, CV, lettera) {
        var _this = _super.call(this, email, privacy, nome, cognome, telefono) || this;
        _this.CI = CI;
        _this.titoloStudio = titoloStudio;
        _this.CV = CV;
        _this.lettera = lettera;
        _this.CF = new userData.CodiceFiscale();
        _this.CF.codice = iCF;
        _this.tipoUtente = 2;
        return _this;
    }
    return UtenteSelezioni;
}(UtenteInteressato));
exports.UtenteSelezioni = UtenteSelezioni;
var UtenteGraduatoria = /** @class */ (function (_super) {
    __extends(UtenteGraduatoria, _super);
    function UtenteGraduatoria(email, privacy, nome, cognome, telefono, CF, CI, titoloStudio, CV, lettera, puntTest, puntColloquio) {
        if (puntTest === void 0) { puntTest = 0; }
        if (puntColloquio === void 0) { puntColloquio = 0; }
        var _this = _super.call(this, email, privacy, nome, cognome, telefono, CF, CI, titoloStudio, CV, lettera) || this;
        _this.puntTest = puntTest;
        _this.puntColloquio = puntColloquio;
        _this.puntTot = puntTest + puntColloquio;
        _this.tipoUtente = 3;
        return _this;
    }
    return UtenteGraduatoria;
}(UtenteSelezioni));
exports.UtenteGraduatoria = UtenteGraduatoria;
var Iscritto = /** @class */ (function (_super) {
    __extends(Iscritto, _super);
    function Iscritto(email, privacy, nome, cognome, telefono, CF, CI, titoloStudio, CV, lettera, puntTest, puntColloquio) {
        var _this = _super.call(this, email, privacy, nome, cognome, telefono, CF, CI, titoloStudio, CV, lettera, puntTest, puntColloquio) || this;
        _this.pagamenti = [];
        _this.tipoUtente = 4;
        return _this;
    }
    Iscritto.prototype.addPagamento = function (data, versamento) {
        var pagamento = new userData.Pagamento(data, versamento);
        this.pagamenti.push(pagamento);
    };
    Iscritto.prototype.getPagamenti = function () {
        var res = [];
        for (var i = 0; i < this.pagamenti.length; i++) {
            var temp = {
                data: this.pagamenti[i].data,
                versamento: this.pagamenti[i].saldo
            };
            res.push(temp);
        }
        return res;
    };
    Iscritto.prototype.getPagamentiByData = function (data) {
        var res = [];
        for (var i = 0; i < this.pagamenti.length; i++) {
            if (this.pagamenti[i].data == data) {
                var temp = {
                    data: this.pagamenti[i].data,
                    versamento: this.pagamenti[i].saldo
                };
                res.push(temp);
            }
        }
        return res;
    };
    return Iscritto;
}(UtenteGraduatoria));
exports.Iscritto = Iscritto;
var Allievo = /** @class */ (function (_super) {
    __extends(Allievo, _super);
    function Allievo(email, privacy, nome, cognome, telefono, CF, CI, titoloStudio, CV, lettera, puntTest, puntColloquio, password) {
        var _this = _super.call(this, email, privacy, nome, cognome, telefono, CF, CI, titoloStudio, CV, lettera, puntTest, puntColloquio) || this;
        _this.password = password;
        _this.votiModuli = [];
        _this.percPresenze = 0;
        _this.tipoUtente = 5;
        return _this;
    }
    Allievo.prototype.addVoto = function (modulo, esito) {
        var nuovoVoto = {
            nomeModulo: modulo,
            voto: esito
        };
        this.votiModuli.push(nuovoVoto);
    };
    Allievo.prototype.getVoti = function () {
        return this.votiModuli;
    };
    Allievo.prototype.changePercPresenze = function (input) {
        this.percPresenze = input;
    };
    Allievo.prototype.getPercPresenze = function () {
        return this.percPresenze;
    };
    return Allievo;
}(Iscritto));
exports.Allievo = Allievo;
var Docente = /** @class */ (function (_super) {
    __extends(Docente, _super);
    function Docente(email, privacy, paga) {
        var _this = _super.call(this, email, privacy) || this;
        _this.paga = paga;
        _this.tipoUtente = 6;
        return _this;
    }
    return Docente;
}(UtenteNewsletter));
exports.Docente = Docente;
