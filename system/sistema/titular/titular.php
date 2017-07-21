<link href="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery.dataTables.min.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery-1.12.4.js"></script>
<script type="text/javascript" src="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery.dataTables.min.js"></script>
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
    $sueldo = $_POST[sueldo];            
    $selindem = $_POST[selindem];            
    $fecing = $_POST[fecing];            
    $vice = $_POST[vice];            
    $cargo = $_POST[cargo];            
    $seltipper = $_POST[seltipper];            
    $seltipdoc = $_POST[seltipdoc];
	$eliminar = $_POST[eliminar];
	$editar = $_POST[editar];
	/*GUARDAR*/
	if ($editar==1 and $codigo=='' and $nombre !=""){
		$consul = paraTodos::arrayConsultanum("tit_cedula", "titular", "tit_cedula='$cedemp'");
		if ($consul>0){
			paraTodos::showMsg("Titular ya está registrado", "alert-danger");
		} else{
			$insertar = paraTodos::arrayInserte("tit_cedula, tit_nombres, tit_apellidos, tit_fecnac, tit_telhab, tit_telcel, tit_direccion, tit_correo, tit_status, tit_nac", "titular", "'$cedemp', '$nombre', '$apellido', '$fecnac', '$telhab', '$telcel', '$direc', '$correo', 1, $selnac");
            if($insertar){
                $consultit = paraTodos::arrayConsulta("tit_codigo", "titular", "tit_cedula=$cedemp");
                foreach($consultit as $tit){
                    $titcodigo = $tit[tit_codigo];
                }
                paraTodos::showMsg("$titcodigo, '$sueldo', $selindem, '$fecing', $vice, '$cargo', $seltipper, $seltipdoc", "", "");
                $insertardp = paraTodos::arrayInserte("titp_titcodigo, titp_sueldo, titp_indem, titp_fecing, titp_viccodigo, titp_cargo, titp_tippersonal, tip_tipdocente", "titular_datosp", "$titcodigo, '$sueldo', $selindem, '$fecing', $vice, '$cargo', $seltipper, $seltipdoc");
            }
		}
	}
	/*UPDATE*/
	if($editar == 1 and $codigo!='' and $nombre !=""){
		paraTodos::arrayUpdate("tit_cedula=$cedemp, tit_fecnac='$fecnac', tit_nombres='$nombre', tit_apellidos='$apellido', tit_telhab='$telhab', tit_telcel='$telcel', tit_correo='$correo', tit_direccion='$direc', tit_status='$status', tit_nac=$selnac", "titular", "tit_codigo=$codigo");
        paraTodos::arrayUpdate("titp_sueldo='$sueldo', titp_indem='$selindem', titp_fecing='$fecing', titp_viccodigo='$vice', titp_cargo='$cargo', titp_tippersonal='$seltipper', tip_tipdocente='$seltipdoc'", "titular_datosp", "titp_titcodigo=$codigo");
	}
	/*MOSTRAR*/
	if($editar == 1 and $codigo!='' and $nombre ==""){
		$consulta = paraTodos::arrayConsulta("*", "titular left join titular_datosp on titp_titcodigo=tit_codigo", "tit_codigo=$codigo");
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
            /*Datos personales*/
            $sueldo = $row[titp_sueldo];            
            $selindem = $row[titp_indem];            
            $fecing = $row[titp_fecing];            
            $vice = $row[titp_viccodigo];            
            $cargo = $row[titp_cargo];            
            $seltipper = $row[titp_tippersonal];            
            $seltipdoc = $row[tip_tipdocente];            
		}
	}
	/*ELIMINAR*/
	if ($eliminar == 1){
		paraTodos::arrayDelete("tit_codigo=$codigo", "titular");
        $eliminar='';
	}
?>
    <div class="row">
        <div class="col-sm-12">
            <h3>ADMINISTRACIÓN <small>TITULARES</small>                
            </h3>
        </div>
    </div>
    <!-- .row -->
    <div class="row" id="registro">
        <div class="col-sm-12">
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
									sueldo 	: $('#txtsueldo').val(),
									selindem 	: $('#selindem').val(),
									fecing 	: $('#txtfecing').val(),
									vice 	: $('#selvice').val(),
									cargo 	: $('#txtcargo').val(),
									seltipper 	: $('#seltipper').val(),
									seltipdoc 	: $('#seltipdoc').val(),
									editar: 1,
									eliminar: '<?php echo $eliminar?>',
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
									$('#txtsueldo').val('');
									$('#txtfecing').val('');
									$('#txtcargo').val('');                                                                                             '' ;
                                },
							}); return false;">            
                <div class="with_background with_padding bottommargin_30">
                    <h3>Datos Generales                <button class="btn btn-green pull-right" type="button" id="Vertodos">Ver Todos</button></h3>
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
                </div>
                <div class="with_background with_padding bottommargin_30">
                    <h3>Datos laborales</h3>
                    <div class="row">
                        <div class="form-group">
                            <div class="col-xs-6">
                                <label class="control-label" for="txtcargo">Cargo</label>
                                <input type="text" class="form-control" id="txtcargo" value="<?php echo $cargo?>" required>
                            </div> 
                            <div class="col-xs-2">
                                <label class="control-label" for="txtfecing">Fec. de ingreso</label>
                                <input type="date" class="form-control" id="txtfecing" value="<?php echo $fecing?>" required> 
                            </div>                            
                            <div class="col-sm-2">
                                <label class="control-label" for="txtcedula">Sueldo</label>
                                <input class="form-control" type="number" id="txtsueldo" min="1" value="<?php echo $sueldo;?>">
                            </div>                            
                            <div class="col-xs-2">
                                <label class="control-label" for="selindem">Indemnización</label>
                                <select class="form-control" id="selindem">
                                    <option value="0">Seleccione %</option>                                    
                                    <?php
                                        combos::CombosSelect("1", "$selindem", "in_codigo, in_descripcion", "gen_indemnizacion", "in_codigo", "in_descripcion", "1=1");
                                    ?>
                                </select>
                            </div>
                            <div class="col-xs-2">
                                <label class="control-label" for="selvice">Vicerrectorado</label>
                                <select class="form-control" id="selvice">
                                    <option value="0">Vicerrectorado</option>
                                    <?php
                                        combos::CombosSelect("1", "$vice", "vic_codigo, vic_descripcion", "vicerrectorado", "vic_codigo", "vic_descripcion", "1=1");
                                    ?>
                                </select>
                            </div>
                            <div class="col-xs-2">
                                <label class="control-label" for="seltipper">Tipo de personal</label>
                                <select class="form-control" id="seltipper">
                                    <option value="0">Tipo de personal</option>
                                    <?php
                                        combos::CombosSelect("1", "$seltipper", "tip_codigo, tip_descripcion", "gen_tipo_personal", "tip_codigo", "tip_descripcion", "1=1");
                                    ?>
                                </select>
                            </div>
                            <div class="col-xs-2 collapse" id="divselcdoc">
                                <label class="control-label" for="seltipdoc">Tipo de docente</label>
                                <select class="form-control" id="seltipdoc">
                                    <option value="0">Tipo de docente</option>
                                    <?php
                                        combos::CombosSelect("1", "$seltipdoc", "tipdoc_codigo, tipdoc_descripcion", "gen_tipo_docente", "tipdoc_codigo", "tipdoc_descripcion", "1=1");
                                    ?>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn btn-green" type="submit">Guardar</button>
            </form>                
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
        $("#seltipper").change(function(){
            if($("#seltipper").val()==1){
                $("#divselcdoc").removeClass("collapse");
            } else {
                $("#divselcdoc").addClass("collapse");
            }            
        });
        $("#Vertodos").click(function () {
            $("#registro").css("display", "none");
            $("#buscar").css("display", "block");
        });
        $("#Back").click(function () {
            $("#registro").css("display", "block");
            $("#buscar").css("display", "none");
        });
    </script>
            <script>
    $('#titular').DataTable({
        "language": {
            "url": "<?php echo $ruta_base;?>assets/js/Spanish.json"
        }
    });
</script>