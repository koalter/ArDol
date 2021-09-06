# ArDol

ArDol es una aplicación cuya función es calcular montos (de dolares a pesos argentinos, y viceversa), tomando en cuenta el valor de cambio oficial, el cambio "solidario" en el que se incluye la retención por Ganancias más el impuesto PAIS, y el valor de cambio "blue".

## Release Notes

v1.1:
    1. Remoción del botón Convertir
        - Ahora el cálculo se hace de manera automática sin necesidad de presionar ningún botón
        - Este cambio fue hecho para aprovechar la mecánica del two-way binding de Angular y mejorar la UX
    2. La interface se adapta a la pantalla de manera automáticamente
        - Si bien desde el inicio la aplicación es adaptable a distintas pantallas, el redimensionado no se hacía de manera automática
v1.0:
    * Despliegue de la primera versión
