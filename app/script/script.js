$(function() {
    //reset height on load.

    $('#secondMenu_panel').css('height', $('#secondMenu_panel').find('.start').height());
    $('#secondMenu').css('height', 0);

   //bind click events to top menu.
    $('.js-slideHook').click(function(e){

        var panel = $(this).attr('data-panel'),
            moveLeft = 0,
            height;

        //remove selected from all other clickables.
        $('.js-slideHook').each(function(){
            $(this).removeClass('selected');
        })
        $(this).addClass('selected');

        //where is the panel?
        $('#secondMenu_panel').find('.secondMenu__item').each(function(i){
            if($(this).attr('data-panel') === panel){
                moveLeft = $(this).position().left;
                height = $(this).height();
            }
        })

        $('#secondMenu_panel').css('left', -moveLeft);
        $('#secondMenu_panel').css('height', height);

        if ($('#secondMenu').height() > 0) {
            $('#secondMenu').css('height', height);
        }

        //hide all pages.
        $('.page').each(function(){
            $(this).addClass('hidden');
        })
        //display the right page.
        $('.page').each(function(i){
            if($(this).attr('data-page') === panel){
                $(this).removeClass('hidden');
            }
        })

    });

    $('#js--menuToggle').click(function(e){
        if ($('#secondMenu').height() > 0) {
            $('#secondMenu').css('height', 0);
        }else{
            $('#secondMenu').css('height', $('#secondMenu_panel').find('.start').height());
        }

    })

    $(document).keydown(function(e){
        if(e.keyCode == 37 || e.keyCode == 39){
            //which menu item is selected?
            var selected = 1;

            $('.selected').each(function(i){
                selected = $(this).attr('data-panel');
            })

            if (e.keyCode == 37) {
                selected--;
                if(selected<1){
                    selected = 1;
                }
            }
            if (e.keyCode == 39) {
                console.log( "right pressed" );
                selected++;
                if(selected>5){
                    selected = 5;
                }
            }

            $('.menu__item').each(function(i){
                if($(this).attr('data-panel') == selected){
                    $(this).click();
                }
            });

        }

    });
});