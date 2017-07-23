<link href="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery.dataTables.min.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery-1.12.4.js"></script>
<script type="text/javascript" src="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery.dataTables.min.js"></script>
<?php
    $dmn = $_POST[dmn];
    $editar = $_POST[editar];
    $eliminar = $_POST[eliminar];
    if ($editar==1){
        paraTodos::arrayUpdate("caso_status=5", "casos", "caso_codigo=$_POST[codigo]");
    }
    if ($eliminar==1){
        paraTodos::arrayUpdate("caso_status=6", "casos", "caso_codigo=$_POST[codigo]");
    }
?>
<!-- Unyson messages modal -->
<div class="modal" tabindex="-1" role="dialog" id="admin_contact_modal" style="display:block;    background-color: rgba(0, 0, 0, 0.55);">
    <!-- <div class="ls with_padding"> -->
    <div class="modal-content" style="widht:90%;">
        <div class="col-sm-12">
            <div class="with_background with_padding bottommargin_30">
                <h3>Casos registrados<a href="javascript:void(0)" class="pull-right" onclick="cerrarmodal();" id="iminimize">x</a>
                    <a href="javascript:void(0)" class="collapse pull-right" onclick="maximize();" id="imaximize"><i class="rt-icon2-chevron-down highlight fontsize_16"></i></a>
                </h3>
                <div class="row">
                    <table class="table table-hover" id="personal">
                        <thead>
                            <tr>
                                <td class="text-center"><strong>Fecha</strong></td>
                                <td class="text-center"><strong>Proveedor</strong></td>
                                <td class="text-center"><strong>Diagnóstico</strong></td>
                                <td class="text-center"><strong>Monto</strong></td>
                                <td class="text-center"><strong>Indemnización</strong></td>
                                <td class="text-center"><strong>Observación</strong></td>
                                <td class="text-center"><strong>Status</strong></td>
                                <td class="text-center"><strong>Pagar</strong></td>
                                <td class="text-center"><strong>Editar</strong></td>
                                <td class="text-center"><strong>Eliminar</strong></td>
                                <td class="text-center"><strong>Imprimir</strong></td>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $consulsol = paraTodos::arrayConsulta("c.caso_codigo,c.caso_fecha, p.prov_nombre, c.caso_dignostico, c.caso_monto, c.caso_indem, c.caso_observacion, s.st_descripcion", "casos c, proveedor p, gen_status s", "c.caso_titcodigo=$_POST[titular] and c.caso_proveedor=p.prov_codigo and c.caso_status=s.st_codigo and c.caso_bencodigo='' and c.caso_tipo=$_POST[caso]");
                            foreach($consulsol as $row){
                            ?>
                            <tr>
                                <td class="text-center">
                                    <?php echo paraTodos::convertDate($row[caso_fecha]);?>
                                </td>
                                <td class="">
                                    <?php echo utf8_decode($row[prov_nombre]);?>
                                </td>
                                <td class="">
                                    <?php echo $row[caso_dignostico];?>
                                </td>
                                <td class="">
                                    <?php echo number_format($row[caso_monto],2, ",", ".");?>
                                </td>
                                <td class="">
                                    <?php echo number_format($row[caso_indem],2, ",", ".");?>
                                </td>
                                <td class="">
                                    <?php echo $row[caso_observacion];?>
                                </td>
                                <td class="">
                                    <?php echo $row[st_descripcion];?>
                                </td>
                                <td class="">
                                    <?php
                                if($row[st_descripcion]=="ACTIVO"){
                                    ?>                                    
                                    <a href="javascript:void(0);"
                                       onclick="$.ajax({
                                                    url:'accion.php',
                                                    type:'POST',
                                                    ajaxSend: $('#ventanaVer').html(cargando),
                                                    data:{
                                                    titular :   <?php echo $_POST[titular];?>,
                                                    caso    :   <?php echo $_POST[caso];?>,
                                                    codigo    :   <?php echo $row[caso_codigo];?>,
                                                    dmn 	:   <?php echo $dmn;?>,
                                                    editar  :   1,
                                                    act     :   4,
                                                    ver     :   2
                                                    },
                                                    success : function (html) {
                                                    $('#ventanaVer').html(html);
                                                    },
                                                    });">
                                        <i class="fa fa-check"></i>
                                    </a>
                                    <?php
                                }
                                    ?>
                                </td>
                                <td class="text-center">
                                    <?php
                                if($row[st_descripcion]=="ACTIVO"){
                                    ?>                                    
                                    <a href="javascript:void(0);"
                                       onclick="$.ajax({
                                                url:'accion.php',
                                                type:'POST',
                                                data:{
                                                dmn 	: <?php echo $dmn;?>,
                                                codtit 	: <?php echo $_POST[titular];?>,
                                                codigo  :<?php echo $row[caso_codigo];?>,
                                                editar: 1,
                                                ver 	: 2
                                                },
                                                success : function (html) {
                                                $('#page-content').html(html);
                                                $('#ventanaVer').html('');
                                                },
                                                });">
                                        <i class="fa fa-check"></i>
                                    </a>
                                    <?php
                                }
                                    ?>
                                </td>
                                <td class="">
                                    <?php
                                if($row[st_descripcion]=="ACTIVO"){
                                    ?>                                    
                                    <a href="javascript:void(0);"
                                       onclick="$.ajax({
                                                    url:'accion.php',
                                                    type:'POST',
                                                    ajaxSend: $('#ventanaVer').html(cargando),
                                                    data:{
                                                    titular :   <?php echo $_POST[titular];?>,
                                                    caso    :   <?php echo $_POST[caso];?>,
                                                    codigo    :   <?php echo $row[caso_codigo];?>,
                                                    dmn 	:   <?php echo $dmn;?>,
                                                    eliminar  :   1,
                                                    act     :   4,
                                                    ver     :   2
                                                    },
                                                    success : function (html) {
                                                    $('#ventanaVer').html(html);
                                                    },
                                                    });">
                                        <i class="fa fa-check"></i>
                                    </a>
                                    <?php
                                }
                                    ?>
                                </td>                                
                                <td>
                                    <a class="<?php echo $collapse;?> btn btn-default" href="accion.php?dmn=<?php echo $dmn;?>&cd=<?php echo $row[caso_codigo];?>&ver=2&act=5" target="_blank">Imprimir</a>
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
    </div>
</div>
<!-- eof .modal -->
<script>
    $('#personal').DataTable({
        "language": {
            "url": "<?php echo $ruta_base;?>assets/js/Spanish.json"
        }
    });
</script>