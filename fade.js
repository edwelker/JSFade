    yellow: function(ele) {
        var blue = 100;
        (function() {
            ele.style.background = 'rgb(248,248,'+ (blue += 4) +')';
            if (blue < 240) {
                setTimeout(arguments.callee, 30);
            }
        })();   
    },
    
    
    fadeOut: function( ele ) {
    	var myOpacity = (function(){ 
    		if(ele.filter)
    		{ return function(val){ ele.style.filters = 'alpha(opacity=' + val + ')'; } }
    		else { return function(val){ ele.style.opacity = val/100; } }
    		})();
    	var setOpacity = myOpacity;
    	ele.zoom = 1; //ie can't do opacity well without layout
    	setOpacity( 100 );
    	for(var i=0; i<=100; i+= 5)
    	{
    		(function(){
    			var num = 100 * Math.sin(i/100 * (Math.PI/2));
    			setTimeout(function(){
    				setOpacity( 100 - num ); 
    				if( num == 100 )
    				{
    				    ele.parentNode.removeChild( ele );
    				}
    			}, num*4 );
    		})();
    	}
    }