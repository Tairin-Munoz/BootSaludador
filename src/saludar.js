function saludar (nombre,genero,edad,idioma){
    if(idioma === "ES" ||idioma === "es")
    {
        if (genero === "F" ||genero === "f")
        {
            if (edad>30)
            {
                return "Hola Señora " + nombre;
            }
            return "Hola Señorita " + nombre;
        }
        else
        { 
            if (edad>30)
            {
            return "Hola Señor " + nombre;
            }
            return "Hola Señorito " + nombre;
        }
    }
    else
    {
        if (genero === "F" ||genero === "f")
            {
                if (edad>30)
                {
                    return "Hi Madam " + nombre;
                }
                return "Hi Miss " + nombre;
            }
            else
            { 
                if (edad>30)
                {
                return "Hi Sir " + nombre;
                }
                return "Hi young " + nombre;
            }
    }
    
}

export default saludar;