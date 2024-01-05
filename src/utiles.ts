class Utiles {
    private primaryColor: string;
    private secondaryColor: string;
    private bgGradient: string;
    constructor() {
        this.primaryColor = "#F9B16E";
        this.secondaryColor = "#F68080";
        this.bgGradient = `linear(to-l, ${this.primaryColor}, ${this.secondaryColor})`;
    }
    public getPrimaryColor() {
        return this.primaryColor
    }
    public getSecondaryColor() {
        return this.secondaryColor
    }
    public getBgGradient() {
        return this.bgGradient
    }
}

export default Utiles