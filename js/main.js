var i_log = 0;
function mkLog(text){
	var date = new Date();
	var txt = i_log + " - " + date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds() + ": " + text;
	i_log++;
	console.log(txt);
}



/* 
* variables de la aplicación
*/
	var existe_db
	var db
	var no_foto


/* 
* carga inicial de la app
*/
function onBodyLoad() {    
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){
	mkLog("Aplicación cargada y lista");
	no_foto = "data:image/png;base64,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";
	existe_db = window.localStorage.getItem("existe_db");
	db = window.openDatabase("agenda_curso", "1.0", "DB del curso Phonegap", 200000);
	if(existe_db == null){
		creaDB();
	}else{
		cargaDatos();
	}
	
	
	$("#b_guardar").click(function(e){
		if($.id != -1){
		 	saveEditForm();
		 }else{
			saveNewForm();
		 }
	 });
}

function readFile(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			var picture = document.getElementById('fotoEdit_img');
			picture.src = e.target.result;
			$.imageURL = picture.src;
			console.log(e.target.result);
		}

		reader.readAsDataURL(input.files[0]);
	}
}

var fileUpload = document.getElementById('file-upload');
fileUpload.onchange = function (e) {
	readFile(e.srcElement);
}

/* 
* creación de la base de datos
*/
function creaDB(){
	db.transaction(creaNuevaDB, errorDB, creaSuccess);
	
}

function creaNuevaDB(tx){
	mkLog("Creando base de datos");
	
	tx.executeSql('DROP TABLE IF EXISTS agenda_curso');
	
	var sql = "CREATE TABLE IF NOT EXISTS agenda_curso ( "+
		"id INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"nombre VARCHAR(50), " +
		"apellidos VARCHAR(50), " +
		"telefono VARCHAR(30), " +
		"categoria VARCHAR(30), " +
		"foto BLOB, " + 
		"email VARCHAR(30) )";
		
	tx.executeSql(sql);
	
	tx.executeSql("INSERT INTO agenda_curso (id,nombre,apellidos,telefono,categoria,foto,email) VALUES (1,'Mónica','Olivarría','+6699900970','amigo','','m.olivarria@ccumazatlan.mx')");
}


function creaSuccess(){
	window.localStorage.setItem("existe_db", 1);
	cargaDatos();
}

function errorDB(err){
	mkLog("Error procesando SQL " + err.code);
	navigator.notification.alert("Error procesando SQL " + err.code);
}



/* 
* carga de datos desde la base de datos
*/
function cargaDatos(){
	db.transaction(cargaRegistros, errorDB);
}

function cargaRegistros(tx){
	mkLog("Cargando registros de la base de datos");
	tx.executeSql('SELECT * FROM agenda_curso', [], cargaDatosSuccess, errorDB);
}

function cargaDatosSuccess(tx, results){
	mkLog("Recibidos de la DB " + results.rows.length + " registros");
	if(results.rows.length == 0){
		mkLog("No se han recibido registros");
		navigator.notification.alert("No hay contactos en la base de datos");
	}
	
	for(var i=0; i<results.rows.length; i++){
		var persona = results.rows.item(i);
		var selector = $("#lista_" + persona.categoria + " ul");
		var foto = persona.foto;
		if(foto == ""){
			foto = no_foto;
		}
		selector.append('<li id="li_'+persona.id+'"><a href="#detalle" data-uid='+persona.id+' class="linkDetalles"><div class="interior_lista"><img src="'+ foto +'" class="img_peq"/><span>' + persona.nombre + ' ' + persona.apellidos+ '</span></div></a><a href="#form"  data-theme="a" data-uid='+persona.id+'  class="linkForm">Predet.</a></li>').listview('refresh');
	}
	
	$(".linkDetalles").click(function(e){
		$.id = $(this).data("uid");
	});
	
	$(".linkForm").click(function(e){
		$.id = $(this).data("uid");
	});
}




/*
* vista detalle
*/

$(document).on("pagebeforeshow", "#detalle", function(){
	if(db != null){
		db.transaction(queryDBFindByID, errorDB);
	}
});



function queryDBFindByID(tx) {
    tx.executeSql('SELECT * FROM agenda_curso WHERE id='+$.id, [], queryDetalleSuccess, errorDB);
}

function queryDetalleSuccess(tx, results) {
	mkLog("Recibidos de la DB en vista detalle" + results.rows.length + " registros");
	if(results.rows.length == 0){
		mkLog("No se han recibido registros para la vista detalle");
		navigator.notification.alert("No hay detalles para ese elemento");
	}
	
	$.registro = results.rows.item(0);
	$("#categoria").html($.registro.categoria);
		var _foto = $.registro.foto;
		if(_foto == ""){
			_foto = no_foto;
		}
		$("#foto_img").attr("src", _foto);
		$("#nombre").html($.registro.nombre + " " + $.registro.apellidos);
		$("#num_tel").html("Teléfono: " + $.registro.telefono);
		$("#label_mail").html("Email: " + $.registro.email);
}





/*
* vista detalle
*/
//vista de la página de edición
$(document).on('pagebeforeshow', '#form', function(){ 
	mkLog('ID recuperado en vista form: ' + $.id);
	
	initForm();
	if(db != null && $.id != -1){
		db.transaction(queryDBFindByIDForm, errorDB);
	}
});

function queryDBFindByIDForm(tx) {
    tx.executeSql('SELECT * FROM agenda_curso WHERE id='+$.id, [], queryFormSuccess, errorDB);
}

function queryFormSuccess(tx, results) {
	mkLog("Recibidos de la DB en vista Form" + results.rows.length + " registros");
	if(results.rows.length == 0){
		mkLog("No se han recibido registros para la vista form");
		navigator.notification.alert("No hay detalles para ese elemento");
	}
	
	$.registro = results.rows.item(0);
	
		$.imageURL = $.registro.foto;
		if($.imageURL == ""){
			$.imageURL = no_foto;
		}
		$("#fotoEdit_img").attr("src", $.imageURL);
		$("#ti_nombre").val($.registro.nombre);
		$("#ti_apellidos").val($.registro.apellidos);
		$("#ti_telefono").val($.registro.telefono);
		$("#ti_mail").val($.registro.email);
		
		$("#cat_"+$.registro.categoria).trigger("click").trigger("click");	//$("#cat_"+$.registro.categoria).attr("checked",true).checkboxradio("refresh");
}
$(document).on('pagebeforeshow', '#home', function(){
	$.id = -1;
});
function initForm(){
	$.imageURL = no_foto;
	
	$("#fotoEdit_img").attr("src", $.imageURL);
	$("#ti_nombre").val("");
	$("#ti_apellidos").val("");
	$("#ti_telefono").val("");
	$("#ti_mail").val("");
		
	$("#cat_familia").trigger("click").trigger("click")
}


/*
* modificando registros
*/
function saveEditForm(){
	if(db != null){
		db.transaction(queryDBUpdateForm, errorDB, updateFormSuccess);
	}
}

function queryDBUpdateForm(tx){
	var cat = $("#cajaCategorias").find("input:checked").val();
	tx.executeSql('UPDATE agenda_curso SET nombre="'+$("#ti_nombre").val()+'", apellidos="'+$("#ti_apellidos").val()+'",telefono="'+$("#ti_telefono").val()+'",email="'+$("#ti_mail").val()+'",categoria="'+cat+'",foto = "'+$.imageURL+'" WHERE id='+$.id);
}
function updateFormSuccess(tx) {
	var selector = $("#li_"+$.id);
	
	var selector = $("#li_"+$.id).clone(true);
	selector.find("img").attr("src", $.imageURL);
	selector.find("a:first").find("span").html($("#ti_nombre").val() + " " + $("#ti_apellidos").val());
	
	
	$("#li_"+$.id).remove();
	
	var cat = $("#cajaCategorias").find("input:checked").val();
	var lista = $("#lista_" + cat + " ul")
	lista.append(selector).listview('refresh');
	
	
	$.mobile.changePage("#home");
}



/*
* creando registros
*/
function saveNewForm(){
	if(db != null){
		db.transaction(queryDBInsertForm, errorDB);
	}
}

function queryDBInsertForm(tx){
	var cat = $("#cajaCategorias").find("input:checked").val();
	
	tx.executeSql("INSERT INTO agenda_curso (nombre,apellidos,telefono,categoria,foto,email) VALUES ('"+$("#ti_nombre").val()+"','"+$("#ti_apellidos").val()+"','"+$("#ti_telefono").val()+"','"+cat+"','"+$.imageURL+"','"+$("#ti_mail").val()+"')", [], newFormSuccess, errorDB);
}
function newFormSuccess(tx, results) {
	var cat = $("#cajaCategorias").find("input:checked").val();
	var lista = $("#lista_" + cat + " ul")
	
	
	var obj = $('<li id="li_'+results.insertId+'"><a href="#detalle" data-uid='+results.insertId+' class="linkDetalles"><div class="interior_lista"><img src="'+ $.imageURL +'" class="img_peq"/><span>' + $("#ti_nombre").val() + " " + $("#ti_apellidos").val()+ '</span></div></a><a href="#form"  data-theme="a" data-uid='+results.insertId+'  class="linkForm">Predet.</a></li>');
	obj.find('.linkDetalles').bind('click', function(e){
		$.id = $(this).data('uid');
	});
	
	obj.find('.linkForm').bind('click', function(e){
		$.id = $(this).data('uid');
	});
	lista.append(obj).listview('refresh');
	
	
	$.mobile.changePage("#home");
}