<?php
include_once 'includes/layout/headp.php';
require 'includes/conf/general_parameters.php';
ini_set('display_errors', false);
ini_set('display_startup_errors', false);
if ($_GET[logaut] == '1') {
  session_cache_limiter('nocache,private');
  session_name($sess_name);
  session_start();
  $sid = session_id();
  session_destroy();
}
?>
<!-- notificacion de error -->
<?php
    if (isset($_GET['error_login'])) {
    $error = $_GET['error_login']; ?>
        <!-- Unyson messages modal -->
        <div class="modal fade" tabindex="-1" role="dialog" id="messages_modal">
            <div class="fw-messages-wrap ls with_padding">
               <!-- Uncomment this UL with LI to show messages in modal popup to your user: -->
                <ul class="list-unstyled">
                    <li><?php echo $error_login_ms[$error]; ?></li>
                </ul>
            </div>
        </div>
        <!-- eof .modal -->
<?php
    }
?>
<!-- wrappers for visual page editor and boxed version of template -->
<div id="canvas">
    <div id="box_wrapper">
        <!-- template sections -->
        <section class="ls ms section_padding_top_100 section_padding_bottom_100 section_full_height">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 to_animate">
                        <div class="with_background with_padding">
                            <h4 class="text-center">IPP</h4>
                            <div class="wrap-forms">
                                <form action="index2.php" id="login-validation" method="post" enctype="multipart/form-data">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group has-placeholder">
                                                <label for="login-email">Usuario</label> 
                                                <i class="grey fa fa-envelope-o"></i>
                                                <input type="text" class="form-control" id="user" name="user" placeholder="Usuario">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group has-placeholder">
                                                <label for="login-password">Contraseña</label> <i class="grey fa fa-pencil-square-o"></i>
                                                <input type="password" class="form-control" id="pass" name="pass" placeholder="Contraseña">
                                            </div>
                                        </div>
                                    </div>                                        
                                    <button type="submit" class="theme_button block_button color1">Ingresar</button>
                                </form>
                            </div>
                            <div class="darklinks text-center topmargin_20">
                                <a role="button" data-toggle="collapse" href="#signin-resend-password" aria-expanded="false" aria-controls="signin-resend-password">
								¿Olvidó su contraseña?
								</a> 
                            </div>
                            <div class="collapse form-inline-button" id="signin-resend-password">
                                <form class="form-inline topmargin_20">
                                    <div class="form-group">
                                        <label class="sr-only">Ingresa tu correo electrónico</label>
                                        <input type="email" class="form-control" name="email" placeholder="Correo electrónico">
                                    </div>
                                    <button type="submit" class="theme_button with_icon"> <i class="fa fa-share"></i> </button>
                                </form>
                            </div>
                        </div>
                        <!-- .with_border -->
                        <p class="divider_20 text-center"> ¿No estas registrado? <a href="signup.html">Crear cuenta</a>.
                    </div>
                    <!-- .col-* -->
                </div>
                <!-- .row -->
            </div>
            <!-- .container -->
        </section>
    </div>
    <!-- eof #box_wrapper -->
</div>
<!-- eof #canvas -->
<?php
    include_once("includes/layout/footp.php");
?>