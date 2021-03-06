// Yandex.Kassa shopPassword generator:
jQuery(document).ready(function($){

    var $genBtn = $('#yandex-generate-shop-password');
    
    if( !$genBtn.length ) {
        return;
    }
    
    var $stepSubmit = $('.step-submit');
    $stepSubmit.hide();
    
    $genBtn.click(function(){

        var password = leyka_make_password(10),
            $block = $genBtn.closest('.enum-separated-block');

        $genBtn.hide();
        $block.find('.caption').css('display', 'unset');
        $block.find('.body b').css('display', 'unset').text(password);
        $block.find('input[name=leyka_yandex_shop_password]').val(password);
        $stepSubmit.show();
        
        $(this).closest('.body').removeClass('no-password');

    });

});
// Yandex.Kassa shopPassword generator - END

// Yandex.Kassa payment tryout:
jQuery(document).ready(function($){

    var $genBtn = $('#yandex-make-live-payment'),
        $loading = $('.yandex-make-live-payment-loader');

    if( !$genBtn.length ) {
        return;
    }

    leykaYandexPaymentData.leyka_success_page_url = window.location.href;

    $genBtn.click(function(){

        $loading.show();
        $genBtn.prop('disabled', true);

        $.post(leyka.ajaxurl, leykaYandexPaymentData, null, 'json')
            .done(function(json) {

                if(typeof json.status === 'undefined') {
                    alert('Ошибка!');
                } else if(json.status === 0 && json.payment_url) {
                    window.location.href = json.payment_url;
                } else {
                    alert('Ошибка!');
                }

            }).fail(function(){
                alert('Ошибка!');
            }).always(function(){
                $loading.hide();
                $genBtn.prop('disabled', false);
            });
            
    });

});
// Yandex.Kassa payment tryout - END