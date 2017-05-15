<?php
	$codtit = $_POST[codtit];
    $consultit = paraTodos::arrayConsulta("*", "titular", "tit_codigo=$codtit");
    foreach($consultit as $tit){
        $titular = $tit[tit_apellidos]." ".$tit[tit_nombres];
    }
	$codben = $_POST[codben];
	$cedben = $_POST[cedben];
	$fecnac = $_POST[fecnac];
	$nombre = $_POST[nombre];
	$apellido = $_POST[apellido];
	$selparent = $_POST[selparent];
	$sexo = $_POST[sexo];
	$status = $_POST[selstatus];
	$selindem = $_POST[selindem];
	$eliminar = $_POST[eliminar];
	$buscar = $_POST[buscar];
	$insertar = $_POST[insertar];
	$editar = $_POST[editar];
	$eliminar = $_POST[eliminar];
	/*GUARDAR*/
	if($editar == 1 and $codben ==""){
		$consul = paraTodos::arrayConsultanum("ben_cedula", "beneficiario", "ben_cedula='$cedben' and ben_titcodigo=$codtit");
		if ($consul>0){
			paraTodos::showMsg("Beneficiario ya está registrado bajo este titular", "alert-danger");
		} else{
			paraTodos::arrayInserte("ben_titcodigo, ben_poseeced,ben_cedula, ben_nombres, ben_apellidos, ben_fecnac,ben_sexo,ben_parentesco,  ben_indem", "beneficiario", "'$codtit', '$status','$cedben', '$nombre', '$apellido', '$fecnac', '$sexo', '$selparent', '$selindem'");
		}
	}
	/*UPDATE*/
	if($editar == 1 and $codben !="" and $nombre !=""){
		paraTodos::arrayUpdate("ben_cedula=$cedben, ben_nombres='$nombre', ben_apellidos='$apellido', ben_fecnac='$fecnac', ben_sexo='$sexo', ben_parentesco='$selparent', ben_indem='$selindem', ben_poseeced='$status'", "beneficiario", "ben_codigo=$codben");
	}
	/*MOSTRAR*/
	if($editar == 1 and $nombre ==""){
		$consulta = paraTodos::arrayConsulta("*", "beneficiario", "ben_codigo=$codben");
		foreach($consulta as $row){
            $cedben = $row[ben_cedula];
            $fecnac = $row[ben_fecnac];
            $nombre = $row[ben_nombres];
            $apellido = $row[ben_apellidos];
            $selparent = $row[ben_parentesco];
            $sexo = $row[ben_sexo];
            $selindem = $row[ben_indem];
            $status = $row[ben_poseeced];
		}
	}
	/*ELIMINAR*/
	if ($eliminar == 1){
		paraTodos::arrayDelete("ben_codigo=$codben", "beneficiario");
	}
?>
    <div class="row">
        <div class="col-sm-12">
            <h3>ADMINISTRACIÓN <small>BENEFICIARIOS</small>TITULAR: <?php echo $titular;?>.</h3></div>
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
									codtit 	: <?php echo $codtit?>,
									codben 	: $('#codigo').val(),
									cedben 	: $('#txtcedula').val(),
									fecnac 	: $('#txtfecnac').val(),
									nombre 	: $('#txtnombre').val(),
									sexo 	: $('#selsexo').val(),
									nombre 	: $('#txtnombre').val(),
									apellido 	: $('#txtapellido').val(),
									selparent 	: $('#selparent').val(),
									selindem 	: $('#selindem').val(),
									selstatus 	: $('#selstatus').val(),
									insertar: '<?php echo $insertar?>',
									editar: '1',
									eliminar: '<?php echo $eliminar?>',
                                    act     :2,
									ver 	: 2
								},
								success : function (html) {
									$('#page-content').html(html);
                                    $('#codigo').val('');    
									$('#txtcedula').val('');
									$('#txtfecnac').val('');
									$('#nombre').val('');
									$('#selstatus').val('');
									$('#txtnombre').val('');
									$('#txtapellido').val('');
									$('#selparent').val('');
									$('#selindem').val('');
                                },
							}); return false;">
                    <div class="row">
                        <div class="form-group">
                            <div class="col-xs-2">
                                <label class="control-label" for="selstatus">Posee cédula</label>
                                <select class="form-control" id="selstatus">
                                    <option value="0">Opciones</option>
                                    <?php
                                        combos::CombosSelect("1", "$status", "st_codigo, st_descripcion", "gen_status", "st_codigo", "st_descripcion", "st_codigo=3 or st_codigo=4");
                                    ?>
                                </select>
                            </div>                            
                            <div class="col-sm-3">
                                <label class="control-label" for="txtcedula">Cédula</label>
                                <input class="form-control" type="number" id="txtcedula" min="1" value="<?php echo $cedben;?>"> 
                                <input class="collapse" type="number" id="codigo" value="<?php echo $codben;?>">                                 
                            </div>
                            <div class="col-xs-2">
                                <label class="control-label" for="txtfecnac">Fec. Nacimiento</label>
                                <input type="date" class="form-control" id="txtfecnac" value="<?php echo $fecnac?>" required> 
                            </div>
                            <div class="col-xs-2">
                                <label class="control-label" for="selsexo">Sexo</label>
                                <select class="form-control" id="selsexo">
                                    <option value="0">Opciones</option>
                                    <?php
                                        combos::CombosSelect("1", "$sexo", "id, Nombre", "gen_sexo", "id", "Nombre", "1=1");
                                    ?>
                                </select>
                            </div>                             
                            <div class="col-xs-6">
                                <label class="control-label" for="txtnombre">Nombres</label>
                                <input type="text" class="form-control" id="txtnombre" value="<?php echo $nombre?>" required> </div>
                            <div class="col-xs-6">
                                <label class="control-label" for="txtapellido">Apellidos</label>
                                <input type="text" class="form-control" id="txtapellido" value="<?php echo $apellido?>" required> </div>
                            <div class="col-xs-4">
                                <label class="control-label" for="selparent">Parentesco</label>
                                <select class="form-control" id="selparent">
                                    <option value="0">Opciones</option>
                                    <?php
                                        combos::CombosSelect("1", "$selparent", "par_codigo, par_descripcion", "gen_parentesco", "par_codigo", "par_descripcion", "1=1");
                                    ?>
                                </select>
                            </div>
                            <div class="col-xs-4">
                                <label class="control-label" for="selindem">Indemnización</label>
                                <select class="form-control" id="selindem">
                                    <option value="0">Seleccione %</option>                                    
                                    <?php
                                        combos::CombosSelect("1", "$selindem", "in_codigo, in_descripcion", "gen_indemnizacion", "in_codigo", "in_descripcion", "1=1");
                                    ?>
                                </select>
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
                <h3>Beneficiarios registrados</h3>
                <table class="table table-hover" id="titular">
                    <thead>
                        <tr>
                            <td><strong>Cédula</strong></td>
                            <td><strong>Fec. Nacimiento</strong></td>
                            <td><strong>Nombres</strong></td>
                            <td><strong>Apellidos</strong></td>
                            <td><strong>Sexo</strong></td>
                            <td><strong>Parentesco</strong></td>
                            <td><strong>Indemnización</strong></td>
                            <td><strong>Editar</strong></td>
                            <td><strong>Eliminar</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                            $consultit = paraTodos::arrayConsulta("*", "beneficiario b, gen_sexo g, gen_parentesco p, gen_indemnizacion i", "b.ben_titcodigo=$codtit and b.ben_sexo=g.id and b.ben_parentesco=p.par_codigo and b.ben_indem=i.in_codigo");
                            foreach($consultit as $row){
        ?>
                            <tr>
                                <td>
                                    <?php echo $row[ben_cedula];?>
                                </td>
                                <td>
                                    <?php echo paraTodos::convertDate($row[ben_fecnac]);?>
                                </td>
                                <td>
                                    <?php echo utf8_decode($row[ben_nombres]);?>
                                </td>
                                <td>
                                    <?php echo utf8_decode($row[ben_apellidos]);?>
                                </td>
                                <td>
                                    <?php echo utf8_decode($row[Nombre]);?>
                                </td>
                                <td>
                                    <?php echo utf8_decode($row[par_descripcion]);?>
                                </td>
                                <td>
                                    <?php echo utf8_decode($row[in_descripcion]);?>
                                </td>
                            <td class="text-center">
                                <a href="javascript:void(0)" onclick="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: <?php echo $idMenut;?>,
									codtit 	: <?php echo $codtit;?>,
									codben 	: <?php echo $row[ben_codigo];?>,                                                                      
									editar: 1,
									insertar: 0,
									eliminar: 0,
                                    act     : 2,
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
									codtit 	: <?php echo $codtit;?>,
									codben 	: <?php echo $row[ben_codigo];?>,
									insertar: 0,
									editar: 0,
									eliminar: 1,
                                    act     : 2,                                                                      
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
        $("#Vertodos").click(function () {
            $("#registro").css("display", "none");
            $("#buscar").css("display", "block");
        });
        $("#Back").click(function () {
            $("#registro").css("display", "block");
            $("#buscar").css("display", "none");
        });
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