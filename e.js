var e=1, fac=1,serie=3;

for(let j=1;j<=serie;j++)
{
    e+=(1/factorial(j))
}

console.log("El resultado es: " + e);

function factorial(fac)
{
    var totalf=1;
    for(let i=1;i<=fac;i++)
    {
        totalf*=i;
    }

    return totalf;
}