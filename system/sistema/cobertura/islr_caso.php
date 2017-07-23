<link href="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery.dataTables.min.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery-1.12.4.js"></script>
<script type="text/javascript" src="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery.dataTables.min.js"></script>
<?php
	$codigo = $_POST[codigo];
    $monto = $_POST[monto];
    $tipo = $_POST[tipo];
	$eliminar = $_POST[eliminar];
	$editar = $_POST[editar];
	/*GUARDAR*/
	if($editar == 1 and $codigo=='' and $monto !=""){
		$consul = paraTodos::arrayConsultanum("*", "islr_caso", "islr_caso=$tipo and islr_porcentaje='$monto'");
		if ($consul>0){
			paraTodos::showMsg("Ya existe una configuración bajo estos parametros", "alert-danger");
		} else{
			paraTodos::arrayInserte("islr_caso,islr_porcentaje", "islr_caso", " '$tipo','$monto'");
            $monto = '';
            $tipo = '';
            $codigo="";        
		}
	}
	/*UPDATE*/
	if($editar == 1 and $codigo!=''  and $monto !=""){
		paraTodos::arrayUpdate("islr_porcentaje='$monto', islr_caso='$tipo'", "islr_caso", "islr_codigo=$codigo");
        $monto = '';
        $tipo = '';
        $codigo="";        
	}
	/*MOSTRAR*/
	if($editar == 1 and $codigo!='' and $monto ==""){
        $consuldif = paraTodos::arrayConsulta("*", "islr_caso", "islr_codigo=$codigo");
		foreach($consuldif as $row){
            $monto = $row[islr_porcentaje];
            $tipo = $row[islr_caso];
		}
	}
	/*ELIMINAR*/
	if ($eliminar == 1){
		paraTodos::arrayDelete("islr_codigo=$codigo", "islr_caso");
        $monto = '';
        $tipo = '';
        $codigo="";
	}
?>
    <div class="row">
        <div class="col-sm-12">
            <h3>ADMINISTRACIÓN <small>ISLR por caso</small></h3>
        </div>
    </div>
    <!-- .row -->    
<div class="row" id="registro">
        <div class="col-sm-12">
            <div class="with_background with_padding bottommargin_30">
                <h3>Nuevos registros <a href="javascript:void(0)" class="pull-right" onclick="minimize();" id="iminimize"><i class="rt-icon2-chevron-up highlight fontsize_16"></i></a>
                    <a href="javascript:void(0)" class="collapse pull-right" onclick="maximize();" id="imaximize"><i class="rt-icon2-chevron-down highlight fontsize_16"></i></a>
                </h3>
                <form id="frmdifcaso" class="" action="javascript:void(0)" method="post" onsubmit="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: <?php echo $idMenut;?>,
									codigo 	: $('#codigo').val(),
									tipo 	: $('#seltipo').val(),
									monto 	: $('#txtmonto').val(),
									editar: '1',
									eliminar: '<?php echo $eliminar?>',
									ver 	: 2
								},
								success : function (html) {
									$('#page-content').html(html);
                                },
							}); return false;">
                    <div class="row">
                        <div class="form-group">
                            <div class="col-xs-4">
                                <input type="hidden" id="codigo" value="<?php echo $codigo;?>">                                                                
                                <label class="control-label" for="seltipo">Tipo de caso</label>
                                <select class="form-control" id="seltipo" required>
                                    <option value="">Opciones</option>
                                    <?php
                                        combos::CombosSelect("1", "$tipo", "tipc_codigo, tipc_descripcion", "gen_tipo_caso", "tipc_codigo", "tipc_descripcion", "1=1");
                                    ?>
                                </select>
                            </div>
                            <div class="col-xs-4">
                                <label class="control-label" for="txtmonto">% ISLR</label>
                                <input class="form-control" type="number" id="txtmonto" min="0" max="100" step="any" value="<?php echo $monto; ?>" required>
                            </div>
                        </div>
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
                <h3>Registros cargados</h3>
                <table class="table table-hover" id="clinica">
                    <thead>
                        <tr>
                            <td><strong>Caso</strong></td>
                            <td><strong>Porcentaje</strong></td>
                            <td><strong>Editar</strong></td>
                            <td><strong>Eliminar</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $consuldif = paraTodos::arrayConsulta("*", "islr_caso i, gen_tipo_caso tc", "i.islr_caso=tc.tipc_codigo");
                        foreach($consuldif as $row){
                        ?>
                            <tr>
                                <td>
                                    <?php echo utf8_decode($row[tipc_descripcion]);?>
                                </td>
                                <td class="text-center">
                                    <?php echo number_format($row[islr_porcentaje], 2, ",", ".");?>
                                </td>
                            <td class="text-center">
                                <a href="javascript:void(0)" onclick="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: <?php echo $idMenut;?>,
									codigo 	: <?php echo $row[islr_codigo];?>,                                                                      
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
									codigo 	: <?php echo $row[islr_codigo];?>,
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