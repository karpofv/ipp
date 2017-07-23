<?php
    $codigo = $_GET[cd];
    if ($mes==0){ $mes=1; $agno=$agno-1; }
    $fecha=$agno."-".$mes; 
    require_once('../includes/fpdf/fpdf.php');
    class PDF extends FPDF {
        function Header() {
         }
         function Footer() {
          /*** Funcion Donde es Escribe los Datos que se Imprimen en la zona Inferior del Documento ***/
          }
     }
$pdf=new FPDF('P','mm','A4');
$pdf->AddPage();
setlocale(LC_TIME, "es_VE.utf8"); 
$fechac=strftime("%A %d de %B de %Y a las %T");
$pdf->SetFont('Arial','B',10);
$pdf->Image('../assets/images/logo23.jpg' , 10 ,10,190 , 30,'JPG', '');
$pdf->SetXY(110, 40);
$consulcaso = paraTodos::arrayConsulta("*", "casos c, proveedor p, gen_status s, gen_tipo_caso tc", "tc.tipc_codigo=c.caso_tipo and c.caso_proveedor=p.prov_codigo and c.caso_status=s.st_codigo and c.caso_codigo=$codigo");
$pdf->Ln();
foreach($consulcaso as $caso){
    $pdf->Cell(190,10,"Carta aval $caso[tipc_descripcion]",1,1,'C');
    $pdf->Cell(95,10,utf8_decode("Caso Nº: $caso[caso_codigo]"),0,0,'L');
    $pdf->Cell(95,10,"Fecha : ".paraTodos::convertDate($caso[caso_fecha]),0,1,'R');
    $pdf->SetFont('Arial','B',12);    
    $pdf->Cell(190,10,"Datos del titular",1,1,'C');
    $pdf->SetFont('Arial','B',10);
    $pdf->Cell(73,5,"Nombres y Apellidos ",1,0,'C');        
    $pdf->Cell(54,5,utf8_decode("Cédula"),1,0,'C');        
    $pdf->Cell(63,5,"Monto Reclamado",1,1,'C');  
    $consultitular = paraTodos::arrayConsulta("tit_cedula,tit_nombres, tit_apellidos", "titular", "tit_codigo=$caso[caso_titcodigo]");    
    $pdf->SetFont('Arial','',10);    
    foreach($consultitular as $titular){
        
        $pdf->Cell(73,5,($titular[tit_apellidos]." ".$titular[tit_nombres]),1,0,'C');        
        $pdf->Cell(54,5,number_format($titular[tit_cedula], 0, ",", "."),1,0,'C');        
        $pdf->Cell(63,5,number_format($caso[caso_indem], 2, ",", "."),1,1,'C');    
    }
    if($caso[caso_bencodigo]>0){
        $pdf->Cell(190,10,"Datos del beneficiario",1,1,'C');
        $pdf->SetFont('Arial','B',10);
        $pdf->Cell(73,5,"Nombres y Apellidos ",1,0,'C');        
        $pdf->Cell(54,5,utf8_decode("Cédula"),1,0,'C');        
        $pdf->Cell(63,5,"Monto Reclamado",1,1,'C');  
        $consulbenef = paraTodos::arrayConsulta("ben_cedula,ben_nombres, ben_apellidos", "beneficiario", "ben_codigo=$caso[caso_bencodigo]");    
        $pdf->SetFont('Arial','',10);    
        foreach($consulbenef as $benef){

            $pdf->Cell(73,5,($benef[ben_apellidos]." ".$benef[ben_nombres]),1,0,'C');        
            $pdf->Cell(54,5,number_format($benef[ben_cedula], 0, ",", "."),1,0,'C');        
            $pdf->Cell(63,5,number_format($caso[caso_indem], 2, ",", "."),1,1,'C');    
        }   
    }
        $pdf->SetFont('Arial','B',12);
        $pdf->Cell(190,10,"Proveedor del servicio",1,1,'C');
        $pdf->SetFont('Arial','B',10);
        $pdf->Cell(33,5,"RIF",1,0,'C');        
        $pdf->Cell(157,5,utf8_decode("Nombre"),1,1,'C');
        $consulprovee = paraTodos::arrayConsulta("prov_razon,prov_rif, prov_nombre", "proveedor", "prov_codigo=$caso[caso_proveedor]");    
        $pdf->SetFont('Arial','',10);    
        foreach($consulprovee as $provee){
            $pdf->Cell(33,5,($provee[prov_razon]."".$provee[prov_rif]),1,0,'C');        
            $pdf->Cell(157,5,utf8_decode($provee[prov_nombre]),1,1,'C');
        }
    $pdf->SetFont('Arial','B',12);
    $pdf->Cell(190,10,"MONTOS",1,1,'C');
    $pdf->SetFont('Arial','B',10);    
    $pdf->Cell(70,5,"Monto del Servicio",1,0,'C');        
    $pdf->Cell(60,5,"Monto cubierto",1,0,'C');        
    $pdf->Cell(60,5,"Monto Indemnizado",1,1,'C');     
    $pdf->SetFont('Arial','',10);
    $pdf->Cell(70,5,number_format($caso[caso_monto],2,",","."),1,0,'C');        
    $pdf->Cell(60,5,number_format($caso[caso_cobertura],2,",","."),1,0,'C');        
    $pdf->Cell(60,5,number_format($caso[caso_indem],2,",","."),1,1,'C');     
    $pdf->SetFont('Arial','B',12);
    $pdf->Cell(190,10,"DIFERENCIAS NO CUBIERTAS",1,1,'C');
    $pdf->SetFont('Arial','B',10);    
    $pdf->Cell(70,5,utf8_decode("Diferencia no cubierta"),1,0,'C');        
    $pdf->Cell(60,5,utf8_decode("Otras diferencias no cubiertas"),1,0,'C');        
    $pdf->Cell(60,5,utf8_decode("Retención del I.S.L.R."),1,1,'C');     
    $pdf->SetFont('Arial','',10);
    $pdf->Cell(70,5,number_format($caso[caso_descuento],2,",","."),1,0,'C');        
    $pdf->Cell(60,5,number_format($caso[caso_nocubre],2,",","."),1,0,'C');        
    $pdf->Cell(60,5,number_format($caso[caso_islr],2,",","."),1,1,'C');     
    $pdf->SetFont('Arial','B',12);
    $pdf->Cell(190,10,"OBSERVACIONES",1,1,'C');
    $pdf->SetFont('Arial','',10);     
    $pdf->MultiCell(0,5,utf8_decode($caso[caso_observacion]),1,'J');    
    $pdf->SetFont('Arial','B',12);
    $pdf->Cell(190,10,"DIAGNOSTICO",1,1,'C');
    $pdf->SetFont('Arial','',10);     
    $pdf->MultiCell(0,5,utf8_decode($caso[caso_dignostico]),1,'J');    
}
$pdf->Output();
?>