

export function contarDias(data1: string): { conteo: string, urgencia: boolean } {
    const fechafinal = new Date(data1);
    const fechaActual = new Date();
    const calcular = fechafinal.getTime() - fechaActual.getTime();
    const diferenciaEnDias: number = Math.floor(calcular / (1000 * 3600 * 24));
    if (diferenciaEnDias < 5 && diferenciaEnDias >= 0) return { conteo: `Quedan ${diferenciaEnDias} dias`, urgencia: true }
    else if (diferenciaEnDias < 0) return { conteo: 'Ya se te terminó el tiempo', urgencia: true }
    else return { conteo: '', urgencia: false }
}
