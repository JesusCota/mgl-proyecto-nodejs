var classProfes= function()

{

	var nombre="";

	var apellido="";

	var correo="";

	var telefono=0;

	var materia="";	

}

classProfes.prototype.setnombre = function(nombre)

{

	this.nombre=nombre;

};

classProfes.prototype.getnombre = function()

{

	return this.nombre;

};

classProfes.prototype.setapellido = function(apellido)

{

	this.apellido=apellido;

};

classProfes.prototype.getapellido = function()

{

	return this.apellido;

}

classProfes.prototype.setcorreo = function(correo)

{

	this.correo=correo;	

}

classProfes.prototype.getcorreo= function()

{

	return this.correo;

}

classProfes.prototype.settelefono = function(telefono)

{

	this.telefono=telefono;	

}

classProfes.prototype.gettelefono= function()

{

	return this.telefono;

}

classProfes.prototype.setmateria = function(materia)

{

	this.materia=materia;	

}

classProfes.prototype.getmateria= function()

{

	return this.materia;

}

var classPeticion=function(){}

classPeticion.prototype.ask=function(question,format,callback)

{


	var stdin=proceso.stdin;

	var stdout=proceso.stdout;

	stdin.resume();

	stdout.write(question+": ");

	stdin.once('data',(function(data)

		{

			data=data.toString().trim();

			if(format.test(data))

			{

			callback(data)

			}

			else

				stdout.write("ingresa bien los datos "+format+" \n");

				this.ask(question,format,callback);

		}).bind(this));

};

var classMuestra=function(){};

classMuestra.prototype.inicio =function()

{

	var nombre;

	var apellido;

	var correo;

	var telefono;

	var materia;

	var datos= new classProfes();

	var peticion=new classPeticion();

	peticion.ask("Nombre ",/.+/,function(nombre){datos.setnombre(nombree)

	peticion.ask("Apellido ",/.+/,function(apellido){datos.setapellido(apellido)

	peticion.ask("Correo ",/.+/,function(correo){datos.setcorreo(correo)

	peticion.ask("Telefono ",/[0-9]+/,function(telefono){datos.settelefono(telefono)

	peticion.ask("Materia ",/.+/,function(materia){datos.setmateria(materia)

	 console.log("\n\n Datos Almacenados:\n------------------------------");                                            

	                   console.log("Nombre: ",datos.getnombre());

	                   console.log("Apellido: ",datos.getapellido());

	                   console.log("Correo: ",datos.getcorreo());

	                   console.log("Telefono: ",datos.gettelefono());

	                   console.log("Materia: ",datos.getmateria());

	            proceso.exit();


	});


	});


	});					


});				


});			

};

var main=new classMuestra();

main.inicio();
