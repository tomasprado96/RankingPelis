const form = document.querySelector('form');

form.addEventListener('submit', async (Event)=>{
    event.preventDefault();
    
    const resultado = await fetchData();
    console.log(resultado);

    if (resultado){
        const output = document.querySelector('#output');
        output.innerHTML=''
        for(i=0; i < resultado.results.length; i++){
        const title=resultado.results[i].original_title;
        const description=resultado.results[i].overview;
        const poster= resultado.results[i].poster_path;
        output.innerHTML +=
         `<div id="contenedor">
         <div id="titulo">
         ${title}
         </div>
         <div id="img">
         <img id=foto src="https://image.tmdb.org/t/p/w300/${poster}">
         </div>
         <div id="desc">
         ${description}
         </div>
         </div>
         
         
         
         
         
         
         
         
         `
    }
}
})

async function fetchData () {
    const pagina = document.querySelector ('#pagina').value;
    const idioma = document.querySelector ('#idioma').value;
    const account_id = 'a7ad6e853ff38e842689e3a62734968e';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${account_id}&language=${idioma}&page${pagina}`;
    const respuesta= await fetch(url);
    const json = await respuesta.json();
    return json;
}