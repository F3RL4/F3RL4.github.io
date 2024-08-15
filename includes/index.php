<?php 
$title = "Edimar Ferla";
include('header.php'); 
?>
<!-- Loading animation -->
<div id="loadingScreen">
    <div id="progressBar">
        <div></div>
    </div>
</div>
<!-- /Loading animation -->

<div id="page" class="page">
    <!-- Header -->
    <header id="site_header" class="header mobile-menu-hide">
        <div class="header-content">
            <div class="site-title-block mobile-hidden">
                <a href="index.php#home"><div class="site-title">Edimar <span>Ferla</span></div></a>
            </div>
            <!-- Navigation -->
            <div class="site-nav">
                <!-- Main menu -->
                <ul id="nav" class="site-main-menu">
                    <li><a class="pt-trigger" href="index.php#home">Início</a></li>
                    <li><a class="pt-trigger" href="index.php#resume">Currículo</a></li>
                    <li><a class="pt-trigger" href="index.php#services">Serviços</a></li>
                    <li><a class="pt-trigger" href="index.php#portfolio">Portfólio</a></li>
                </ul>
                <!-- /Main menu -->
            </div>
            <!-- Navigation -->
        </div>
    </header>
    <!-- /Header -->

    <!-- Conteúdo principal -->
    <div id="main" class="site-main">
        <!-- Page changer wrapper -->
        <div class="pt-wrapper">
            <!-- Subpages -->
            <div class="subpages">
                <?php include('home.php'); ?>
                <?php include('resume.php'); ?>
                <?php include('services.php'); ?>
                <?php include('portfolio.php'); ?>
            </div>
        </div>
        <!-- /Page changer wrapper -->
    </div>
    <!-- /Conteúdo principal -->
</div>

<?php include('footer.php'); ?>
