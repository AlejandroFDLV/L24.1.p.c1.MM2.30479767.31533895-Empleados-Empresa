export default class Cl_Empresa{
    constructor(){
        this.acEdHom=0
        this.mujME=0
        this.mujMN=""
    }
    procesarEmpleado(e){
        if(e.sexo=="M"){this.acEdHom+=e.edad}
        if(e.edad>this.mujME && e.sexo=="F"){
            this.mujME=e.edad
            this.mujMN=e.nombre
        }
    }
    promedioHombres(){return this.acEdHom/3}
    mayorEdad(){return this.mujME}
    mujerMayorNombre(){return this.mujMN}
}