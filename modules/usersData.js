"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Email = /** @class */ (function () {
    function Email() {
        this._email = "";
    }
    Object.defineProperty(Email.prototype, "indirizzo", {
        get: function () {
            return this._email;
        },
        set: function (newEmail) {
            if (validate(newEmail, "email")) {
                this._email = newEmail;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Email;
}());
exports.Email = Email;
var CodiceFiscale = /** @class */ (function () {
    function CodiceFiscale() {
        this._codice = "";
    }
    Object.defineProperty(CodiceFiscale.prototype, "codice", {
        get: function () {
            return this._codice;
        },
        set: function (newCodice) {
            if (validate(newCodice, "codiceFiscale")) {
                this._codice = newCodice;
            }
        },
        enumerable: true,
        configurable: true
    });
    return CodiceFiscale;
}());
exports.CodiceFiscale = CodiceFiscale;
var Telefono = /** @class */ (function () {
    function Telefono() {
        this._numero = "";
    }
    Object.defineProperty(Telefono.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (newNumero) {
            if (validate(newNumero, "telefono")) {
                this._numero = newNumero;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Telefono;
}());
exports.Telefono = Telefono;
var Pagamento = /** @class */ (function () {
    function Pagamento(_data, _saldo) {
        this._data = _data;
        this._saldo = _saldo;
    }
    Object.defineProperty(Pagamento.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (newData) {
            this._data = newData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagamento.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        set: function (newSaldo) {
            this._saldo = newSaldo;
        },
        enumerable: true,
        configurable: true
    });
    return Pagamento;
}());
exports.Pagamento = Pagamento;
function validate(input, tipo) {
    switch (tipo) {
        case "telefono":
            if (input.length == 10) {
                for (var i = 0; i < input.length; i++) {
                    if (isNaN(input[i])) {
                        return false;
                    }
                }
                return true;
            }
            return false;
            break;
        case "email":
            var brokenEmail = input.split("@");
            if (brokenEmail.length == 2 && brokenEmail[0].length != 0 && brokenEmail[1].length != 0) {
                var brokenMailDom = brokenEmail[1].split(".");
                if (brokenMailDom.length != 2) {
                    if (brokenMailDom[1].length >= 2 && brokenMailDom[1].length <= 3) {
                        return true;
                    }
                    return false;
                }
                return false;
            }
            return false;
            break;
        case "codiceFiscale":
            if (input.length == 16) {
                return true;
            }
            return false;
            break;
        default:
            break;
    }
    return false;
}
exports.validate = validate;
