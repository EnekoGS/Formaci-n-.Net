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
        const resultado:IPhotos[] = await respuesta.json();
        resultado.forEach( x =>{
            console.log(x);
            console.log(x.download_url);
        });
    } catch (error) {
        console.log(error);
    }
}
obtenerDatosApi();