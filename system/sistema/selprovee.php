<link href="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery.dataTables.min.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery-1.12.4.js"></script>
<script type="text/javascript" src="<?php echo $ruta_base; ?>assets/plugins/datatables/jquery.dataTables.min.js"></script>
<!-- Unyson messages modal -->
<div class="modal" tabindex="-1" role="dialog" id="admin_contact_modal" style="display:block;    background-color: rgba(0, 0, 0, 0.55);">
    <!-- <div class="ls with_padding"> -->
    <div class="modal-content" style="widht:90%;">
        <div class="col-sm-12">
            <div class="with_background with_padding bottommargin_30">
                <h3>Proveedores registrados <a href="javascript:void(0)" class="pull-right" onclick="cerrarmodal();" id="iminimize">x</a>
                    <a href="javascript:void(0)" class="collapse pull-right" onclick="maximize();" id="imaximize"><i class="rt-icon2-chevron-down highlight fontsize_16"></i></a>
                </h3>
                <div class="row">
                    <table class="table table-hover" id="personal">
                        <thead>
                            <tr>
                                <td class="text-center"><strong>Razon social</strong></td>
                                <td class="text-center"><strong>Rif.</strong></td>
                                <td class="text-center"><strong>Nombre</strong></td>
                                <td class="text-center"><strong>direccion</strong></td>
                                <td class="text-center"><strong>Seleccionar</strong></td>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $consulsol = paraTodos::arrayConsulta("*", "gen_razon_social g, proveedor p", "p.prov_razon=g.raz_codigo and p.prov_status=1");
                            foreach($consulsol as $row){
                            ?>
                            <tr>
                                <td class="text-center">
                                    <?php echo $row[raz_descripcion];?>
                                </td>
                                <td class="">
                                    <?php echo $row[prov_rif];?>
                                </td>
                                <td class="">
                                    <?php echo utf8_decode($row[prov_nombre]);?>
                                </td>
                                <td class="">
                                    <?php echo $row[prov_direccion];?>
                                </td>
                                <td class="text-center">
                                    <a href="javascript:void(0);"
                                       onclick="
                                                $('#codprov').val(<?php echo $row[prov_codigo];?>);
                                                $('#proveedor').html('<?php echo utf8_decode($row[prov_nombre]);?>');
                                                cerrarmodal();
                                                "> <i class="fa fa-check"></i>
                                    </a>
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