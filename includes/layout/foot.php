				</div>
				<!-- .container -->
			</section>
</div>
</div>
<script>
    function cerrar() {
        $("#alerta-msg").fadeOut(1000);
        $("#alerta-msg").addClass("collapse");
    }

    function cerrarmodal() {
        $("#ventanaVer").html('');
    }
</script>
<!-- template init -->
<script src="<?php echo $ruta_base;?>assets/js/compressed.js"></script>
<script src="<?php echo $ruta_base;?>assets/js/main.js"></script>
<!-- dashboard libs -->
<!-- events calendar -->
<script src="<?php echo $ruta_base;?>assets/js/dashboard/moment.min.js"></script>
<script src="<?php echo $ruta_base;?>assets/js/dashboard/fullcalendar.min.js"></script>
<!-- range picker -->
<script src="<?php echo $ruta_base;?>assets/js/dashboard/daterangepicker.js"></script>
<!-- charts -->
<script src="<?php echo $ruta_base;?>assets/js/dashboard/Chart.bundle.min.js"></script>
<!-- vector map -->
<script src="<?php echo $ruta_base;?>assets/js/dashboard/jquery-jvectormap-2.0.3.min.js"></script>
<script src="<?php echo $ruta_base;?>assets/js/dashboard/jquery-jvectormap-world-mill.js"></script>
<!-- small charts -->
<script src="<?php echo $ruta_base;?>assets/js/dashboard/jquery.sparkline.min.js"></script>
<!-- dashboard init -->
<script src="<?php echo $ruta_base;?>assets/js/dashboard.js"></script>
</body>
</html>