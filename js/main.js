// ===== ハンバーガーメニュー切り替え =====
$('.hamburger').click(function () {
    $(this).toggleClass('active');
    $('.global-nav').toggleClass('active');
});

// ===== ドロワーメニューの領域外をタップで切り替え =====
$(document).click(function (e) {
    // 画面幅が768px未満のときのみ処理
    if (window.innerWidth < 768) {
        const $nav = $('.global-nav');
        const $hamburger = $('.hamburger');
        // navが開いていて、クリックがnav・hamburger以外なら閉じる
        if ($nav.hasClass('active') &&
            !$nav.is(e.target) &&
            $nav.has(e.target).length === 0 &&
            !$hamburger.is(e.target) &&
            $hamburger.has(e.target).length === 0
        ) {
            $nav.removeClass('active');
            $hamburger.removeClass('active');
        }
    }
});

// ===== Slick Settings =====
$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        dotsClass: 'dots-class',
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
    });
});

// ===== トップに戻るボタン =====
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.to-top').css({ 'opacity': '1', 'visibility': 'visible' });
    } else {
        $('.to-top').css({ 'opacity': '0', 'visibility': 'hidden' });
    }
});

// ===== AOS初期化 =====
AOS.init();

// ===== snazzy maps =====
const mapStyle = [
    {
        "elementType": "geometry",
        "stylers": [{ "color": "#f5f5f5" }]
    },
    {
        "elementType": "labels.icon",
        "stylers": [{ "visibility": "off" }]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [{ "color": "#616161" }]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [{ "color": "#f5f5f5" }]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [{ "visibility": "off" }]
    },
    {
        "featureType": "poi",
        "stylers": [{ "visibility": "off" }]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{ "color": "#ffffff" }]
    },
    {
        "featureType": "road.arterial",
        "stylers": [{ "color": "#e0e0e0" }]
    },
    {
        "featureType": "road.highway",
        "stylers": [{ "color": "#dadada" }]
    },
    {
        "featureType": "water",
        "stylers": [{ "color": "#c9c9c9" }]
    }
];

function initMap() {
    const cafe = { lat: 35.65823003887777, lng: 139.70170017301476 };
    const map = new google.maps.Map(document.getElementById("map"), {
        center: cafe,
        zoom: 15,
        styles: mapStyle
    });

    new google.maps.Marker({
        position: cafe,
        map: map
    });
}

// ===== Modal =====
$(document).ready(function () {
    $("#modal").hide(); // 念のためモーダル非表示にする

    $(".menu-item img").click(function () {
        const src = $(this).attr("src");
        $(".close").show();
        $(".modal-content").show();
        $("#modal-img").attr("src", src);
        $("#modal").fadeIn();
    });

    $(".close, #modal").click(function () {
        $(".modal-content").hide();
        $(".close").hide();
        $("#modal").fadeOut();
        $("#modal-img").attr("src", ""); //srcをクリアすることで再表示時のチラつき防止
    });

    $("#modal-img").click(function (event) {
        event.stopPropagation();
    });
});

// ===== Accordion Menu =====
$(function () {
    $('.accordion-header').on('click', function () {
        const item = $(this).closest('.accordion-item');

        // 他のアコーディオンを閉じる
        $('.accordion-item').not(item).removeClass('active')
            .find('.accordion-content').slideUp(400);

        // クリックしたアコーディオンを開く
        item.toggleClass('active');
        item.find('.accordion-content').slideToggle(400);
    });
});
