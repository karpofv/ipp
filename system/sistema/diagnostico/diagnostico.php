<?php
	$codigo = $_POST[codigo];
	$nombre = $_POST[nombre];
	$descripcion = $_POST[descripcion];
	$eliminar = $_POST[eliminar];
	$editar = $_POST[editar];
	/*GUARDAR*/
	if($editar == 1 and $codigo=='' and $nombre !=""){
		$consul = paraTodos::arrayConsultanum("diag_nombre", "diagnostico", "diag_nombre='$nombre'");
		if ($consul>0){
			paraTodos::showMsg("diagnóstico ya está registrado bajo este nombre.", "alert-danger");
		} else{
			paraTodos::arrayInserte("diag_nombre, diag_descripcion", "diagnostico", "'$nombre', '$descripcion'");
		}
	}
	/*UPDATE*/
	if($editar == 1 and $codigo!=''  and $nombre !=""){
		paraTodos::arrayUpdate("diag_nombre='$nombre', diag_descripcion='$descripcion'", "diagnostico", "diag_codigo=$codigo");
	}
	/*MOSTRAR*/
	if($editar == 1 and $codigo!='' and $nombre ==""){
		$consulta = paraTodos::arrayConsulta("*", "diagnostico", "diag_codigo=$codigo");
		foreach($consulta as $row){
            $descripcion = $row[diag_descripcion];
            $nombre = $row[diag_nombre];
		}
	}
	/*ELIMINAR*/
	if ($eliminar == 1){
		paraTodos::arrayDelete("diag_codigo=$codigo", "diagnostico");
        $eliminar='';
        $codigo='';
	}
?>
    <div class="row">
        <div class="col-sm-12">
            <h3>ADMINISTRACIÓN <small>DIAGNÓSTICOS</small></h3>
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
									descripcion 	: $('#txtdescrip').val(),
									nombre 	: $('#txtnombre').val(),
									editar: '1',
									eliminar: '<?php echo $eliminar?>',
									ver 	: 2
								},
								success : function (html) {
									$('#page-content').html(html);
									$('#codigo').val('');
									$('#txtdescrip').val('');
									$('#txtnombre').val('');
                                },
							}); return false;">
                    <div class="row">
                        <div class="form-group">
                            <div class="col-sm-6">
                                <label class="control-label" for="txtnombre">Diagnóstico</label>
                                <input class="form-control" type="text" id="txtnombre" min="1" value="<?php echo $nombre;?>"> 
                                <input class="collapse" type="number" id="codigo" value="<?php echo $codigo;?>">                                 
                            </div>
                            <div class="col-xs-6">
                                <label class="control-label" for="txtdescrip">Descripción</label>
                                <input type="text" class="form-control" id="txtdescrip" value="<?php echo $descripcion?>" required> 
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
                <h3>Diagnósticos registrados</h3>
                <table class="table table-hover" id="titular">
                    <thead>
                        <tr>
                            <td><strong>Diagnóstico</strong></td>
                            <td><strong>Descripción</strong></td>
                            <td><strong>Editar</strong></td>
                            <td><strong>Eliminar</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                            $consuldiag = paraTodos::arrayConsulta("*", "diagnostico", "1=1");
                            foreach($consuldiag as $row){
        ?>
                            <tr>
                                <td>
                                    <?php echo $row[diag_nombre];?>
                                </td>
                                <td>
                                    <?php echo $row[diag_descripcion];?>
                                </td>
                            <td class="text-center">
                                <a href="javascript:void(0)" onclick="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: <?php echo $idMenut;?>,
									codigo 	: <?php echo $row[diag_codigo];?>,                                                                      
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
									codigo 	: <?php echo $row[diag_codigo];?>,
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