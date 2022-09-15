# ArDol

ArDol es una aplicación cuya función es calcular montos (de dolares a pesos argentinos, y viceversa), tomando en cuenta el valor de cambio oficial, el cambio "solidario" en el que se incluye la retención por Ganancias más el impuesto PAIS, y el valor de cambio "blue".

## Release Notes

#### v1.5:
- Actualizada la alícuota del Impuesto PAIS (+15% en compra/venta de dolar solidario y compras digitales)
#### v1.4:
- Paquetes actualizados
- Actualizada la alícuota de Ganancias para compras digitales (35% => 45%)
#### v1.3:
- Arreglado el routing para Netlify
#### v1.2:
- (NUEVO) Calculadora de precios Steam
  - Ahora los usuarios de Ardol podrán calcular el costo total de las compras que hagan por Steam/Battle.Net/Epic y demas plataformas digitales
  - Incluye una barra desplegable que desglosa los impuestos agregados
  - El usuario solo debe ingresar el monto que le figura en Steam y Ardol le dirá cuánto será el costo final
- Cambios en la interface para integrar la nueva funcionalidad
#### v1.1:
- Remoción del botón Convertir
  - Ahora el cálculo se hace de manera automática sin necesidad de presionar ningún botón
  - Este cambio fue hecho para aprovechar la mecánica del two-way binding de Angular y mejorar la UX
- La interface se adapta a la pantalla de manera automáticamente
  - Si bien desde el inicio la aplicación es adaptable a distintas pantallas, el redimensionado no se hacía de manera automática
#### v1.0:
- Despliegue de la primera versión
