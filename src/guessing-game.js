class GuessingGame {
    constructor() {
        this.min;
        this.max;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max
    }

    guess() {
        this.result = Math.ceil(( this.max + this.min) / 2)
        console.log(this.result);
        return this.result
    }

    lower() {
        this.max = this.result
        console.log('this.min' , this.min);
        console.log('this.max' , this.max);
    }

    greater() {
        this.min = this.result
        console.log('this.min' , this.min);
        console.log('this.max' , this.max);
    }
}


module.exports = GuessingGame;
