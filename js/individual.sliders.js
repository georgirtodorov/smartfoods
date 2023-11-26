// check device type
var randomSlider = $('#ore');
var indexingSlider = 1

function indexingSliders() {
    var total = randomSlider.find('.owl-item.active').length;
    if (total > 5) {
        indexingSlider = 2;
    }
}

indexingSliders();


<!--    1. Ore-->
var brandSliderOre = $('#ore');
brandSliderOre.on('click', '.owl-item', function (e) {
    var carousel = $('.ore').data('owl.carousel');
    e.preventDefault();
    carousel.to(carousel.relative($(this).index()) + indexingSlider);
});
<!--    2. Biscotto-->
var brandSliderBiscotto = $('#biscotto');
brandSliderBiscotto.on('click', '.owl-item', function (e) {
    var carousel = $('.biscotto').data('owl.carousel');
    e.preventDefault();
    carousel.to(carousel.relative($(this).index()) + indexingSlider);
});
<!--    3. Choco Italy-->
var brandSliderChocoItaly = $('#choco-italy');
brandSliderChocoItaly.on('click', '.owl-item', function (e) {
    var carousel = $('.choco-italy').data('owl.carousel');
    e.preventDefault();
    carousel.to(carousel.relative($(this).index()) + indexingSlider);
});
<!--    4. Bamboo-->
var brandSliderBamboo = $('#bamboo');
brandSliderBamboo.on('click', '.owl-item', function (e) {
    var carousel = $('.bamboo').data('owl.carousel');
    e.preventDefault();
    carousel.to(carousel.relative($(this).index()) + indexingSlider);
});
<!--    5.FST-->
var brandSliderFst = $('#fst');
brandSliderFst.on('click', '.owl-item', function (e) {
    var carousel = $('.fst').data('owl.carousel');
    e.preventDefault();
    carousel.to(carousel.relative($(this).index()) + indexingSlider);
});
<!--    6. Policom -->
var brandSliderPolicom = $('#policom');
brandSliderPolicom.on('click', '.owl-item', function (e) {
    var carousel = $('.policom').data('owl.carousel');
    e.preventDefault();
    carousel.to(carousel.relative($(this).index()) + indexingSlider);
});
<!-- 7. Bal Snack-->
var brandSliderBalsnack = $('#balsnack');
brandSliderBalsnack.on('click', '.owl-item', function (e) {
    var carousel = $('.balsnack').data('owl.carousel');
    e.preventDefault();
    carousel.to(carousel.relative($(this).index()) + indexingSlider);
});
<!--    8. Fonte Margherita + 9. Acqua Azzurra-->
var brandSliderFonteAzzurra = $('#fonte-azzurra');
brandSliderFonteAzzurra.on('click', '.owl-item', function (e) {
    var carousel = $('.fonte-azzurra').data('owl.carousel');
    e.preventDefault();
    carousel.to(carousel.relative($(this).index()) + indexingSlider);
});
<!--   10. Terre di Puglia-->
var brandSliderTerre = $('#terre-di-puglia');
brandSliderTerre.on('click', '.owl-item', function (e) {
    var carousel = $('.terre-di-puglia').data('owl.carousel');
    e.preventDefault();
    carousel.to(carousel.relative($(this).index()) + indexingSlider);
});
<!--    11. La Perla-->
var brandSliderLaPerla = $('#la-perla');
brandSliderLaPerla.on('click', '.owl-item', function (e) {
    var carousel = $('.la-perla').data('owl.carousel');
    e.preventDefault();
    carousel.to(carousel.relative($(this).index()) + indexingSlider);
});
<!--    12. Melegatti-->
var brandSliderMelegatti = $('#melegatti');
brandSliderMelegatti.on('click', '.owl-item', function (e) {
    var carousel = $('.melegatti').data('owl.carousel');
    e.preventDefault();
    carousel.to(carousel.relative($(this).index()) + indexingSlider);
});
<!--    14. Hamanek-->
var brandSliderHamanek = $('#hamanek');
brandSliderHamanek.on('click', '.owl-item', function (e) {
    var carousel = $('.hamanek').data('owl.carousel');
    e.preventDefault();
    carousel.to(carousel.relative($(this).index()) + indexingSlider);
});
<!--    13. Bags-->
var brandSliderBags = $('#bags');
brandSliderBags.on('click', '.owl-item', function (e) {
    var carousel = $('.bags').data('owl.carousel');
    e.preventDefault();
    carousel.to(carousel.relative($(this).index()) + indexingSlider);
});
