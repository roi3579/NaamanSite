$( document ).ready(function(){
  $(".button-collapse").sideNav({
  closeOnClick:true
  });
})

$('.hide-on-med-and-down li').click(function(e) {
  var $this = $(this);
  console.log($this)
  if (!$this.hasClass('active')) {
  $(".active").removeClass("active")
    reset()
    $('.' + $this.context.className).show()
    $this.addClass('active');

  }
  e.preventDefault();
});

$('.side-nav li').click(function(e) {
  var $this = $(this);
  if (!$this.hasClass('active')) {
  $(".active").removeClass("active")
    reset()
    $('.' + $this.context.className).show()
    $this.addClass('active');
  }
  e.preventDefault();
});

function reset()
{
$('.content>.agency').hide()
$('.content>.insurance').hide()
$('.content>.contact').hide()
}
