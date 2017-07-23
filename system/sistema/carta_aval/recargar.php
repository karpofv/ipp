<?php
    $opcion = $_POST[actd];
    if ($opcion == 1){
        $monto = $_POST[monto];
        $deduc = $_POST[deduccion];        
        /*busca el porcentaje de retencion que se debe aplicar segun el caso*/
        $consulretencion = paraTodos::arrayConsulta("islr_porcentaje", "islr_caso", "islr_caso=1");
        foreach($consulretencion as $retencion){
            $montoreten = $retencion[islr_porcentaje];
        }
        /*Se busca el porcentaje de diferenci a no cubrir segun el caso*/
        $consuldif = paraTodos::arrayConsulta("i.in_descripcion", "cobertura_dif cd, gen_indemnizacion i", "cd.cobdf_porcentaje=i.in_codigo and cd.cobdf_caso=1 and cobdf_monto<=$monto order by cobdf_monto desc limit 1");
        foreach($consuldif as $dif){
            $porcenno = $dif[in_descripcion];
        }        
        $montonocubre = $monto*($porcenno/100);
        $montoretencion = $monto*($montoreten/100);
        $cobertura = $monto-$montonocubre-$deduc;
        $indemniza = ($monto-$montonocubre)+$montoretencion;
        echo "
    <div class='col-sm-2'>
        <center><label class='control-label' for='montonocubre'>$porcenno% No cubierto</label>
        <br>
        <strong><label class='control-label' id='montonocubre'>$montonocubre </label>Bs.F.</strong></center>
    </div>
    <div class='col-sm-2'>
        <center><label class='control-label' for='cobertura'>Cobertura</label>
        <br>
        <strong><label class='control-label' id='cobertura'>$cobertura </label>Bs.F.</strong></center>
    </div>
    <div class='col-sm-2'>
        <center><label class='control-label' for='retencionislr'>Retención I.S.L.R.</label>
        <br>
        <strong><label class='control-label' id='retencionislr'>$montoretencion </label>Bs.F.</strong></center>
    </div>
    <div class='col-sm-2'>
        <center><label class='control-label' for='indemnizado'>Indemnización</label>
        <br>
        <strong><label class='control-label' id='indemnizado'>$indemniza</label>Bs.F.</strong></center>
    </div>";
    }
if ($opcion == 2){
        $monto = $_POST[monto];
        $deduc = $_POST[deduccion];        
        /*busca el porcentaje de retencion que se debe aplicar segun el caso*/
        $consulretencion = paraTodos::arrayConsulta("islr_porcentaje", "islr_caso", "islr_caso=2");
        foreach($consulretencion as $retencion){
            $montoreten = $retencion[islr_porcentaje];
        }
        /*Se busca el porcentaje de diferenci a no cubrir segun el caso*/
        $consuldif = paraTodos::arrayConsulta("i.in_descripcion", "cobertura_dif cd, gen_indemnizacion i", "cd.cobdf_porcentaje=i.in_codigo and cd.cobdf_caso=2 and cobdf_monto<=$monto order by cobdf_monto desc limit 1");
        foreach($consuldif as $dif){
            $porcenno = $dif[in_descripcion];
        }        
        $montonocubre = $monto*($porcenno/100);
        $montoretencion = $monto*($montoreten/100);
        /*$cobertura = $monto-$montonocubre-$deduc;*/
        $indemniza = ($monto-$montonocubre)+$montoretencion;
        echo "
    <div class='col-sm-2'>
        <center><label class='control-label' for='montonocubre'>$porcenno% No cubierto</label>
        <br>
        <strong><label class='control-label' id='montonocubre'>$montonocubre </label>Bs.F.</strong></center>
    </div>
    <div class='col-sm-2'>
        <center><label class='control-label' for='cobertura'>Cobertura</label>
        <br>
        <strong><label class='control-label' id='cobertura'>$cobertura </label>Bs.F.</strong></center>
    </div>
    <div class='col-sm-2'>
        <center><label class='control-label' for='retencionislr'>Retención I.S.L.R.</label>
        <br>
        <strong><label class='control-label' id='retencionislr'>$montoretencion </label>Bs.F.</strong></center>
    </div>
    <div class='col-sm-2'>
        <center><label class='control-label' for='indemnizado'>Indemnización</label>
        <br>
        <strong><label class='control-label' id='indemnizado'>$indemniza</label>Bs.F.</strong></center>
    </div>";
    }
if ($opcion == 3){
        $monto = $_POST[monto];
        $deduc = $_POST[deduccion];        
        /*busca el porcentaje de retencion que se debe aplicar segun el caso*/
        $consulretencion = paraTodos::arrayConsulta("islr_porcentaje", "islr_caso", "islr_caso=2");
        foreach($consulretencion as $retencion){
            $montoreten = $retencion[islr_porcentaje];
        }
        /*Se busca el porcentaje de diferenci a no cubrir segun el caso*/
        $consuldif = paraTodos::arrayConsulta("i.in_descripcion", "cobertura_dif cd, gen_indemnizacion i", "cd.cobdf_porcentaje=i.in_codigo and cd.cobdf_caso=3 and cobdf_monto<=$monto order by cobdf_monto desc limit 1");
        foreach($consuldif as $dif){
            $porcenno = $dif[in_descripcion];
        }        
        $montonocubre = $monto*($porcenno/100);
        $montoretencion = $monto*($montoreten/100);
        /*$cobertura = $monto-$montonocubre-$deduc;*/
        $indemniza = ($monto-$montonocubre)+$montoretencion;
        echo "
    <div class='col-sm-2'>
        <center><label class='control-label' for='montonocubre'>$porcenno% No cubierto</label>
        <br>
        <strong><label class='control-label' id='montonocubre'>$montonocubre </label>Bs.F.</strong></center>
    </div>
    <div class='col-sm-2'>
        <center><label class='control-label' for='cobertura'>Cobertura</label>
        <br>
        <strong><label class='control-label' id='cobertura'>$cobertura </label>Bs.F.</strong></center>
    </div>
    <div class='col-sm-2'>
        <center><label class='control-label' for='retencionislr'>Retención I.S.L.R.</label>
        <br>
        <strong><label class='control-label' id='retencionislr'>$montoretencion </label>Bs.F.</strong></center>
    </div>
    <div class='col-sm-2'>
        <center><label class='control-label' for='indemnizado'>Indemnización</label>
        <br>
        <strong><label class='control-label' id='indemnizado'>$indemniza</label>Bs.F.</strong></center>
    </div>";
    }
?>