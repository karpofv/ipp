<?php
	$consuldper = paraTodos::arrayConsultanum("*", "personal", "per_cedula=$_SESSION[ci]");
	if ($consuldper>0){
		$consul = paraTodos::arrayConsulta("*", "personal", "per_cedula=$_SESSION[ci]");
		foreach($consul as $row){
			$name = $row[per_nombres]." ".$row[per_apellidos];
		}
	} else {
		$consul = paraTodos::arrayConsulta("*", "registrados", "cedula=$_SESSION[ci]");
		foreach($consul as $row){
			$name = $row[Nombres];
		}
	}
?>
<header class="page_header_side page_header_side_sticked active-slide-side-header ls">
    <div class="side_header_logo">
        <a href="accion.php" class="logo"> 
            <img src="<?php echo $ruta_base;?>assets/images/logo.png" alt=""> 
            <span class="logo_text">IPP</span><span class="logo-text-rd"> UNELLEZ</span>
        </a>
    </div> 
    <span class="toggle_menu_side toggler_light header-slide">
	   <span></span>
    </span>
    <div class="scroll-wrapper scrollbar-macosx" style="position: relative;">
        <div class="scrollbar-macosx scroll-content scroll-scrolly_visible" style="height: auto; margin-bottom: 0px; margin-right: 0px; max-height: 460px;">
            <div class="side_header_inner greylinks">
						<!-- main side nav start -->
						<nav class="mainmenu_side_wrapper">
                            <ul class="menu-click">
                            <?php menu::menuEmpMenj($quien,$nivel); ?>            
                            </ul>                                

						</nav>
            </div>
        </div>
        <div class="scroll-element scroll-x scroll-scrolly_visible">
            <div class="scroll-element_outer">
                <div class="scroll-element_size"></div>
                <div class="scroll-element_track"></div>
                <div class="scroll-bar" style="width: 89px;"></div>
            </div>
        </div>
        <div class="scroll-element scroll-y scroll-scrolly_visible">
            <div class="scroll-element_outer">
                <div class="scroll-element_size"></div>
                <div class="scroll-element_track"></div>
                <div class="scroll-bar" style="height: 144px; top: 0px;"></div>
            </div>
        </div>
    </div>
</header>				