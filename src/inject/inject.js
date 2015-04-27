(function() {
    function htmlreplace(a, b, reflags, element) {    
        if (!element) element = document.body;    
        var nodes = element.childNodes;
        var r = new RegExp(a, reflags);
        for (var n=0; n<nodes.length; n++) {
            if (nodes[n].nodeType == Node.TEXT_NODE) {
                nodes[n].textContent = nodes[n].textContent.replace(r, b);
            } else {
                htmlreplace(a, b, reflags, nodes[n]);
            }
        }
    }

    var readyStateCheckInterval = setInterval(function() {
	    if (document.readyState === "complete") {
		    clearInterval(readyStateCheckInterval);

     
        if ($("ol.follow-list").length > 0) {
          $('.repository-content #repos h2').text("Heart Throbs");
        }

        $('.starring-container button.js-toggler-target').each(function(_, val) {
          var star = '<span class="octicon octicon-star"></span>';
          var unstar = '<span class="unstarred-octicon-heart octicon octicon-star"></span>';

          var v = $(val);
          var t = v.text().trim();
          if (t == 'Star') {
            var hearts = `<div id="hearts">
              <div class="animated-heart heart1">&hearts;</div>
              <div class="animated-heart heart2">&hearts;</div>
              <div class="animated-heart heart3">&hearts;</div>
            </div>`;
            v.html(star + hearts + " Heart");
          }
          else {
             v.html(unstar + " BREAKUP");
          }
        })
				// htmlreplace("Star", "Heart", 'g');
	    }
    }, 10);
})();
