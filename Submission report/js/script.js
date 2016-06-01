  $(function() {
    $( "#tabs" ).tabs();
	  $(".btnPrev").on('click', function () {
        $("#tabs").tabs("option", "active", $("#tabs").tabs('option', 'active') - 1);
		  $("body").animate({"scrollTop":0},"slow");
    });
	  $(".btnNext").on('click', function () {
        $("#tabs").tabs("option", "active", $("#tabs").tabs('option', 'active') + 1);
		  $("body").animate({"scrollTop":0},"slow");
    });
	   
  });