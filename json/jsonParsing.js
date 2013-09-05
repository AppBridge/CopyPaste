/* En caso de tener problemas a la hora de parsear un json, se peude deber a ciertos caracteres especiales llamados linefeeds,
dando como resultado un truncado del string json.
Para solucionar este tipo de error, se deben reemplazar dichos caracteres de la siguiente forma:
*/
response = response.replace(/(\r\n|\n|\r)/gm,"");
var json = eval('(' + response + ')');
//Ahora en json tenemos el objeto javascript que representa nuestra cadena de caracteres json (response), que nos haya devuelto nuestro web service