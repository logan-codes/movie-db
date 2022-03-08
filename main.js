
let pagina = 1;

const btnAnterior = document.getElementById('btnAnterior')
const btnSiguiente = document.getElementById('btnSiguiente')


btnSiguiente.addEventListener('click', () => {
    if(pagina < 1000){
        pagina += 1
        cargarPeliculas()
    }
});

btnAnterior.addEventListener('click', () => {
    if(pagina > 1){
        pagina -= 1
        cargarPeliculas()
    }
});



const cargarPeliculas = async() => {

    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f22ff6307afc06158fe27982d676ca3a&language=es-MX&page=${pagina}`)
        


        if (respuesta.status === 200) { //Si la respuesta de la API es correcta se ejecuta el codigo dentro del IF 
            
            const datos = await respuesta.json()


            let peliculas = ''
            datos.results.forEach(pelicula => {
                peliculas += ` 
                
                    


                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                
                            </div>
                        </div>
                    
                    </div>        


                        <div class="col-12" >

                            <div class="card mt-3" style="background-color: red">
                                <div class="card-body">



                                    <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">

                                    <h4>${pelicula.title}</h4>

                                </div>
                            </div>
                            


                        </div>
                    

                `
            })

            document.getElementById('row').innerHTML = peliculas
   
        }else if(respuesta.status === 401){
            console.log('La direccion de la API no es la correcta')
        }else if(respuesta.status === 404){
            console.log("no encontrado")
        }else{
            console.log('Error General')
        }

    } catch (error) {
      console.log(error)  
    }
   
}

cargarPeliculas() 

