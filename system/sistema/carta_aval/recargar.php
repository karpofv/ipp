<?php
    $opcion = $_POST[actd];
    if ($opcion == 1){
        $monto = $_POST[monto];
        $deduc = $_POST[deduccion];
        $porcenno = 5;
        $retencion = 12.5;
        $montonocubre = $monto*($porcenno/100);
        $montoretencion = $monto*($retencion/100);
        $cobertura = $monto-$montonocubre-$deduc;
        $indemniza = $monto-$montonocubre;
        echo "
    <div class='col-sm-2'>
        <center><label class='control-label' for='montonocubre'>$porcenno% No cubierto</label>
        <br>
        <strong><label class='control-label' id='montonocubre'>$montonocubre Bs.F.</label></strong></center>
    </div>
    <div class='col-sm-2'>
        <center><label class='control-label' for='cobertura'>Cobertura</label>
        <br>
        <strong><label class='control-label' id='cobertura'>$cobertura Bs.F.</label></strong></center>
    </div>
    <div class='col-sm-2'>
        <center><label class='control-label' for='retencionislr'>Retención I.S.L.R.</label>
        <br>
        <strong><label class='control-label' id='retencionislr'>$montoretencion Bs.F.</label></strong></center>
    </div>
    <div class='col-sm-2'>
        <center><label class='control-label' for='indemnizado'>Indemnización</label>
        <br>
        <strong><label class='control-label' id='indemnizado'>$indemniza</label></strong></center>
    </div>";
    }
?>