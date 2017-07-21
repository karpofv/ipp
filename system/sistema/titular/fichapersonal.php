<?php
	$codtit = $_POST[codtit];
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
    }

?>
    <div class="row">
        <div class="col-lg-9">
            <div class="row">
                <!-- User Bio -->
                <div class="col-xs-12 col-sm-12">
                    <div class="with_background with_padding">
                        <div class="media big-left-media">
                            <div class="media-left"> <img src="<?php echo $ruta_base;?>assets/images/team/titular.png" alt="..."> </div>
                            <div class="media-body">
                                <h4><?php echo $titular;?><small> <?php echo $cargo;?></small><label class="teaser_icon alert-success  pull-right"><?php echo $status;?></label></h4>
                            </div>
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
                        <h4>Informacion laboral</h4>
                        <ul class="list1 no-bullets no-top-border no-bottom-border">
                            <li>
                                <div class="media small-teaser">
                                    <div class="media-left media-middle">
                                        <div class="teaser_icon label-info fontsize_16"> <i class="fa fa-calendar"></i> </div>
                                    </div>
                                    <div class="media-body media-middle"> <strong class="grey">Fecha de ingeso:</strong> <?php echo $fecing;?> </div>
                                </div>
                            </li>                            
                            <li>
                                <div class="media small-teaser">
                                    <div class="media-left media-middle">
                                        <div class="teaser_icon label-warning round fontsize_16"> <i class="fa fa-globe"></i> </div>
                                    </div>
                                    <div class="media-body media-middle"> <strong class="grey">Vicerrectorado:</strong> 
                                        <?php echo $vice;?>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="media small-teaser">
                                    <div class="media-left media-middle">
                                        <div class="teaser_icon label-success round fontsize_16"> <i class="fa fa-flag"></i> </div>
                                    </div>
                                    <div class="media-body media-middle"> <strong class="grey">Tipo de personal:</strong>
                                        <?php echo $tipper;?>
                                    </div>
                                </div>
                            </li>
                            <?php
                                if($tipper=='DOCENTE'){
                            ?>
                            <li>
                                <div class="media small-teaser">
                                    <div class="media-left media-middle">
                                        <div class="teaser_icon label-info round fontsize_16"> <i class="fa fa-briefcase"></i> </div>
                                    </div>
                                    <div class="media-body media-middle"> <strong class="grey">Tipo de docente:</strong> <?php echo $tipdoc;?> </div>
                                </div>
                            </li>
                            <?php
                                }
                            ?>
                        </ul>
                    </div>
                    <!-- .with_background -->
                </div>
                <!-- col-* -->
                <!-- User Statistics -->
                <div class="col-xs-12 col-lg-6">
                    <div class="with_background with_padding">
                        <h4>Información personal</h4>
                        <ul class="list1 no-bullets no-top-border no-bottom-border">
                            <li>
                                <div class="media small-teaser">
                                    <div class="media-left media-middle">
                                        <div class="teaser_icon label-info fontsize_16"> <i class="fa fa-calendar"></i> </div>
                                    </div>
                                    <div class="media-body media-middle"> <strong class="grey">Fecha de nacimiento:</strong> <?php echo $fecnac;?> </div>
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
        <div class="col-xs-12 col-lg-3">
            <div class="row">
                <div class="col-sm-12">
                    <div class="panel-group bottommargin_0" id="contact-info-accordion">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a class="icon-tab collapsed" data-toggle="collapse" data-parent="#contact-info-accordion" href="#user-info-collapse1" aria-expanded="false">
                                        <i class="highlight fontsize_16 fa fa-phone"></i>
                                        Teléfono de habitación
                                    </a>
                                </h4>
                            </div>
                            <div id="user-info-collapse1" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                                <div class="panel-body">
                                    <p> <strong><?php echo $telefonohab;?></strong></p>
                                </div>
                            </div>
                        </div>
                        <!-- .panel -->
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a class="icon-tab collapsed" data-toggle="collapse" data-parent="#contact-info-accordion" href="#user-info-collapse2" aria-expanded="false">
                                        <i class="highlight fontsize_16 fa fa-mobile"></i>
                                        Teléfono celular
                                    </a>
                                </h4>
                            </div>
                            <div id="user-info-collapse2" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                                <div class="panel-body">
                                    <p> <strong><?php echo $telefcel;?></strong></p>
                                </div>
                            </div>
                        </div>
                        <!-- .panel -->
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a class="icon-tab collapsed" data-toggle="collapse" data-parent="#contact-info-accordion" href="#user-info-collapse3" aria-expanded="false">
                                        <i class="highlight fontsize_16 fa fa-envelope"></i>
                                        Correo electrónico
                                    </a>
                                </h4>
                            </div>
                            <div id="user-info-collapse3" class="panel-collapse collapse" aria-expanded="false">
                                <div class="panel-body">
                                    <p class="greylinks"> <a href="mailto:your@mail.com"><?php echo $correo;?></a> </p>
                                </div>
                            </div>
                        </div>
                        <!-- .panel -->
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a class="icon-tab collapsed" data-toggle="collapse" data-parent="#contact-info-accordion" href="#user-info-collapse4" aria-expanded="false">
                                        <i class="highlight fontsize_16 fa fa-map-marker"></i>
                                        Dirección
                                    </a>
                                </h4>
                            </div>
                            <div id="user-info-collapse4" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
                                <div class="panel-body">
                                    <p> <?php echo $direccion;?> </p>
                                </div>
                            </div>
                        </div>
                        <?php
                            $permisocarta = paratodos::arrayConsultanum("I", "perfiles_det pd", "pd.IdPerfil=$nivel and Submenu=171 and I=1");
                            if($permisocarta>0){
                        ?>
                        <div class="media muted_background">
                            <div class="media-left media-middle">
                                <div class="teaser_icon label-success">
                                    <i class="fa fa-file"></i>
                                </div>
                            </div>
                            <div class="media-body media-middle">
                                <span class="grey"><a href="javascript:void(0)" onclick="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: 171,
									codtit 	: <?php echo $codtit;?>,
									buscar: 1,
									ver 	: 2
								},
								success : function (html) {
									$('#page-content').html(html);
                                },
							}); return false;">Generar carta Aval</a></span>
                            </div>
                        </div>
                        <?php
                            }
                            $permisoambula = paratodos::arrayConsultanum("I", "perfiles_det pd", "pd.IdPerfil=$nivel and Submenu=173  and I=1");
                            if($permisoambula>0){
                        ?>
                        <div class="media muted_background">
                            <div class="media-left media-middle">
                                <div class="teaser_icon label-info">
                                    <i class="fa fa-file-text-o"></i>
                                </div>
                            </div>
                            <div class="media-body media-middle">
                                <span class="grey"><a href="javascript:void(0)" onclick="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: 173,
									codtit 	: <?php echo $codtit;?>,
									buscar: 1,
									ver 	: 2
								},
								success : function (html) {
									$('#page-content').html(html);
                                },
							}); return false;">Liquidación de ambulatorio</a></span>
                            </div>
                        </div>
                        <?php
                            }
                            $permisoreem = paratodos::arrayConsultanum("I", "perfiles_det pd", "pd.IdPerfil=$nivel and Submenu=172  and I=1");
                            if($permisoreem>0){                        
                        ?>
                        <div class="media muted_background">
                            <div class="media-left media-middle">
                                <div class="teaser_icon label-danger">
                                    <i class="fa fa-file-o"></i>
                                </div>
                            </div>
                            <div class="media-body media-middle">
                                <span class="grey"><a href="javascript:void(0)" onclick="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: 172,
									codtit 	: <?php echo $codtit;?>,
									buscar: 1,
									ver 	: 2
								},
								success : function (html) {
									$('#page-content').html(html);
                                },
							}); return false;">Reembolso</a></span>
                            </div>
                        </div>
                        <?php
                            }
                        ?>
                    </div>
                    <!-- .panel-group -->
                </div>
            </div>
            <!-- .row -->
        </div>
        <!-- .col-* right column -->
    </div>
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
                            <?php
                                $permisocarta = paratodos::arrayConsultanum("I", "perfiles_det pd", "pd.IdPerfil=$nivel and Submenu=171 and I=1");
                                if($permisocarta>0){
                            ?>
                            <td><strong>Carta Aval</strong></td>
                            <?php
                                }
                                $permisoambula = paratodos::arrayConsultanum("I", "perfiles_det pd", "pd.IdPerfil=$nivel and Submenu=173  and I=1");
                                if($permisoambula>0){                            
                            ?>
                            <td><strong>Ambulatorio</strong></td>
                            <?php
                                }
                                $permisoreem = paratodos::arrayConsultanum("I", "perfiles_det pd", "pd.IdPerfil=$nivel and Submenu=172  and I=1");
                                if($permisoreem>0){                            
                            ?>
                            <td><strong>Reembolso</strong></td>
                            <?php
                                }
                            ?>
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
                                    <?php echo utf8_decode($row[in_descripcion]);?>%
                                </td>
                                <?php
                                    $permisocarta = paratodos::arrayConsultanum("I", "perfiles_det pd", "pd.IdPerfil=$nivel and Submenu=171 and I=1");
                                    if($permisocarta>0){
                                ?>
                                <td class="text-center">
                                    <div class="teaser_icon label-success">
                                        <a href="javascript:void(0)"><i class="fa fa-file"></i></a>
                                    </div>
                                </td>  
                                <?php
                                    }
                                    $permisoambula = paratodos::arrayConsultanum("I", "perfiles_det pd", "pd.IdPerfil=$nivel and Submenu=173  and I=1");
                                    if($permisoambula>0){                            
                                ?>
                                <td class="text-center">
                                    <div class="teaser_icon label-info">
                                        <a href="javascript:void(0)"><i class="fa fa-file-text-o"></i></a>
                                    </div>
                                </td>
                                <?php
                                    }
                                    $permisoreem = paratodos::arrayConsultanum("I", "perfiles_det pd", "pd.IdPerfil=$nivel and Submenu=172  and I=1");
                                    if($permisoreem>0){
                                ?>
                                <td class="text-center">
                                    <div class="teaser_icon label-danger">
                                        <a href="javascript:void(0)"><i class="fa fa-file-o"></i></a>
                                    </div>
                                </td>     
                                <?php
                                    }
                                ?>
                            </tr>
                            <?php
                                                    }
        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>