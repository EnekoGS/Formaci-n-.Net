export interface ICliente{
    nombre: string;
    categoria: string;
    email: string;
    facturacionAnual: number;
    localidad: string;
    moroso?: boolean;
}

// Actividad 1. Sobre la base de formulario anterior, desarrollar un formulario para
// dar soporte a un cliente con estas propiedades:
// Incluir un input para todas las propiedades menos para moroso

//-------------------------------------------------------------------------------------------------------

// Actividad 2. Sobre la actividad anterior, mejorar el formulario de acuerdo a lo siguiente
// La categoria del producto será una lista desplegable con los valores: hogar, alimientación y tecnología
// La propiedad moroso será un checkbox
// Sacar errores personalizados si:
// El nombre no se incluye (deberá ser obligatorio)
// El precio es inferior a 0