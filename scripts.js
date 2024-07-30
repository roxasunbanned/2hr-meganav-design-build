$(function() {
    const $body = $('body');
    const $toggleItem = $('.toggle-item');
    const $toggleSwitch = $('.toggle-switch');
    const $bgDarkElements = $('#header__center, #main');
    const $bgDarkHeaderTop = $('#header__top');
    const $toggleSwitchKnob = $('.toggle-switch__knob');
    const $headerBottom = $('#header__bottom');
    const $navItemHasChildren = $('.nav-item--has-children');
    const $navListChild = $('.nav-list__child');
    const $navListGroup = $('#header__top, .nav-list__child');
    const $headerTop = $('#header__top');

    // Was previous page/refresh dark mode?
    if(localStorage.getItem('darkMode')) {
        initiateDarkMode();
    }

    // Toggle dark mode
    $toggleItem.on('click', () => toggleDarkMode());

    // Close alert
    $('#header__bottom__close').click(() => $headerBottom.fadeToggle());

    // Hover topbar dropdown
    $navItemHasChildren.hover(
        function() {
            $navListChild.hide();
            $(this).find('.nav-list__child').show();
        },
        function() {
            if($(this).hasClass('nav-list__child') || $(this).id !== "header__top") {
                return
            }
            console.log($(this).attr('id'));
            $(this).find('.nav-list__child').hide();
        }
    );

    // Close topbar dropdown
    $headerTop.add($navListGroup).mouseleave(() => $navListChild.hide());

    function toggleDarkMode() {
        $toggleSwitch.toggleClass('toggle-switch--active');
        $toggleSwitchKnob.toggleClass('toggle-switch__knob--active');
        $body.toggleClass('body--dark');
        $bgDarkElements.toggleClass('bg--dark');
        $bgDarkHeaderTop.toggleClass('header__top--dark');
        if($body.hasClass('body--dark')) {
            localStorage.setItem('darkMode', 'true');
        } else {
            localStorage.removeItem('darkMode');
        }
    }

    function initiateDarkMode() {
        $('.toggle-switch').addClass('toggle-switch--active');
        $('.toggle-switch__knob').addClass('toggle-switch__knob--active');
        $('body').addClass('body--dark');
        $('#header__center, #main').addClass('bg--dark');
        $('#header__top').addClass('header__top--dark');
    }
});