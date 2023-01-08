
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="{{ asset('frontend/assets/vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('frontend/assets/vendor/bootstrap-icons/bootstrap-icons.css') }}" rel="stylesheet">
    <link href="{{ asset('frontend/assets/vendor/boxicons/css/boxicons.min.css') }}" rel="stylesheet">
    <link href="{{ asset('frontend/assets/vendor/glightbox/css/glightbox.min.css') }}" rel="stylesheet">
    <link href="{{ asset('frontend/assets/vendor/swiper/swiper-bundle.min.css') }}" rel="stylesheet">
    <link href="{{ asset('frontend/assets/css/style.css') }}" rel="stylesheet">
    {{-- backend --}}
    <link rel="icon" href="{{ asset('back-end/img/mini_logo.png') }}" type="image/png" />

		<link rel="stylesheet" href="{{ asset('back-end/css/bootstrap1.min.css') }}" />


		<link rel="stylesheet" href="{{ asset('back-end/vendors/themefy_icon/themify-icons.css') }}" />

		<link rel="stylesheet" href="{{ asset('back-end/vendors/niceselect/css/nice-select.css') }}" />

		<link rel="stylesheet" href="{{ asset('back-end/vendors/owl_carousel/css/owl.carousel.css') }}" />

		<link rel="stylesheet" href="{{ asset('back-end/vendors/gijgo/gijgo.min.css') }}" />

		<link rel="stylesheet" href="{{ asset('back-end/vendors/font_awesome/css/all.min.css') }}" />
		<link rel="stylesheet" href="{{ asset('back-end/vendors/tagsinput/tagsinput.css') }}" />

		<link rel="stylesheet" href="{{ asset('back-end/vendors/datepicker/date-picker.css') }}" />
		<link rel="stylesheet" href="{{ asset('back-end/vendors/vectormap-home/vectormap-2.0.2.css') }}" />

		<link rel="stylesheet" href="{{ asset('back-end/vendors/scroll/scrollable.css') }}" />

		<link rel="stylesheet" href="{{ asset('back-end/vendors/datatable/css/jquery.dataTables.min.css') }}" />
		<link rel="stylesheet" href="{{ asset('back-end/vendors/datatable/css/responsive.dataTables.min.css') }}" />
		<link rel="stylesheet" href="{{ asset('back-end/vendors/datatable/css/buttons.dataTables.min.css') }}" />


		<link rel="stylesheet" href="{{ asset('back-end/vendors/text_editor/summernote-bs4.css') }}" />

		<link rel="stylesheet" href="{{ asset('back-end/vendors/morris/morris.css') }}" />

		<link rel="stylesheet" href="{{ asset('back-end/vendors/material_icon/material-icons.css') }}" />

		<link rel="stylesheet" href="{{ asset('back-end/css/metisMenu.css') }}" />


		<link rel="stylesheet" href="{{ asset('back-end/css/style1.css') }}" />
		<link rel="stylesheet" href="{{ asset('back-end/css/colors/default.css') }}" id="colorSkinCSS" />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/1/jquery.min.js"></script>
        <script src="https://cdn.ckeditor.com/ckeditor5/1.0.0-alpha.2/classic/ckeditor.js"></script>
        
    <title>Document</title>
</head>
<body>
    <div id="webback"></div>

    <script src="{{ asset('frontend') }}/assets/vendor/purecounter/purecounter_vanilla.js"></script>
    <script src="{{ asset('frontend') }}/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="{{ asset('frontend') }}/assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="{{ asset('frontend') }}/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>


    <script src="{{ asset('frontend') }}/assets/vendor/waypoints/noframework.waypoints.js"></script>
    <script src="{{ asset('frontend') }}/assets/vendor/php-email-form/validate.js"></script>
    <script src="{{ asset('frontend') }}/assets/vendor/swiper/swiper-bundle.min.js"></script>
    {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js"></script> --}}
    <script src="{{ asset('frontend') }}/assets/js/main.js"></script>
    <script src="{{ asset('js/app.js') }}"></script>
    {{-- backend --}}
    <script src="{{ asset('back-end') }}/js/jquery1-3.4.1.min.js"></script>

		<script src="{{ asset('back-end') }}/js/popper1.min.js"></script>

		<script src="{{ asset('back-end') }}/js/bootstrap1.min.js"></script>

		<script src="{{ asset('back-end') }}/js/metisMenu.js"></script>

		<script src="{{ asset('back-end') }}/vendors/count_up/jquery.waypoints.min.js"></script>

		<script src="{{ asset('back-end') }}/vendors/chartlist/Chart.min.js"></script>

		<script src="{{ asset('back-end') }}/vendors/count_up/jquery.counterup.min.js"></script>

		<script src="{{ asset('back-end') }}/vendors/niceselect/js/jquery.nice-select.min.js"></script>

		<script src="{{ asset('back-end') }}/vendors/owl_carousel/js/owl.carousel.min.js"></script>

		<script src="{{ asset('back-end') }}/vendors/datatable/js/jquery.dataTables.min.js"></script>
		<script src="{{ asset('back-end') }}/vendors/datatable/js/dataTables.responsive.min.js"></script>
		<script src="{{ asset('back-end') }}/vendors/datatable/js/dataTables.buttons.min.js"></script>
		<script src="{{ asset('back-end') }}/vendors/datatable/js/buttons.flash.min.js"></script>
		<script src="{{ asset('back-end') }}/vendors/datatable/js/jszip.min.js"></script>
		<script src="{{ asset('back-end') }}/vendors/datatable/js/pdfmake.min.js"></script>
		<script src="{{ asset('back-end') }}/vendors/datatable/js/vfs_fonts.js"></script>
		<script src="{{ asset('back-end') }}/vendors/datatable/js/buttons.html5.min.js"></script>
		<script src="{{ asset('back-end') }}/vendors/datatable/js/buttons.print.min.js"></script>

		<script src="{{ asset('back-end') }}/vendors/datepicker/datepicker.js"></script>
		<script src="{{ asset('back-end') }}/vendors/datepicker/datepicker.en.js"></script>
		<script src="{{ asset('back-end') }}/vendors/datepicker/datepicker.custom.js"></script>
		<script src="{{ asset('back-end') }}/js/chart.min.js"></script>
		<script src="{{ asset('back-end') }}/vendors/chartjs/roundedBar.min.js"></script>

		<script src="{{ asset('back-end') }}/vendors/progressbar/jquery.barfiller.js"></script>

		<script src="{{ asset('back-end') }}/vendors/tagsinput/tagsinput.js"></script>

		<script src="{{ asset('back-end') }}/vendors/text_editor/summernote-bs4.js"></script>
		<script src="{{ asset('back-end') }}/vendors/am_chart/amcharts.js"></script>

		<script src="{{ asset('back-end') }}/vendors/scroll/perfect-scrollbar.min.js"></script>
		<script src="{{ asset('back-end') }}/vendors/scroll/scrollable-custom.js"></script>

		<script src="{{ asset('back-end') }}/vendors/vectormap-home/vectormap-2.0.2.min.js"></script>
		<script src="{{ asset('back-end') }}/vendors/vectormap-home/vectormap-world-mill-en.js"></script>

		<script src="{{ asset('back-end') }}/vendors/apex_chart/apex-chart2.js"></script>
		<script src="{{ asset('back-end') }}/vendors/apex_chart/apex_dashboard.js"></script>
		<script src="{{ asset('back-end') }}/vendors/echart/echarts.min.js"></script>
		<script src="{{ asset('back-end') }}/vendors/chart_am/core.js"></script>
		<script src="{{ asset('back-end') }}/vendors/chart_am/charts.js"></script>
		<script src="{{ asset('back-end') }}/vendors/chart_am/animated.js"></script>
		<script src="{{ asset('back-end') }}/vendors/chart_am/kelly.js"></script>
		<script src="{{ asset('back-end') }}/vendors/chart_am/chart-custom.js"></script>

		<script src="{{ asset('back-end') }}/js/dashboard_init.js"></script>
		<script src="{{ asset('back-end') }}/js/custom.js"></script>
        {{-- Google Map Location Api & Code Here --}}
        <script src="https://maps.google.com/maps/api/js?sensor=false"></script>
        <script>
            // window.onload  =
             function showPosition() {
                if (navigator.geolocation) {
                    navigator.geolocation.watchPosition(showMap, showError);
                } else {
                    alert("Sorry, your browser does not support HTML5 geolocation.");
                }
            }

            // Define callback function for successful attempt
            function showMap(position) {
                // Get location data
                lat = position.coords.latitude;
                long = position.coords.longitude;
                var latlong = new google.maps.LatLng(lat, long);

                var myOptions = {
                    center: latlong,
                    zoom: 16,
                    mapTypeControl: true,
                    navigationControlOptions: {
                        style: google.maps.NavigationControlStyle.SMALL,
                    },
                };

                var map = new google.maps.Map(document.getElementById("embedMap"), myOptions);
                var marker = new google.maps.Marker({ position: latlong, map: map, title: "You are here!" });
            }

            // Define callback function for failed attempt
            function showError(error) {
                if (error.code == 1) {
                    result.innerHTML = "You've decided not to share your position, but it's OK. We won't ask you again.";
                } else if (error.code == 2) {
                    result.innerHTML = "The network is down or the positioning service can't be reached.";
                } else if (error.code == 3) {
                    result.innerHTML = "The attempt timed out before it could get the location data.";
                } else {
                    result.innerHTML = "Geolocation failed due to unknown error.";
                }
            }
        </script>

        <script>
            var allEditors = document.querySelectorAll('.ck_editor_txt');
            for (var i = 0; i < allEditors.length; ++i) {
            ClassicEditor.create(allEditors[i]);
            }
        </script>

</body>
</html>
