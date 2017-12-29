// External Links in New Window
// $("a[href*='http://']:not([href*='"+$('a.brand').attr('href')+"'])").attr('target', '_blank');

$(document).ready(function(){
  if($('head title').html().indexOf('Blog') > -1){
    _gaq.push(['_trackEvent', $('span.username').html(), 'Blog Page Loaded', $('h1.blogposttitle a').attr('href')]);
    $('img').bind('contextmenu', function(e){
        _gaq.push(['_trackEvent', $('span.username').html(), 'Image Right Clicked', $(this).attr('src')]);
    });
  }
});
function ooVideoLoading(id){
  _gaq.push(['_trackEvent', $('span.username').html(), 'Video Play', id]);
}


//PAGE LIST VIEW MODE SWITCH
$('a.pagelistmode').click(function(){
  if($(this).hasClass('flip')){
    $(this).removeClass('flip');
    $('#pagelisting').removeClass('grid');
    document.cookie=$(this).attr('id')+'=list';
  }else{
    $(this).addClass('flip');
    $('#pagelisting').addClass('grid');
    document.cookie=$(this).attr('id')+'=grid';
  }
});

//PAGE LIST GRID MODE HOVER
$('.blog.thumbnail').hover(function(){
  $(this).addClass('hovered');
},function(){
  $(this).removeClass('hovered');
});

//LOAD OOYALA VIDEO
var ooyalaloaded = false;
$('.ooyalavideo').each(function(event){
  var id = $(this).attr('id');
  var autoplay = $(this).attr('autoplay') ? true : false;

  if(!ooyalaloaded)
    $.getScript("//player.ooyala.com/v3/dcbb57253ac4402685e3d52fd97c0b16?tweaks=android-enable-hls", function() {
      OO.Player.create(id,id,{
        autoplay: autoplay
      });
      ooyalaloaded = true;
    });

  else
    OO.Player.create(id,id,{
      autoplay: autoplay
    });
});

//FRAME SWITCHER
$('.frame-switcher').each(function(event){
  updateSwitcher($(this).children('ul').children('li.active').children('a'));
});
$('.frame-switcher ul.nav-tabs a').click(function(event){
  event.preventDefault();
  if(!$(this).parent('ul.nav-tabs li').hasClass('active')){
    $(this).parents('ul.nav-tabs').children('li').removeClass('active');
    $(this).parent('ul.nav-tabs li').addClass('active');
    updateSwitcher($(this));
  }
});
function updateSwitcher(active){
  source = active.attr('source');
  frame = active.parent('li').parent('ul').parent('.frame-switcher').children('.frame');
  frame.height(frame.width()*.645);

  var content;

  // OOYALA VIDEO
  if(source == 'ooyala'){
    frame.attr('id','frm'+(new Date().getTime()));

    if(!ooyalaloaded)
      $.getScript("//player.ooyala.com/v3/dcbb57253ac4402685e3d52fd97c0b16?tweaks=android-enable-hls", function() {
        OO.Player.create(frame.attr('id'),active.attr('remoteid'));
        ooyalaloaded = true;
      });

    else
      OO.Player.create(frame.attr('id'),active.attr('remoteid'));
  }

  // YOUTUBE VIDEO
  else
    content = '<iframe width="100%" height="100%" src="'+active.attr('href')+'" frameborder="0" allowfullscreen></iframe>';

  frame.html(content);
}

//TAB SWITCHER
$('.nav-tabs a').click(function(event){
  //event.preventDefault();
  $(this).tab('show');
});

//CENTER PAGINATION
thetotal = 0;
$('#pagination a').each(function(){
  thetotal = thetotal + $(this).width()+28;
});
$('#pagination').css('margin-left',(700-thetotal)/2);