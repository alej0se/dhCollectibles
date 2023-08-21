let fs=require ('fs');
let ruta;
function importar(marca){
    if (marca=='Hot toys'){
        ruta="./datos/figuras1.json";
    }else if(marca=='Bandai'){
        ruta="./datos/figuras2.json";
    }else if (marca=='Star Wars'){
        ruta="./datos/figuras3.json";
    }
    return JSON.parse(fs.readFileSync(ruta));
}
module.exports=importar;