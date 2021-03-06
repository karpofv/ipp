<link href="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery.dataTables.min.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery-1.12.4.js"></script>
<script type="text/javascript" src="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery.dataTables.min.js"></script>
<?php
	$codigo = $_POST[codigo];
	$razon = $_POST[razon];
	$numclinica = $_POST[numero];
	$nombre = $_POST[nombre];
	$eliminar = $_POST[eliminar];
	$editar = $_POST[editar];
	/*GUARDAR*/
	if($editar == 1 and $codigo=='' and $nombre !=""){
		$consul = paraTodos::arrayConsultanum("cl_descripcion", "clinica", "cl_descripcion='$nombre'");
		if ($consul>0){
			paraTodos::showMsg("Clínica ya está registrada bajo esta descripción", "alert-danger");
		} else{
			paraTodos::arrayInserte("cl_razon, cl_numero,cl_descripcion", "clinica", "'$razon', '$numclinica','$nombre'");
		}
	}
	/*UPDATE*/
	if($editar == 1 and $codigo!=''  and $nombre !=""){
		paraTodos::arrayUpdate("cl_razon='$razon', cl_numero='$numclinica',cl_descripcion='$nombre'", "clinica", "cl_codigo=$codigo");
	}
	/*MOSTRAR*/
	if($editar == 1 and $codigo!='' and $nombre ==""){
		$consulta = paraTodos::arrayConsulta("*", "clinica", "cl_codigo=$codigo");
		foreach($consulta as $row){
            $razon = $row[cl_razon];
            $numclinica = $row[cl_numero];
            $nombre = $row[cl_descripcion];
		}
	}
	/*ELIMINAR*/
	if ($eliminar == 1){
		paraTodos::arrayDelete("cl_codigo=$codigo", "clinica");
        $eliminar='';
        $codigo='';
	}
?>
    <div class="row">
        <div class="col-sm-12">
            <h3>ADMINISTRACIÓN <small>CLÍNICAS</small></h3>
        </div>
    </div>
    <!-- .row -->    
<div class="row" id="registro">
        <div class="col-sm-12">
            <div class="with_background with_padding bottommargin_30">
                <h3>Nuevos registros <a href="javascript:void(0)" class="pull-right" onclick="minimize();" id="iminimize"><i class="rt-icon2-chevron-up highlight fontsize_16"></i></a>
                    <a href="javascript:void(0)" class="collapse pull-right" onclick="maximize();" id="imaximize"><i class="rt-icon2-chevron-down highlight fontsize_16"></i></a></h3>
                
                <form id="frmbenef" class="" action="javascript:void(0)" method="post" onsubmit="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: <?php echo $idMenut;?>,
									codigo 	: $('#codigo').val(),
									razon 	: $('#selrazon').val(),
									numero 	: $('#txtcedula').val(),
									nombre 	: $('#txtnombre').val(),
									editar: '1',
									eliminar: '<?php echo $eliminar?>',
									ver 	: 2
								},
								success : function (html) {
									$('#page-content').html(html);
									$('#codigo').val('');
									$('#selrazon').val('');
									$('#txtcedula').val('');
									$('#txtnombre').val('');
                                },
							}); return false;">
                    <div class="row">
                        <div class="form-group">
                            <div class="col-xs-2">
                                <label class="control-label" for="selrazon">Razón social</label>
                                <select class="form-control" id="selrazon">
                                    <option value="0">Opciones</option>
                                    <?php
                                        combos::CombosSelect("1", "$razon", "raz_codigo, raz_descripcion", "gen_razon_social", "raz_codigo", "raz_descripcion", "1=1");
                                    ?>
                                </select>
                            </div>                            
                            <div class="col-sm-2">
                                <label class="control-label" for="txtcedula">Nº</label>
                                <input class="form-control" type="number" id="txtcedula" min="1" value="<?php echo $numclinica;?>"> 
                                <input class="collapse" type="number" id="codigo" value="<?php echo $codigo;?>">                                 
                            </div>
                            <div class="col-xs-8">
                                <label class="control-label" for="txtnombre">Nombre</label>
                                <input type="text" class="form-control" id="txtnombre" value="<?php echo $nombre?>" required> 
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <br>
                        <button class="btn btn-green" type="submit">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- .row -->
    <div class="row" id="buscar">
        <div class="col-sm-12">
            <div class="with_background with_padding bottommargin_30">
                <h3>clínicas registradas</h3>
                <table class="table table-hover" id="clinica">
                    <thead>
                        <tr>
                            <td><strong>Razón social</strong></td>
                            <td><strong>Nº</strong></td>
                            <td><strong>Nombre</strong></td>
                            <td><strong>Editar</strong></td>
                            <td><strong>Eliminar</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                            $consultit = paraTodos::arrayConsulta("*", "clinica c, gen_razon_social rs", "c.cl_razon=rs.raz_codigo");
                            foreach($consultit as $row){
        ?>
                            <tr>
                                <td>
                                    <?php echo $row[raz_descripcion];?>
                                </td>
                                <td>
                                    <?php echo $row[cl_numero];?>
                                </td>
                                <td>
                                    <?php echo utf8_decode($row[cl_descripcion]);?>
                                </td>
                            <td class="text-center">
                                <a href="javascript:void(0)" onclick="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: <?php echo $idMenut;?>,
									codigo 	: <?php echo $row[cl_codigo];?>,                                                                      
									editar: 1,
									ver 	: 2
								},
								success : function (html) {
									$('#page-content').html(html);                  
                                },
							}); return false;"><i class="rt-icon2-pen highlight fontsize_16"></i></a>
                            </td>                            
                            <td class="text-center">
                                <a href="javascript:void(0)" onclick="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: <?php echo $idMenut;?>,
									codigo 	: <?php echo $row[cl_codigo];?>,
									eliminar: 1,                                                                    
									ver 	: 2
								},
								success : function (html) {
									$('#page-content').html(html);                   
                                },
							}); return false;"><i class="rt-icon2-delete-outline highlight fontsize_16"></i></a>
                            </td>
                            </tr>
                            <?php
                                                    }
        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        function minimize(){
            $("#frmbenef").css("display", "none");
            $("#iminimize").addClass("collapse");
            $("#imaximize").removeClass("collapse");
        }
        function maximize(){
            $("#frmbenef").css("display", "block");
            $("#iminimize").removeClass("collapse");
            $("#imaximize").addClass("collapse");
        }
    </script>
<script>
    $('#clinica').DataTable({
        "language": {
            "url": "<?php echo $ruta_base;?>assets/js/Spanish.json"
        }
    });
</script>