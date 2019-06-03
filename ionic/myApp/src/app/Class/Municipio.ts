
export class Municipio {
    private codigo_municipio: String;
    private municipio: String;
    private censo: Number;

    constructor(codigo: String, nombre: String, censoo: Number) {
        this.codigo_municipio = codigo;
        this.municipio = nombre;
        this.censo = censoo;
    }

    public setcodigo(codigo: String) {
        this.codigo_municipio = codigo;
    }

    public setnombre(nombre: String) {
        this.municipio = nombre;
    }
    public setCenso(censo: Number) {
        this.censo = censo;
    }
}