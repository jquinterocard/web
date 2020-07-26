$('.menu').on('click', 'a', function (e) {
    e.preventDefault();
    $(this).toggleClass('active').siblings().removeClass('active');
    const attr = $(this).attr('page');
    $(`.menu-section #${attr}`).toggleClass('active').siblings().removeClass('active');

});

$('.contacto').on('click', function (e) {
    e.preventDefault();
    const href = $(this).attr('href');
    $(`.menu-section ${href}`).toggleClass('active').siblings().removeClass('active');
})