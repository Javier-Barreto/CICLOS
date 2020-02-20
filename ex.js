var e=1, x1=1, fac=1, x2=2,serie=3;

for(let j=1;j<=serie;j++)
{
    e+=(x(x2,j)/factorial(j))
}

console.log("El resultado es: " + e);
function x(n,e)
{
    var tx=0, c=0;
    tx=Math.pow(n,e);

    return tx;
}

function factorial(fac)
{
    var totalf=1;
    for(let i=1;i<=fac;i++)
    {
        totalf*=i;
    }

    return totalf;
}