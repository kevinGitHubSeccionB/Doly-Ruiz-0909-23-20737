function calculodeprestamo(){
    const nombre=parseInt(document.getElementById('nombre').value);
    const prest=document.getElementById('prest').value;
    const cuota=parseInt(document.getElementById('cuota').value);

    let porcentaje=0
    switch(prest){
        case'prest':
        cuota=3;
        break;
        case'prest':
        cuota=6;
        break;
        case'prest':
        cuota=9;
        break;
        default:
            alert("seleccione cuota valida.");
            return;

    }
    capital=porcentaje
    interes=2.5
    tiempo=2.5*cuota
    total=capital*interes*tiempo
    document.getElementById('resultado').innerHTML=`capital:${capital.toFixed(2)}<br>
                                                   Horas Extras: Q${interes.toFixed(2)}<br>
                                                   Salario Liquido:Q${total.toFixed(2)}`;
