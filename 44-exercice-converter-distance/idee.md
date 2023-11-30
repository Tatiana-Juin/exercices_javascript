# La conversion

## metre en kilometre 
1 metre = 0.01 kilometre 
DONC
valeur * 0.01

## metre en centimetre
1 metre = 100 centimetre 
DONC 
valeur * 100

## metre en metre 
resultat.value = valeur 

## kilometre en metre 
1 kilometre = 1000 metre 
DONC 
valeur * 1000

## kilometre en centimetre 
1 kilometre = 100000 centimetre
DONC 
valeur * 100000

## kilometre en kilometre 
resultat.value = valeur 

## centimetre en metre 
valeur * 0,00001;

## centimetre en kilometre 
1 centimetre = 0.01 kilometre 
DONC 
valeur * 0.01 

## centimetre en centimetre  
resultat.value = valeur 

# ALGORITHMNE 
                        fonction resultat()
VARIABLE
        valeurUniteConv : entier 
        valeurUniteResult : entier 
        uniteConvertir : chaine
        uniteResultat : chaine
        resultat : chaine
DEBUT 

    valeurUniteConv = uniteConvertir.value
    valeurUniteResult = uniteResultat.value

    SI (valeurUniteConv === "Metre" AND valeurUniteResult==="Kilometre")ALORS
        resultat.value = Number(inpConvertir.value) * 0.01
    ELSE
        SI(valeurUniteConv === "Metre" AND valeurUniteResult==="Centimetre")ALORS
             resultat.value = Number(inpConvertir.value) * 100
        ELSE
            SI ( valeurUniteConv === "Metre" AND valeurUniteResult === "Metre" ) ALORS 
                resultat.value = inpConvertir.value
            FSI
        FSI
    FSI

    SI (valeurUniteConv === "Kilometre" AND valeurUniteResult==="Metre")ALORS
        resultat.value = Number(inpConvertir.value) * 1000
    ELSE
        SI(valeurUniteConv === "Kilometre" AND valeurUniteResult==="Centimetre")ALORS
             resultat.value = Number(inpConvertir.value) * 100000
        ELSE
            SI ( valeurUniteConv === "Kilometre" AND valeurUniteResult === "Kilometre" ) ALORS 
                resultat.value = inpConvertir.value
            FSI
        FSI
    FSI

      SI (valeurUniteConv === "Centimetre" AND valeurUniteResult==="Metre")ALORS
        resultat.value = Number(inpConvertir.value) * 0,00001
    ELSE
        SI(valeurUniteConv === "Centimetre" AND valeurUniteResult==="Kilometre")ALORS
             resultat.value = Number(inpConvertir.value) * 0.01
        ELSE
            SI ( valeurUniteConv === "Centimetre" AND valeurUniteResult === "Centimetre" ) ALORS 
                resultat.value = inpConvertir.value
            FSI
        FSI
    FSI


FIN