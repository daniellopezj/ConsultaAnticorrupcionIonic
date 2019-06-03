export class Departamento {
    public codigo: String;
    public nombre: String;

    constructor(codigo: String,nombre: String) {
        this.codigo = codigo;
        this.nombre = nombre;
    }

    public setcodigo(codigo: String) {
        this.codigo = codigo;
    }

    public setnombre(nombre: String) {
        this.nombre = nombre;
    }
}



