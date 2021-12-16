class Hora {
    
    private hours: number;
    private minutes: number;
    private seconds: number;

    constructor(hours: number, minutes: number, seconds: number) {
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
    }

    hora() : number{
        return this.hours
    }

    minuto(): number {
        return this.minutes
    }

    segundo(): number{
        return this.seconds
    }

    
    ///relogio(): void{
        ///    console.log(`${this.hora}:${this.minuto}:${this.segundo}`)
    ///}
    ///Retornou 
    ///function () {
    ///    return this.hours;
    ///}:function () {
    ///    return this.minutes;
    ///}:function () {
    ///    return this.seconds;
    ///}

    relogio(): void{
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }
}

const qHoras = new Hora(2,8,10);

qHoras.relogio();
