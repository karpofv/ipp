<div class="page_header_wrapper affix-top-wrapper">
    <header class="page_header header_color affix-top">
        <div class="widget widget_search">
            <form method="post" class="searchform form-inline" action="javascript:void(0)" onsubmit="$.ajax({
								url:'accion.php',
								type:'POST',
								data:{
									dmn 	: 370,
                                    buscar  : $('#search').val()
								},
								success : function (html) {
									$('#page-content').html(html);
                                },
							}); return false;">
                <div class="form-group">
                    <label class="screen-reader-text" for="widget-search-header">Buscar por Cédula o Nombre:</label>
                    <input id="search" type="text" value="" class="form-control" placeholder="Buscar por cédula o nom..." required>
                </div>
                <button type="submit" class="theme_button"><i class="fa fa-search grey"></i></button>
            </form>
        </div>
        <div class="pull-right big-header-buttons">
            <ul class="inline-dropdown inline-block">
                <!-- user menu -->
                <li class="dropdown user-dropdown-menu">
                    <a class="header-button" id="user-dropdown-menu" data-target="#" href="index.html" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">
                        <i class="fa fa-user grey"></i> <span class="header-button-text">User</span>
                        <!--<img src="images/team/02.jpg" alt="">-->
                        <span class="top-user-name hidden-xs"><?php echo $name;?></span> 
                        <span class="fa fa-angle-down"></span> 
                    </a>
                    <div class="dropdown-menu ls">
                        <ul class="nav darklinks">
                            <li>
                                <a href=""> <i class="fa fa-user"></i> Cambiar Contraseña </a>
                            </li>
                            <li>
                                <a href="accion.php?salir=1"> <i class="fa fa-sign-out"></i> Salir</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="accion.php?salir=1" class="header-button"> <i class="fa fa-sign-out"></i> <span class="header-button-text">Sign Out</span> </a>
                </li>
            </ul>
        </div>
        <!-- eof .header_right_buttons -->
    </header>
</div>