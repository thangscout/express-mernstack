class Calcu {
    constructor(calcu, numberA, numberB){
        this.calcu = calcu;
        this.numberA = numberA;
        this.numberB = numberB;
    }

    _getStringCal(){
        const { calcu, numberA, numberB} = this;
        if(calcu ==='SUM'){
            return `${numberA} + ${numberB}`;
        }
        if(calcu ==='SUB'){
            return `${numberA} - ${numberB}`;
        }
        if(calcu ==='MUL'){
            return `${numberA} * ${numberB}`;
        }
        return `${numberA} / ${numberB}`;
    }

    _getResultCal(){
        const calcuString = this._getStringCal();
        const result = eval(calcuString);
        return `${calcuString} = ${result}`;
    }
}

module.exports = Calcu;