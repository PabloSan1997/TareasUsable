

export function usuarioRespuesta(objeto:UsuarioInterface|UsuarioTareasInterface){
	const datos = {...objeto} as Partial<UsuarioInterface|UsuarioTareasInterface>;
	delete datos.password;
	return datos;
}