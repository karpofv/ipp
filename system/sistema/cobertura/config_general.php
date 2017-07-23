<link href="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery.dataTables.min.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery-1.12.4.js"></script>
<script type="text/javascript" src="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery.dataTables.min.js"></script>
<?php
    $codigo = $_POST[codigo];
    $tipo = $_POST[tipo];
    $tipoemp = $_POST[tipoemp];
    $vice = $_POST[vice];
    $solicita = $_POST[solicita];
    $monto = $_POST[monto];
	$eliminar = $_POST[eliminar];
	$editar = $_POST[editar];
	/*GUARDAR*/
	if($editar == 1 and $codigo=='' and $monto !=""){
		$consul = paraTodos::arrayConsultanum("*", "cobertura_limite", "cobl_caso='$tipo' and cobl_tipo_emp='$tipoemp' and cobl_vicerrectorado='$vice' and cobl_solicita='$solicita' and cobdf_monto='$monto'");
		if ($consul>0){
			paraTodos::showMsg("Ya existe una configuración bajo estos parametros", "alert-danger");
		} else{   
			paraTodos::arrayInserte("cobl_caso, cobl_tipo_emp,cobl_vicerrectorado, cobl_solicita, cobl_monto", "cobertura_limite", "'$tipo', '$tipoemp','$vice','$solicita','$monto'");
            $codigo = "";
            $tipo = "";
            $tipoemp = "";
            $vice = "";
            $solicita = "";
            $monto = ""; 
		}
	}
	/*UPDATE*/
	if($editar == 1 and $codigo!=''  and $monto !=""){
		paraTodos::arrayUpdate("cobl_caso='$tipo', cobl_tipo_emp='$tipoemp',cobl_vicerrectorado='$vice', cobl_solicita='$solicita', cobl_monto='$monto'", "cobertura_limite", "cobl_codigo=$codigo");
            $codigo = "";
            $tipo = "";
            $tipoemp = "";
            $vice = "";
            $solicita = "";
            $monto = "";
	}
	/*ELIMINAR*/
	if ($eliminar == 1){
		paraTodos::arrayDelete("cobl_codigo=$codigo", "cobertura_limite");
        $codigo = "";
        $tipo = "";
        $tipoemp = "";
        $vice = "";
        $solicita = "";
        $monto = "";
	}
	/*MOSTRAR*/
	if($editar == 1 and $codigo!='' and $monto ==""){
        $consulconfig = paraTodos::arrayConsulta("cl.cobl_codigo, tc.tipc_codigo, tp.tip_codigo, v.vic_codigo, s.sol_codigo, cl.cobl_monto", "cobertura_limite cl
left join gen_tipo_caso tc on cl.cobl_caso=tc.tipc_codigo
left join gen_tipo_personal tp on cl.cobl_tipo_emp=tp.tip_codigo
left join vicerrectorado v on cl.cobl_vicerrectorado=v.vic_codigo
left join gen_solicitantes s on cl.cobl_solicita=s.sol_codigo", "cobl_codigo=$codigo");
		foreach($consulconfig as $row){
            $tipo = $row[tipc_codigo];
            $tipoemp = $row[tip_codigo];
            $vice = $row[vic_codigo];
            $solicita = $row[sol_codigo];
            $monto = $row[cobl_monto];
		}
	}
?>
    <div class="row">
        <div class="col-sm-12">
            <h3>ADMINISTRACIÓN <small>Configurar coberturas</small></h3> </div>
    </div>
    <!-- .row -->
    <div class="row" id="registro">
        <div class="col-sm-12">
            <div class="with_background with_padding bottommargin_30">
                <h3>Nuevos registros <a href="javascript:void(0)" class="pull-right" onclick="minimize();" id="iminimize"><i class="rt-icon2-chevron-up highlight fontsize_16"></i></a>
                    <a href="javascript:void(0)" class="collapse pull-right" onclick="maximize();" id="imaximize"><i class="rt-icon2-chevron-down highlight fontsize_16"></i></a></h3>
                <form id="frmdifcaso" class="" action="javascript:void(0)" method="post" onsubmit="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: <?php echo $idMenut;?>,
									codigo 	: $('#codigo').val(),
									tipo 	: $('#seltipo').val(),
									tipoemp 	: $('#seltipoemp').val(),
									vice 	: $('#vice').val(),
									solicita 	: $('#solicita').val(),
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
                            <div class="col-xs-3">
                                <input type="hidden" id="codigo" value="<?php echo $codigo;?>">
                                <label class="control-label" for="seltipo">Tipo de caso</label>
                                <input type="hidden" id="codigo" value="<?php echo $codigo;?>">
                                <select class="form-control" id="seltipo" required>
                                    <option value="">Opciones</option>
                                    <?php
                                        combos::CombosSelect("1", "$tipo", "tipc_codigo, tipc_descripcion", "gen_tipo_caso", "tipc_codigo", "tipc_descripcion", "1=1");
                                    ?>
                                </select>
                            </div>
                            <div class="col-xs-3">
                                <label class="control-label" for="seltipoemp">Tipo de empleado</label>
                                <select class="form-control" id="seltipoemp">
                                    <option value="0">Todos</option>
                                    <?php
                                        combos::CombosSelect("1", "$tipoemp", "tip_codigo, tip_descripcion", "gen_tipo_personal", "tip_codigo", "tip_descripcion", "1=1");
                                    ?>
                                </select>
                            </div>
                            <div class="col-xs-3">
                                <label class="control-label" for="vice">Vicerretorado</label>
                                <select class="form-control" id="vice">
                                    <option value="0">Todos</option>
                                    <?php
                                        combos::CombosSelect("1", "$vice", "vic_codigo, vic_descripcion", "vicerrectorado", "vic_codigo", "vic_descripcion", "1=1");
                                    ?>
                                </select>
                            </div>
                            <div class="col-xs-3">
                                <label class="control-label" for="solicita">Solicitante</label>
                                <select class="form-control" id="solicita">
                                    <option value="0">Todos</option>
                                    <?php
                                        combos::CombosSelect("1", "$solicita", "sol_codigo, sol_descripcion", "gen_solicitantes", "sol_codigo", "sol_descripcion", "1=1");
                                    ?>
                                </select>
                            </div>
                            <div class="col-xs-4">
                                <label class="control-label" for="txtmonto">Monto limite</label>
                                <input class="form-control" type="number" id="txtmonto" value="<?php echo $monto; ?>" required> </div>
                        </div>
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
                <table class="table table-hover" id="configcob">
                    <thead>
                        <tr>
                            <td><strong>Caso</strong></td>
                            <td><strong>Tipo Empleado</strong></td>
                            <td><strong>Vicerrectorado</strong></td>
                            <td><strong>Tipo solicitante</strong></td>
                            <td><strong>Monto</strong></td>
                            <td><strong>Editar</strong></td>
                            <td><strong>Eliminar</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $consuldif = paraTodos::arrayConsulta("*", "cobertura_limite cl
left join gen_tipo_caso tc on cl.cobl_caso=tc.tipc_codigo
left join gen_tipo_personal tp on cl.cobl_tipo_emp=tp.tip_codigo
left join vicerrectorado v on cl.cobl_vicerrectorado=v.vic_codigo
left join gen_solicitantes s on cl.cobl_solicita=s.sol_codigo", "1=1");
                        foreach($consuldif as $row){
                        ?>
                            <tr>
                                <td>
                                    <?php echo utf8_decode($row[tipc_descripcion]);?>
                                </td>
                                <td>
                                    <?php
                            if($row[tip_codigo]==0){
                                echo "No aplica";
                            } else {
                                echo utf8_decode($row[tip_descripcion]);
                            } ?></td>
                                <td>
                                    <?php
                            if($row[vic_codigo]==0){
                                echo "No aplica";    
                            } else {
                                echo utf8_decode($row[vic_descripcion]);
                            }
                                    ?>
                                </td>
                                <td>
                                    <?php if($row[sol_codigo]==0){
                                    echo "No aplica";              
                                    } else {
                                        echo utf8_decode($row[sol_descripcion]) ;
                                    };
                                    ?>
                                </td>
                                <td class="text-center">
                                    <?php echo number_format($row[cobl_monto], 2, ",", ".");?>
                                </td>
                                <td class="text-center"> <a href="javascript:void(0)" onclick="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: <?php echo $idMenut;?>,
									codigo 	: <?php echo $row[cobl_codigo];?>,                                                                      
									editar: 1,
									ver 	: 2
								},
								success : function (html) {
									$('#page-content').html(html);                  
                                },
							}); return false;"><i class="rt-icon2-pen highlight fontsize_16"></i></a> </td>
                                <td class="text-center"> <a href="javascript:void(0)" onclick="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: <?php echo $idMenut;?>,
									codigo 	: <?php echo $row[cobl_codigo];?>,
									eliminar: 1,                                                                    
									ver 	: 2
								},
								success : function (html) {
									$('#page-content').html(html);                   
                                },
							}); return false;"><i class="rt-icon2-delete-outline highlight fontsize_16"></i></a> </td>
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
        function minimize() {
            $("#frmbenef").css("display", "none");
            $("#iminimize").addClass("collapse");
            $("#imaximize").removeClass("collapse");
        }

        function maximize() {
            $("#frmbenef").css("display", "block");
            $("#iminimize").removeClass("collapse");
            $("#imaximize").addClass("collapse");
        }
    </script>
    <script>
        $('#configcob').DataTable({
            "language": {
                "url": "<?php echo $ruta_base;?>assets/js/Spanish.json"
            }
        });
    </script>