var array=[];

function submit(){

    var T_uno=document.getElementById("nombre_alumno_1").value;
    var T_dos=document.getElementById("nombre_alumno_2").value;
    var T_tres=document.getElementById("nombre_alumno_3").value;
    var T_cuatro=document.getElementById("nombre_alumno_4").value;

    array.push(T_uno);
    array.push(T_dos);
    array.push(T_tres);
    array.push(T_cuatro);

    console.log(array);

    document.getElementById("ver_nombre").innerHTML=array;

}