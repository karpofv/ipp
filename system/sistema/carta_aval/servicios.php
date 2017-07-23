<?php
    error_reporting(E_ALL);
    ini_set('display_errors', false);
    ini_set('display_startup_errors', false);
	$codtit = $_POST[codtit];
	$codben = $_POST[codben];
	$codigo = $_POST[codigo];
	$fecha = $_POST[fecha];
	$monto = $_POST[monto];
	$montoindem = $_POST[montoi];
	$cobertura = $_POST[cobertura];
	$descuento = $_POST[descuento];
	$nocubre = $_POST[nocubre];
	$islr = $_POST[islr];
	$proveedor = $_POST[proveedor];
	$diagnostico = $_POST[diagnostico];
	$observacion = $_POST[observacion];
	$editar = $_POST[editar];
	$eliminar = $_POST[eliminar];
    /*INSERTAR*/
    if($editar==1 and $codigo=="" and $codtit!=""){
        $insertar = paraTodos::arrayInserte("caso_tipo, caso_fecha, caso_titcodigo, caso_bencodigo, caso_monto, caso_indem, caso_cobertura, caso_descuento, caso_nocubre, caso_islr, caso_proveedor, caso_dignostico, caso_observacion", "casos", "3, '$fecha', $codtit, '$codben', '$monto', '$montoindem', '$cobertura', '$descuento', '$nocubre', '$islr', '$proveedor', '$diagnostico', '$observacion'");
        if($insertar){
            paraTodos::showMsg("Registro exitoso.", "alert-success", "");
            $fecha ="";
            $monto = "";
            $montoindem = "";
            $cobertura = "";
            $descuento = "";
            $nocubre = "";
            $islr = "";
            $proveedor = "";
            $codproveedor = "";
            $diagnostico = "";
            $observacion = "";
            $codigo="";               
        }
    }
    /*EDITAR*/
    if($editar==1 and $codigo!="" and $monto!=""){
        $update = paraTodos::arrayUpdate("caso_fecha='$fecha', caso_monto='$monto', caso_indem='$montoindem', caso_cobertura='$cobertura', caso_descuento='$descuento', caso_nocubre='$nocubre', caso_islr='$islr', caso_proveedor='$proveedor', caso_dignostico='$diagnostico', caso_observacion='$observacion'", "casos", "caso_codigo=$codigo");
        if($update){
            paraTodos::showMsg("Actualización exitosa.", "alert-success", "");       
        }        
            $fecha ="";
            $monto = "";
            $montoindem = "";
            $cobertura = "";
            $descuento = "";
            $nocubre = "";
            $islr = "";
            $proveedor = "";
            $codproveedor = "";
            $diagnostico = "";
            $observacion = "";
            $codigo="";                
    }
    /*ELIMINAR*/
    if($eliminar==1){
        $delete = paraTodos::arrayDelete("cas_codigo=$codigo", "casos");
        if($delete){
            paraTodos::showMsg("Registro eliminado.", "alert-success", "");
        }        
    }
    /*MOSTRAR*/
    if($editar==1 and $codigo!="" and $monto==""){
        $consulsol = paraTodos::arrayConsulta("*", "casos c, proveedor p, gen_status s", "c.caso_codigo=$codigo and c.caso_proveedor=p.prov_codigo and c.caso_status=s.st_codigo");
        foreach($consulsol as $row){
            $fecha = $row[caso_fecha];
            $monto = $row[caso_monto];
            $montoindem = $row[caso_indem];
            $cobertura = $row[caso_cobertura];
            $descuento = $row[caso_descuento];
            $nocubre = $row[caso_nocubre];
            $islr = $row[caso_islr];
            $proveedor = $row[prov_nombre];
            $codproveedor = $row[prov_codigo];
            $diagnostico = $row[caso_dignostico];
            $observacion = $row[caso_observacion];
        }
    }
    $consultit = paraTodos::arrayConsulta("*", "gen_status s, gen_tipo_personal tp,vicerrectorado v, titular t left join titular_datosp dp on dp.titp_titcodigo=tit_codigo left join gen_tipo_docente td on dp.tip_tipdocente=td.tipdoc_codigo", "tip_codigo=titp_tippersonal and titp_viccodigo=v.vic_codigo and tit_codigo=$codtit and tit_status=s.st_codigo");
    foreach($consultit as $tit){
        $titular = $tit[tit_apellidos]." ".$tit[tit_nombres];
        $status = $tit[st_descripcion];
        $cargo = $tit[titp_cargo];
        $telefonohab = $tit[tit_telhab];
        $telefcel = $tit[tit_telcel];
        $direccion = $tit[tit_direccion];
        $correo = $tit[tit_correo];
        $vice = $tit[vic_descripcion];
        $tipper = $tit[tip_descripcion];
        $tipdoc = $tit[tipdoc_descripcion];
        $fecnac = paraTodos::convertDate($tit[tit_fecnac]);
        $fecing = paraTodos::convertDate($tit[titp_fecing]);
        /*Se busca entonces una en donde no aplique ningun filtro*/
        $consullimite = paraTodos::arrayConsultanum("cobl_monto", "cobertura_limite", "cobl_caso=4 and cobl_tipo_emp=$tit[titp_tippersonal] and cobl_vicerrectorado=$tit[titp_viccodigo] and (cobl_solicita=1 or cobl_solicita=0)");        
        if($consullimite>0){
            $consullimite = paraTodos::arrayConsulta("cobl_monto", "cobertura_limite", "cobl_caso=4 and cobl_tipo_emp=$tit[titp_tippersonal] and cobl_vicerrectorado=$tit[titp_viccodigo] and (cobl_solicita=1 or   cobl_solicita=0)");        
        } else {
            /*Se busca limite en donde el parametro especifico el tipo de personal*/        
            $consullimite = paraTodos::arrayConsultanum("cobl_monto", "cobertura_limite", "cobl_caso=4 and cobl_tipo_emp=$tit[titp_tippersonal] and cobl_vicerrectorado=0 and (cobl_solicita=1 or cobl_solicita=0)");
            if($consullimite>0){
                $consullimite = paraTodos::arrayConsulta("cobl_monto", "cobertura_limite", "cobl_caso=4 and cobl_tipo_emp=$tit[titp_tippersonal] and cobl_vicerrectorado=0 and (cobl_solicita=1 or cobl_solicita=0)");
            } else {
                /*Se busca limite en donde el parametro especifico el vicerrectorado*/        
                $consullimite = paraTodos::arrayConsultanum("cobl_monto", "cobertura_limite", "cobl_caso=4 and cobl_tipo_emp=0 and cobl_vicerrectorado=$tit[titp_viccodigo] and (cobl_solicita=1 or cobl_solicita=0)");
                if($consullimite>0){
                    $consullimite = paraTodos::arrayConsulta("cobl_monto", "cobertura_limite", "cobl_caso=4 and cobl_tipo_emp=0 and cobl_vicerrectorado=$tit[titp_viccodigo] and (cobl_solicita=1 or cobl_solicita=0)");
                } else {
                    /*Se busca limite con todos los parametros*/
                    $consullimite = paraTodos::arrayConsultanum("cobl_monto", "cobertura_limite", "cobl_caso=4 and cobl_tipo_emp=0 and cobl_vicerrectorado=0 and (cobl_solicita=1 or cobl_solicita=0)");
                    if($consullimite>0){
                        $consullimite = paraTodos::arrayConsulta("cobl_monto", "cobertura_limite", "cobl_caso=4 and cobl_tipo_emp=0 and cobl_vicerrectorado=0 and (cobl_solicita=1 or cobl_solicita=0)");
                    };
                }
            }
        }
        foreach($consullimite as $limite){
            $montolimite = $limite[cobl_monto];
        }
        /*Se buscan los casos que estan cargados deL año en curso*/
        $consulcasos = paraTodos::arrayConsulta("sum(c.caso_indem) as total", "casos c", "c.caso_titcodigo=$codtit and c.caso_tipo=4 and c.caso_bencodigo='' and caso_status<>6");
        foreach($consulcasos as $casos){
            $usado = $casos[total];
            $disponible = $montolimite-$usado;
        }        
    }
?>
    <form method="post" id="frmmonto" action="javascript:void(0)" 
          onsubmit="
                    $.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn         :  <?php echo $idMenut;?>,
                                    codtit      :   '<?php echo $codtit;?>',
                                    codigo      :   '<?php echo $codigo;?>',
                                    fecha       :   $('#fecha').val(),
                                    codben      :   '<?php echo $codben;?>',
                                    monto       :   $('#txtmontoserv').val(),
                                    montoi      :   $('#indemnizado').html(),
                                    cobertura   :   $('#cobertura').html(),
                                    descuento   :   $('#descuentoad').val(),
                                    nocubre     :   $('#montonocubre').html(),
                                    islr        :   $('#retencionislr').html(),
                                    proveedor   :   $('#codprov').val(),
                                    diagnostico :   $('#diagnostico').html(),
                                    observacion :   $('#observacion').html(),
                                    editar      :   1,                                                                            
                                    ver         :   2                                         
								},
                                ajaxSend: $('#page-content').html(cargando),                                                                            
								success : function (html) {
									$('#page-content').html(html);
                                },
							}); return false;">
        <div class="row">
            <div class="col-lg-12">
                <div class="row">
                    <!-- User Bio -->
                    <div class="col-xs-12 col-sm-12">
                        <div class="with_background with_padding">
                            <div class="media big-left-media">
                                <div class="media-left"><a href="javascript:void(0)" onclick="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: 370,
                                    act :2,
                                    codtit  :<?php echo $codtit;?>
                                    },
								success : function (html) {
									$('#page-content').html(html);
                                },
                                    }); return false;"><img src="<?php echo $ruta_base;?>assets/images/team/titular.png" alt="..."></a></div>
                                <div class="media-body">
                                    <h4><?php echo $titular;?><small> <?php echo $cargo;?></small><label class="teaser_icon alert-success  pull-right"><?php echo $status;?></label></h4>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <label><strong>Cobertura: </strong><?php echo number_format($montolimite, 2, ",", ".");?></label>
                                        </div>
                                        <div class="col-sm-4">
                                            <label><strong>Disponible: </strong><?php echo number_format(($disponible+$montoindem), 2, ",", ".");?></label>
                                        </div>
                                        <div class="col-sm-4">
                                <div class="media-left media-middle">
                                    <div class="teaser_icon label-success"> <i class="fa fa-search"></i> </div>
                                </div>
                                <div class="media-body media-middle">
                                    <span class="grey">
                                        <a href="javascript:void(0)"
                                           onclick="
                                                    $.ajax({
                                                    url:'accion.php',
                                                    type:'POST',
                                                    ajaxSend: $('#ventanaVer').html(cargando),
                                                    data:{
                                                    titular :   <?php echo $codtit;?>,
                                                    caso    :   3,
                                                    dmn 	:   171,
                                                    act     :   4,
                                                    ver     :   2
                                                    },
                                                    success : function (html) {
                                                    $('#ventanaVer').html(html);
                                                    },
                                                    }); return false;"><strong>Ver historial</strong>
                                        </a>
                                    </span>
                                </div>
                                        </div>                                        
                                    </div>
                                    <label>Fecha</label>
                                    <input type="date" id="fecha" class="form-control" required>
                                </div>
                                <input type="hidden" id="codigo"> 
                            </div>
                        </div>
                        <!-- .with_background -->
                    </div>
                    <!-- .col-* -->
                </div>
                <!-- .row -->
                <div class="row">
                    <!-- User Info -->
                    <div class="col-xs-12 col-lg-6">
                        <div class="with_background with_padding">
                            <h4>Proveedor del servicio</h4>
                            <div class="media muted_background">
                                <div class="media-left media-middle">
                                    <div class="teaser_icon label-success"> <i class="fa fa-search"></i> </div>
                                </div>
                                <div class="media-body media-middle">
                                    <span class="grey">
                                        <a href="javascript:void(0)"
                                           onclick="$.ajax({
                                                    url:'accion.php',
                                                    type:'POST',
                                                    ajaxSend: $('#ventanaVer').html(cargando),
                                                    data:{
                                                    dmn 	:   171,
                                                    act     :   2,
                                                    ver     :   2
                                                    },
                                                    success : function (html) {
                                                    $('#ventanaVer').html(html);
                                                    },
                                                    }); return false;">Buscar proveedor
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <ul class="list1 no-bullets no-top-border no-bottom-border">
                                <li>
                                    <div class="media small-teaser">
                                        <div class="media-left media-middle">
                                            <div class="teaser_icon label-info fontsize_16"> <i class="fa fa-address" aria-hidden="true"></i></div>
                                        </div>
                                        <div class="media-body media-middle">
                                            <input type="hidden" id="codprov" required> <strong class="grey" id="proveedor"></strong> </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- .with_background -->
                    </div>
                    <!-- col-* -->
                    <!-- User Statistics -->
                    <div class="col-xs-12 col-lg-6">
                        <div class="with_background with_padding">
                            <h4>Diagnóstico</h4>
                            <div class="media muted_background">
                                <div class="media-left media-middle">
                                    <div class="teaser_icon label-success"> <i class="fa fa-search"></i> </div>
                                </div>
                                <div class="media-body media-middle">
                                    <span class="grey">
                                        <a href="javascript:void(0)" 
                                           onclick="$.ajax({
                                                    url:'accion.php',
                                                    type:'POST',
                                                    ajaxSend: $('#ventanaVer').html(cargando),                                    
                                                    data:{
                                                    dmn 	:   171,
                                                    act     :   3,
                                                    ver     :   2
                                                    },
                                                    success : function (html) {
                                                    $('#ventanaVer').html(html);
                                                    },
                                                    }); return false;">Buscar diagnóstico
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <ul class="list1 no-bullets no-top-border no-bottom-border">
                                <li>
                                    <div class="media small-teaser">
                                        <div class="media-left media-middle">
                                            <div class="teaser_icon label-info fontsize_16"> <i class="fa fa-address-book-o" aria-hidden="true"></i></div>
                                        </div>
                                        <div class="media-body media-middle">
                                            <input type="hidden" id="coddiag" required> <strong class="grey" id="diagnostico"></strong> </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- .with_background -->
                    </div>
                    <!-- col-* -->
                </div>
            </div>
            <!-- .col-* left column -->
        </div>
        <div class="row" id="buscar">
            <div class="col-sm-12">
                <div class="with_background with_padding bottommargin_30">
                    <h3>Presupuesto</h3>
                    <div class="row bottommargin_30">
                        <div class="col-sm-2">
                            <label class="control-label" for="txtmontoserv">Monto del servicio</label>
                            <input class="form-control" id="txtmontoserv" min="1" value="<?php echo $monto;?>" type="number" onchange="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: <?php echo $idMenut;?>,
                                    monto   :   $('#txtmontoserv').val(),
                                    deduccion   :$('#descuentoad').val(),
                                    act     : 10,
                                    actd    : 3,
                                    ver         :2                                         
								},
								success : function (html) {
									$('#datos').html(html);
                                },
							}); return false;" required>
                        </div>
                        <div class="col-sm-2">
                            <label class="control-label" for="descuentoad">Descuento adicional</label>
                            <input class="form-control" id="descuentoad" min="0" value="<?php echo $descuento;?>" type="number" onchange="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn         : <?php echo $idMenut;?>,
                                    monto       : $('#txtmontoserv').val(),
                                    deduccion   : $('#descuentoad').val(),                                         
                                    act         : 10,
                                    actd        : 3,
                                    ver         :2
								},
								success : function (html) {
									$('#datos').html(html);
                                },
							}); return false;"> </div>
                        <div id="datos">
                            <div class="col-sm-2">
                                <label class="control-label" for="montonocubre">% No cubierto</label>
                                <br>
                                <strong><label class="control-label" id="montonocubre"><?php echo $nocubre;?></label></strong>
                            </div>
                            <div class="col-sm-2">
                                <label class="control-label" for="cobertura">Cobertura</label>
                                <br>
                                <strong><label class="control-label" id="cobertura"><?php echo $cobertura;?></label></strong>
                            </div>
                            <div class="col-sm-2">
                                <label class="control-label" for="retencionislr">Retención I.S.L.R.</label>
                                <br>
                                <strong><label class="control-label" id="retencionislr"><?php echo $islr;?></label></strong>
                            </div>
                            <div class="col-sm-2">
                                <label class="control-label" for="indemnizado">Indemnización</label>
                                <br>
                                <strong><label class="control-label" id="indemnizado"><?php echo $montoindem;?></label></strong>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <label class="control-label" for="observacion">Observación</label>
                            <input type="text" id="observacion" class="form-control"><?php echo $observacion;?> </div>
                    </div>
                    <div class="row">
                        <div class="colxs-12">
                            <button type="submit" class="btn btn-alert">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>