<?php
	$codigo = $_POST[codtit];
	$cedemp = $_POST[cedemp];
	$fecnac = $_POST[fecnac];
	$nombre = $_POST[nombre];
	$apellido = $_POST[apellido];
	$telhab = $_POST[telhab];
	$telcel = $_POST[telcel];
	$correo = $_POST[correo];
	$direc = $_POST[direc];
	$status = $_POST[status];
    $selnac = $_POST[selnac];
	$eliminar = $_POST[eliminar];
	$insertar = $_POST[insertar];
    if ($insertar==""){
        $insertar=1;
    }
	$editar = $_POST[editar];
    if ($editar==""){
        $editar=0;
    }
	$eliminar = $_POST[eliminar];
    if ($eliminar==""){
        $eliminar=0;
    }
	/*GUARDAR*/
	if ($insertar==1 and $nombre !=""){
		$consul = paraTodos::arrayConsultanum("tit_cedula", "titular", "tit_cedula='$cedemp'");
		if ($consul>0){
			paraTodos::showMsg("Titular ya está registrado", "alert-danger");
		} else{
			paraTodos::arrayInserte("tit_cedula, tit_nombres, tit_apellidos, tit_fecnac, tit_telhab, tit_telcel, tit_direccion, tit_correo, tit_status, tit_nac", "titular", "'$cedemp', '$nombre', '$apellido', '$fecnac', '$telhab', '$telcel', '$direc', '$correo', 1, $selnac");
		}
        $insertar=0;
	}
	/*UPDATE*/
	if($editar == 1 and $nombre !=""){
		paraTodos::arrayUpdate("tit_cedula=$cedemp, tit_fecnac='$fecnac', tit_nombres='$nombre', tit_apellidos='$apellido', tit_telhab='$telhab', tit_telcel='$telcel', tit_correo='$correo', tit_direccion='$direc', tit_status='$status', tit_nac=$selnac", "titular", "tit_codigo=$codigo");
        $editar=0;
	}
	/*MOSTRAR*/
	if($editar == 1 and $nombre ==""){
		$consulta = paraTodos::arrayConsulta("*", "titular", "tit_codigo=$codigo");
		foreach($consulta as $row){
            $codigo = $row[tit_codigo];
            $cedemp = $row[tit_cedula];
            $fecnac = $row[tit_fecnac];
            $nombre = $row[tit_nombres];
            $apellido = $row[tit_apellidos];
            $telhab = $row[tit_telhab];
            $telcel = $row[tit_telcel];
            $correo = $row[tit_correo];
            $direc = $row[tit_direccion];
            $status = $row[tit_status];            
            $selnac = $row[tit_nac];
		}
	}
	/*ELIMINAR*/
	if ($eliminar == 1){
		paraTodos::arrayDelete("tit_codigo=$codigo", "titular");
        $eliminar=0;
	}
?>
    <div class="row">
        <div class="col-sm-12">
            <h3>ADMINISTRACIÓN <small>TITULARES</small></h3> </div>
    </div>
    <!-- .row -->
    <div class="row" id="registro">
        <div class="col-sm-12">
            <div class="with_background with_padding bottommargin_30">
                <form id="frmtitular" class="" action="javascript:void(0)" method="post" onsubmit="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: <?php echo $idMenut;?>,
									codtit 	: $('#codigo').val(),
									cedemp 	: $('#txtcedula').val(),
									fecnac 	: $('#txtfecnac').val(),
									nombre 	: $('#txtnombre').val(),
									apellido 	: $('#txtapellido').val(),
									telhab 	: $('#txttelhab').val(),
									telcel 	: $('#txttelcel').val(),
									correo 	: $('#txtcorreo').val(),
									direc 	: $('#txtdirec').val(),
									status 	: $('#selstatus').val(),
									selnac 	: $('#selnac').val(),
									insertar: <?php echo $insertar?>,
									editar: <?php echo $editar?>,
									eliminar: <?php echo $eliminar?>,
									ver 	: 2
								},
								success : function (html) {
									$('#page-content').html(html);
									$('#codigo').val('');
                                    $('#txtcedula').val('');
                                    $('#txtfecnac').val('');
                                    $('#txtnombre').val('');
                                    $('#txtapellido').val('');
                                    $('#txttelhab').val('');
                                    $('#txttelcel').val('');
                                    $('#txtcorreo').val('');
                                    $('#txtdirec').val('');
                                    $('#selstatus').val('');
                                    $('#selnac').val('');
                                },
							}); return false;">
                    <div class="row">
                        <div class="form-group">
                            <div class="col-sm-2">
                                <label class="control-label" for="selnac">Nacionalidad</label>
                                <select class="form-control" id="selnac">
                                    <option value="0">Nacionalidad</option>
                                    <?php
                                        combos::CombosSelect("1", "$selnac", "nac_codigo, nac_descripcion", "gen_nacional", "nac_codigo", "nac_descripcion", "1=1");
                                    ?>
                                </select>
                            </div>
                            <div class="col-sm-3">
                                <label class="control-label" for="txtcedula">Cédula</label>
                                <input class="form-control" type="number" id="txtcedula" min="1" value="<?php echo $cedemp;?>"> 
                                <input class="collapse" type="number" id="codigo" value="<?php echo $codigo;?>">                                 
                            </div>
                            <div class="col-xs-2">
                                <label class="control-label" for="txtfecnac">Fec. Nacimiento</label>
                                <input type="date" class="form-control" id="txtfecnac" value="<?php echo $fecnac?>" required> 
                            </div>
                            <div class="col-xs-2">
                                <label class="control-label" for="selstatus">Estatus</label>
                                <select class="form-control" id="selstatus">
                                    <option value="0">Estatus</option>
                                    <?php
                                        combos::CombosSelect("1", "$status", "st_codigo, st_descripcion", "gen_status", "st_codigo", "st_descripcion", "1=1");
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
                                <label class="control-label" for="txttelhab">Teléfono de casa</label>
                                <input type="tel" class="form-control" id="txttelhab" value="<?php echo $telhab?>"> </div>
                            <div class="col-xs-4">
                                <label class="control-label" for="txttelcel">Teléfono celular</label>
                                <input type="tel" class="form-control" id="txttelcel" value="<?php echo $telcel?>"> </div>
                            <div class="col-xs-4">
                                <label class="control-label" for="txtcorreo">Correo Electónico</label>
                                <input type="mail" class="form-control" id="txtcorreo" value="<?php echo $correo?>"> </div>
                            <div class="col-xs-12">
                                <label class="control-label" for="txtdirec">Dirección</label>
                                <textarea class="form-control" id="txtdirec" rows="2"><?php echo $direc;?></textarea>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-green" type="submit">Guardar</button>
                    <button class="btn btn-green pull-right" type="button" id="Vertodos">Ver Todos</button>
                </form>
            </div>
        </div>
    </div>
    <div class="row collapse" id="buscar">
        <div class="col-sm-12">
            <div class="with_background with_padding bottommargin_30">        
                <button class="btn btn-green pull-right" type="button" id="Back">Regresar</button>                
                <table class="table table-hover" id="titular">
                    <thead>
                    <tr>
                        <td><strong>Cédula</strong></td>
                        <td><strong>Fec. Nacimiento</strong></td>
                        <td><strong>Nombres</strong></td>
                        <td><strong>Apellidos</strong></td>
                        <td><strong>Telef. Casa</strong></td>
                        <td><strong>Telef. Celular</strong></td>
                        <td><strong>Correo</strong></td>
                        <td><strong>Dirección</strong></td>
                        <td><strong>Estatus</strong></td>
                        <td><strong>Editar</strong></td>
                        <td><strong>Eliminar</strong></td>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        $consultit = paraTodos::arrayConsulta("*", "titular t, gen_status g", "t.tit_status=g.st_codigo");
                        foreach($consultit as $row){
    ?>
                        <tr>
                            <td>
                                <?php echo $row[tit_cedula];?>
                            </td>
                            <td>
                                <?php echo paraTodos::convertDate($row[tit_fecnac]);?>
                            </td>
                            <td>
                                <?php echo utf8_decode($row[tit_nombres]);?>
                            </td>
                            <td>
                                <?php echo utf8_decode($row[tit_apellidos]);?>
                            </td>
                            <td>
                                <?php echo utf8_decode($row[tit_telhab]);?>
                            </td>
                            <td>
                                <?php echo utf8_decode($row[tit_telcel]);?>
                            </td>
                            <td>
                                <?php echo utf8_decode($row[tit_correo]);?>
                            </td>                            
                            <td>
                                <?php echo utf8_decode($row[tit_direccion]);?>
                            </td>
                            <td>
                                <?php echo utf8_decode($row[st_descripcion]);?>
                            </td>
                            <td class="text-center">
                                <a href="javascript:void(0)" onclick="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: <?php echo $idMenut;?>,
									codtit 	: <?php echo $row[tit_codigo];?>,
									editar: 1,
									insertar: 0,
									eliminar: 0,
									ver 	: 2
								},
								success : function (html) {
									$('#page-content').html(html);                                                                      
                                    $('#registro').css('display', 'block');
                                    $('#buscar').css('display', 'none');                     
                                },
							}); return false;"><i class="rt-icon2-pen highlight fontsize_16"></i></a>
                            </td>                            
                            <td class="text-center">
                                <a href="javascript:void(0)" onclick="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: <?php echo $idMenut;?>,
									codtit 	: <?php echo $row[tit_codigo];?>,
									insertar: 0,
									editar: 0,
									eliminar: 1,
									ver 	: 2
								},
								success : function (html) {
									$('#page-content').html(html);                                                                      
                                    $('#registro').css('display', 'none');
                                    $('#buscar').css('display', 'block');                     
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
    <script type="text/javascript">
        $("#Vertodos").click(function () {
            $("#registro").css("display", "none");
            $("#buscar").css("display", "block");
        });
        $("#Back").click(function () {
            $("#registro").css("display", "block");
            $("#buscar").css("display", "none");
        });
    </script>