interface IPhotos {
    id:           string;
    author:       string;
    width:        number;
    height:       number;
    url:          string;
    download_url: string;
}

const obtenerDatosApi = async () => {
    try {
        const respuesta = await fetch('https://picsum.photos/v2/list');
        const resultado:IPhotos = await respuesta.json();
        console.log(resultado);
        console.log(resultado.author);
    } catch (error) {
        console.log(error);
    }
}

obtenerDatosApi();