/*ENUNCIADO
Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino
(F)emenino), edad. Se desea que determine e imprima: promedio de edad de los hombres y la
mayor edad entre las mujeres procesadas y quien la tiene.
Se dispone de los siguientes datos de varios empleados: (nombre, sexo, edad)
(Mary, ‘F’, 43), (José, ‘M’, 40), (Carlos, ‘M’, 30), (Pedro, ‘M’, 50), (Mery, ‘F’, 45), (Liz, ‘F’, 50)
*/
import Cl_Empleado from "./Cl_Empleado.js"
import Cl_Empresa from "./Cl_Empresa.js"

let emp = new Cl_Empresa()

let emp1= new Cl_Empleado("Mary", "F", 43)
let emp2= new Cl_Empleado("José", "M", 40)
let emp3= new Cl_Empleado("Carlos", "M", 30)
let emp4= new Cl_Empleado("Pedro", "M", 50)
let emp5= new Cl_Empleado("Mery", "F", 45)
let emp6= new Cl_Empleado("Liz", "F", 50)

emp.procesarEmpleado(emp1)
emp.procesarEmpleado(emp2)
emp.procesarEmpleado(emp3)
emp.procesarEmpleado(emp4)
emp.procesarEmpleado(emp5)
emp.procesarEmpleado(emp6)

let salida=document.getElementById("salida")
salida.innerHTML=`El promedio de edad de los hombres es de: ${emp.promedioHombres()}.
<br>La mujer con mayor edad se llama: ${emp.mujerMyrNombre()} ya que tiene ${emp.mayorEdad()} años.`