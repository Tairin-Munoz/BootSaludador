function saludar (nombre,genero){
    if (genero === "F")
    {
        return "Hola Señora " + nombre;
    }
    else
    {
        return "Hola Señor " + nombre;
    }
}

export default saludar;