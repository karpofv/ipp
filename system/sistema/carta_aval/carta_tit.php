<link href="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery.dataTables.min.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery-1.12.4.js"></script>
<script type="text/javascript" src="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery.dataTables.min.js"></script>
<div class="row">
    <div class="col-sm-12">
        <h3>ADMINISTRACIÓN <small>CARTA AVAL</small></h3> </div>
</div>
<!-- .row -->
<div class="row" id="buscar">
    <div class="col-sm-12">
        <div class="with_background with_padding bottommargin_30">
            <h3>Titulares activos</h3>
            <table class="table table-hover" id="titular">
                <thead>
                    <tr>
                        <td><strong>Cédula</strong></td>
                        <td><strong>Fec. Nacimiento</strong></td>
                        <td><strong>Nombres</strong></td>
                        <td><strong>Apellidos</strong></td>
                        <td><strong>Estatus</strong></td>
                        <td><strong>Ver</strong></td>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        $consultit = paraTodos::arrayConsulta("*", "titular t, gen_status g", "t.tit_status=g.st_codigo and tit_status=1");
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
                                <?php echo utf8_decode($row[st_descripcion]);?>
                            </td>
                            <td class="text-center"> <a href="javascript:void(0)" onclick="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: <?php echo $idMenut;?>,
									codtit 	: <?php echo $row[tit_codigo];?>,
									buscar: 1,
                                    act: 2,
									ver 	: 2
								},
								success : function (html) {
									$('#page-content').html(html);
                                },
							}); return false;"><i class="rt-icon2-search2 highlight fontsize_16"></i></a> </td>
                        </tr>
                        <?php
                                                }
    ?>
                </tbody>
            </table>
        </div>
    </div>
</div>
<script>
    $('#titular').DataTable({
        "language": {
            "url": "<?php echo $ruta_base;?>assets/js/Spanish.json"
        }
    });
</script>