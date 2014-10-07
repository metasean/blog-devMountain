$(document).ready( function (){

     var charCheck = function() {
        var charLeft = 140 - $('.tweet-compose').val().length;
        if (charLeft <= 10) {
            $('#char-count').css("color", "#ff0000");
            if (charLeft <= 0) {
                $('#tweet-submit').prop("disabled", true);
            } else {
                $('#tweet-submit').prop("disabled", false);
            };
        } else {
            $('#char-count').css("color", "#000000");
        };
        $('#char-count').html(charLeft);
     };

    var generateNewTweetDiv = function() {
        var newTweetHtml = ('<div class="tweet">' +
                            '   <div class="content">' +
                            '       <img class="avatar" src=' + $('#profile-summary > .content > img').attr('src') + ' />' +  
                            '       <strong class="fullname">' + $('#profile-summary > .content > p').html() + '</strong>' + 
                            '       <span class="username">@mybff</span>' + 
                            '       <p class="tweet-text">' + $('#profile-summary > .tweet-compose').text() + '</p>' +
                            '       <div class="tweet-actions">' +
                            '           <ul>' +
                            '               <li><span class="icon action-reply"></span> Reply</li>' +
                            '               <li><span class="icon action-retweet"></span> Retweet</li>' + 
                            '               <li><span class="icon action-favorite"></span> Favorite</li>' + 
                            '               <li><span class="icon action-more"></span> More</li>' + 
                            '           </ul>' +
                            '       </div>' +
                            '       <div class="stats">' +
                            '           <div class="retweets">' +
                            '               <p class="num-retweets">30</p>' +
                            '               <p>RETWEETS</p>' +
                            '           </div>' +
                            '           <div class="favorites">' +
                            '               <p class="num-favorites">6</p>' +
                            '               <p>FAVORITES</p>' +
                            '           </div>' +
                            '           <div class="users-interact">' +
                            '               <div>' +
                            '                   <img src="img/alagoon.jpg" />' +
                            '                   <img src="img/vklimenko.jpg" />' +
                            '               </div>' +
                            '           </div>' +
                            '           <div class="time">' +
                            '               1:04 PM - 19 Sep 13' +
                            '           </div>' +
                            '       </div>' +
                            '       <div class="reply">' +
                            '           <img class="avatar" src="img/alagoon.jpg" />' +
                            '           <textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
                            '       </div>' +
                            '   </div>' +
                            '</div>' 
                            );

        $('#stream').html(newTweetHtml + $('div#stream').html());
    };

    // 
    // on load/reload
        // check character count
        charCheck();
        // hide .tweet-actions
        $('.tweet').find('.tweet-actions').hide();
        // hide .stats
        $('.stats').hide();

    $(".tweet-compose").focus(function() {
        $(this).animate(
            {height: "5em"},
             "normal");
        $('#tweet-controls').show();
    });
    // Alternate method
    // $("tweet-compose").on('click', function() {
    //  $(this).height(66);
    // });

    $('.tweet').hover(
        function (){
            $(this).find('.tweet-actions')
                   .show()
                   .animate({height: 18}, 400);
        }, function (){
            $(this).find('.tweet-actions')
                   .slideUp(400);
        }
    );

    var showStatsIs = false;
    $('.tweet').click(function() {
        if (showStatsIs == false) {
            $(this).find('.stats')
                   .slideDown({height: 75}, 500);
            showStatsIs = true;
        } else {
            $(this).find('.stats')
                   .slideUp(500);
            showStatsIs = false;
        }
    });

    $('.tweet-compose').keyup(function() {
        charCheck();
    });

    $('#tweet-submit').click(function(){
        //debugger;
        generateNewTweetDiv();
    });
});


