/**
* Nombre colección: users
datos:
nombres
apellidos
correo
ciudad
país
salario (dólares)
edad (número)
altura (en Centímetros )
peso (en libras)

Realizar los siguientes ejercicios.

1. Obtener todos los usuarios que sean mayores de 18 años.
2. Obtener todos los usuarios que sean de Londres o de París.
3. Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.
4. Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
5. Obtener todos los usuarios que tengan entre 25 y 35 años.
6. Obtener a todos los usuarios que no sean de Estados Unidos.
7. Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.
8. Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.
9. Obtener a todos los usuarios que no sean de Londres ni de París.
10. Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.
11. Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.
12. Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
13. Obtener todos los usuarios que no tengan un correo electrónico registrado.
14. Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
15. Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.
16. Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
17. Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
18. Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
19. Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
20. Obtener todos los usuarios que sean de India y que no tengan un salario registrado.

La actividad debe de ser entregada en un repositorio llamado "mongodb-1" en la rama main.
*/

db.createCollection("users");

db.users.insertMany([
{
nombres: "carlos",
apellidos: "ramirez",
correo: "carlos.ramirez@riwi.io",
ciudad: "medellin",
pais: "colombia",
salario: 3000.00,
edad: 32,
altura: 170,
peso: 180.779
},
{
nombres: "juan",
apellidos: "gomez",
correo: "jhomez@loquesea.com",
ciudad: "bogota",
pais: "colombia",
salario: 1800.00,
edad: 26,
altura: 182,
peso: 190.544
},
{
nombres: "Mariana",
apellidos: "Rojas",
correo: "marirojas@aquies.com",
ciudad: "medellin",
pais: "colombia",
salario: 27450.20,
edad: 27,
altura: 162,
peso: 145.100
},
{
nombres: "Isabella",
apellidos: "Franco",
correo: "isabellafr@loquesea.com",
ciudad: "mexico",
pais: "mexico",
salario: 1879.30,
edad: 45,
altura: 156,
peso: 128.500
},
{
nombres: "alfredo",
apellidos: "mcartur",
correo: "mcafre@gmail.com",
ciudad: "londres",
pais: "reino unido",
salario: 3800.00,
edad: 56,
altura: 186,
peso: 190.440
},
{
nombres: "carolina",
apellidos: "saenz",
correo: "caroza@riwi.io",
ciudad: "tokio",
pais: "japon",
salario: 3150.00,
edad: 35,
altura: 178,
peso: 144.654
},
{
nombres: "juanes",
apellidos: "campillo",
correo: "campi@aquies.com",
ciudad: "quibdo",
pais: "colombia",
salario: 3000.00,
edad: 37,
altura: 171,
peso: 170.565
},
{
nombres: "mark",
apellidos: "zukenberg",
correo: "markzu@gmail.com",
ciudad: "frankfort",
pais: "alemania",
salario: 3870.30,
edad: 43,
altura: 186,
peso: 198.100
},
{
nombres: "angela",
apellidos: "boneira",
correo: "angelabona@esteesotrocorreo.",
ciudad: "rio de janeiro",
pais: "brasil",
salario: 2140.00,
edad: 28,
altura: 176,
peso: 128.700
},
{
nombres: "Nia",
apellidos: "gomez",
correo: "carlos.ramirez@riwi.io",
ciudad: "madrid",
pais: "españa",
salario: 1670.00,
edad: 23,
altura: 168,
peso: 162.434
},

]);

db.users.insertOne(
{
nombres: "Juliana",
apellidos: "cardona",
correo: "julieca@riwi.io",
ciudad: "bogota",
pais: "colombia",
salario: 878.00,
edad: 17,
altura: 165,
peso: 124.023
});

db.users.insertOne(
{
nombres: "rosio",
apellidos: "durcal",
correo: "rosiodk@aquies.com",
ciudad: "barcelona",
pais: "españa",
salario: 7400.00,
edad: 36,
altura: 1657,
peso: 130.200
});

db.users.insertOne(
{
nombres: "Ai",
apellidos: "carli",
correo: "aicarli@uncorreomas.com",
ciudad: "new york",
pais: "usa",
salario: 178000.00,
edad: 21,
altura: 1620,
peso: 128.100
});


db.users.find();
/** 1. Obtener todos los usuarios que sean mayores de 18 años. */
db.users.find({edad:{$gt: 18}});
/** 2. Obtener todos los usuarios que sean de Londres o de París. */
db.users.find({ciudad:{$in: ["londres", "paris"]}});
/** 3. Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años. */
db.users.find({$and:[{salario:{$gt:2000}},{edad:{$lt:30}}]});
/** 4. Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes. */
db.users.find({$and:[{pais:{$eq:"españa"}},{salario:{$gt:3000}}]});
/** 5. Obtener todos los usuarios que tengan entre 25 y 35 años. */
db.users.find({$and:[{edad:{$gt:25}},{edad:{$lt:35}}]});
/** 6. Obtener a todos los usuarios que no sean de Estados Unidos. */
db.users.find({pais:{$ne: "estados unidos"}});
/** 7. Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años. */
db.users.find({$and:[{ciudad:{$eq:"londres"}},{salario:{$gt:2500}}]});//,{$or:{edad:{$gt:30}}}

/** 8. Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras. */

/** 9. Obtener a todos los usuarios que no sean de Londres ni de París. */

/** 10. Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años. */

/** 11. Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm. */

/** 12. Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años. */

/** 13. Obtener todos los usuarios que no tengan un correo electrónico registrado. */

/** 14. Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes. */

/** 15. Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras. */

/** 16. Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años. */

/** 17. Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes. */

/** 18. Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.*/

/** 19. Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm. */

/** 20. Obtener todos los usuarios que sean de India y que no tengan un salario registrado. */

/** OPERACIONES DE ACTUALIZACIÓN *********************************************** */
// funcion UPDATE recibe 3 parametros

// 1. Incrementar el salario de todos los usuarios en un 10%.
db.users.updateMany({},{$mul: { salario: 1.1 }},{multi:true});
//db.users.aggregate([ {$project:{salario: { $round: [ "$salario", 2 ] }}} ]); //dos cifras decimales!?

// 2. Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".
db.users.updateMany(
{ciudad:"new york"},{$set:{ciudad: "Los angeles"}}, {multi:true}
);
// 3. Agregar el correo electrónico "nuevo@riwi.com" al usuario con nombre "Juan" y apellido "Perez".
// agregar usuario
db.users.insertOne(
{
nombres: "juan",
apellidos: "peres",
correo: "aicarli@uncorreomas.com",
ciudad: "panama",
pais: "panama",
salario: 1232.00,
edad: 27,
altura: 1720,
peso: 145.050
});

// actualizar usuario
db.users.updateOne(
{$and:[
{nombres:"juan"}, {apellidos:"peres"}
]}, {$set:{correo:"nuevo@riwi.com"}}, {multi:false}
);

// 4. Actualizar la edad del usuario con correo electrónico "ejemplo@riwi.es" a 35 años.
// agregar usuario
db.users.insertOne(
{
nombres: "mauricio",
apellidos: "riwi",
correo: "ejemplo@riwi.es",
ciudad: "miami",
pais: "usa",
salario: 2030.00,
edad: 38,
altura: 170.0,
peso: 182.031
});
// Actualizar la edad del usuario
db.users.updateOne(
{correo:"ejemplo@riwi.es"},{$set:{edad:35}}, {multi:false}
);

// 5. Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".
db.users.updateMany(
{pais:"mexico"}, {$set:{pais:"canada"}}, {multi:true}
);

// 6. Aumentar la altura de todos los usuarios en 5 centímetros.
db.users.updateOne(
//{correo:"ejemplo@riwi.es"},{$set:{altura:180}}, {multi:false}
{correo:"ejemplo@riwi.es"},{$inc: { altura: 5 }},{multi:false}
);

// 7. Cambiar el apellido del usuario con correo electrónico "otro@riwi.net" a "González".
// 8. Actualizar el peso del usuario con nombre "Maria" a 140 libras.
// 9. Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.
// 10. Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".
// 11. Cambiar la edad de todos los usuarios menores de 30 años a 30 años.
// 12. Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.
// 13. Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".
// 14. Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".
// 15. Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.
// 16. Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.
// 17. Incrementar el salario de los usuarios que viven en "London" en un 25%.
// 18. Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".
// 19. Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".
// 20. Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".

/** OPERACIONES DE ELIMINACIÓN *********************************************** */

// 1. Eliminar todos los usuarios que tienen un salario menor que 2000 dólares.
// 2. Eliminar usuarios que tienen una edad menor que 25 años.
db.users.deleteMany({
edad:{$lte: 25}
});
// 3. Borrar todos los usuarios que viven en "París".
// 4. Eliminar usuarios que tienen un peso superior a 180 libras.
// 5. Eliminar usuarios que tienen una altura inferior a 160 centímetros.
// 6. Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".
db.users.delete({
$and: [
{nombre: "John"},
{apellido: "Doe"}
]
});
// 7. Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".
// 8. Eliminar usuarios que no tienen una dirección de correo electrónico registrada.
// 9. Eliminar usuarios que viven en "Tokyo".
// 10. Borrar todos los usuarios que son menores de 18 años.
// 11. Eliminar usuarios que tienen un salario igual a 0.
db.users.deleteMany(
{salario:{$eq:0}}
);
// 12. Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.
// 13. Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".
// 14. Borrar usuarios que viven en "Bello" y tienen más de 50 años.
// 15. Eliminar todos los usuarios que tienen el apellido "González".
db.users.deleteMany(
{apellido:{$eq:"gonzalez"}}
);

// 16. Borrar usuarios que tienen una edad superior a 70 años.
db.users.deleteMany(
{edad:{$gt:70}}
);
// 17. Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.
db.users.deleteMany(
{$and:[
{pais:canada},{$lt:4000}
]}
);

// 18. Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.
// 19. Eliminar usuarios que tienen una edad igual a 30 años.
db.users.deleteMany(
{edad:{$eq:30}}
);
// 20. Borrar usuarios que tienen una altura superior a 190 centímetros.

