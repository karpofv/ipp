<div class="row">
    <div class="col-sm-12">
        <h3>BUSQUEDA RAPIDA <small>REGISTROS ENCONTRADOS</small></h3> </div>
</div>
<?php
    $buscar = $_POST[buscar];
    /*SE BUSCAN LOS TITULARES CON UN NUMERO DE CEDULA O NOMBRE O APELLIDO PARECIDO AL INTRODUCIDO*/
    $cedula = paraTodos::arrayConsultanum("*", "titular", "tit_cedula like '%$buscar%' or tit_nombres like '%$buscar%' or tit_apellidos like '%$buscar%'");
    if($cedula>0){
?>
            <div class="row">
                <!-- User Bio -->
                <div class="col-xs-12 col-sm-12">
                    <div class="with_background with_padding">
                <h3>Titulares</h3>                    
<?php  
        $consultitular = paraTodos::arrayConsulta("*", "titular", "tit_cedula like '%$buscar%' or tit_nombres like '%$buscar%' or tit_apellidos like '%$buscar%'");
        foreach($consultitular as $titular){                        
?>                        
                        <div class="media small-left-media">
                            <div class="media-left"> <img src="<?php echo $ruta_base;?>assets/images/team/titular.png" alt="..."> </div>
                            <div class="media-body">
                                <h4><?php echo $titular[tit_apellidos]." ".$titular[tit_nombres];?><small> <a href="javascript:void(0)" onclick="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: 370,
                                    act :2,
                                    codtit  :<?php echo $titular[tit_codigo];?>
								},
								success : function (html) {
									$('#page-content').html(html);
                                },
							}); return false;">(Ver)</a></small><label class="teaser_icon alert-success  pull-right"></label></h4>
                            </div>
                        </div>
<?php
        }
?>
                    </div>
                    <!-- .with_background -->
                </div>
                <!-- .col-* -->
            </div>
<?php
        
    }
    /*FIN TITULAR*/
    /*SE BUSCAN LOS BENEFICIARIOS CON UN NUMERO DE CEDULA O NOMBRE O APELLIDO PARECIDO AL INTRODUCIDO*/
    $cedula = paraTodos::arrayConsultanum("*", "beneficiario", "ben_cedula like '%$buscar%' or ben_nombres like '%$buscar%' or ben_apellidos like '%$buscar%'");
    if($cedula>0){
?>
            <div class="row">
                <!-- User Bio -->
                <div class="col-xs-12 col-sm-12">
                    <div class="with_background with_padding">
                <h3>Beneficiarios</h3>                    
<?php  
        $consulbenef = paraTodos::arrayConsulta("*", "beneficiario", "ben_cedula like '%$buscar%' or ben_nombres like '%$buscar%' or ben_apellidos like '%$buscar%'");
        foreach($consulbenef as $benef){                        
?>                        
                        <div class="media small-left-media">
                            <div class="media-left"> <img src="<?php echo $ruta_base;?>assets/images/team/beneficiario.jpg" alt="..."> </div>
                            <div class="media-body">
                                <h4><?php echo $benef[ben_apellidos]." ".$benef[ben_nombres];?><small> <a href="javascript:void(0)" onclick="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: 370,
                                    act :2,
                                    codtit  :<?php echo $benef[ben_titcodigo];?>
								},
								success : function (html) {
									$('#page-content').html(html);
                                },
							}); return false;">(Ver)</a></small><label class="teaser_icon alert-success  pull-right"></label></h4>
                            </div>
                        </div>
<?php
        }
?>
                    </div>
                    <!-- .with_background -->
                </div>
                <!-- .col-* -->
            </div>
<?php
        
    }
    /*FIN TITULAR*/
?>