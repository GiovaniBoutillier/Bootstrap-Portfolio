$(window).scroll
(
  function()
  {
    if ($(window).scrollTop() != 0)
    $('#portfolio').css( {'opacity' : '1' });
    else
    $('#portfolio').css( {'opacity' : '0' });
  }
);
