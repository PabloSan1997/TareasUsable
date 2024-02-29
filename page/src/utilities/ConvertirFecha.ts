

export function convertirFecha(fechainicio: string): string {
    const fechaOriginal = new Date(fechainicio);

    // Obtener los componentes de la fecha y hora
    const dia = fechaOriginal.getDate().toString().padStart(2, '0');
    const mes = (fechaOriginal.getMonth() + 1).toString().padStart(2, '0'); // Sumar 1 porque en JavaScript los meses van de 0 a 11
    const año = fechaOriginal.getFullYear();
    const hora = fechaOriginal.getHours().toString().padStart(2, '0');
    const minutos = fechaOriginal.getMinutes().toString().padStart(2, '0');

    // Crear la cadena de texto en el formato deseado
    return `${dia}/${mes}/${año} ${hora}:${minutos}`;


}