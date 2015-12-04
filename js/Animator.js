function Animator(element) {
	this.el = element;
	
	var animationIntervalId;
	var cssProperty;
	var cssValue;

	// var css = {prop: 'left', value=10};
	this.animate = function(css, duration) {
		var style = window.getComputedStyle(element);
		var initial = style.getPropertyValue(css.prop);
		initial = parseInt(initial);
		
		cssValue = parseInt(css.value);
		cssProperty = css.prop;
		
		var tempInitial = initial;
		var intervalLength = 10;

		var step = (cssValue - initial) / (duration / intervalLength);
		
		//animationIntervalId = intervalTrigger(initial, cssProperty, step, duration,intervalLength);
		
		var counter=0;
		animationIntervalId = setInterval(function() {
			counter++;
			
			element.style[cssProperty] = (step * counter) + 'px';
			if (counter >= duration/intervalLength){
				element.style[cssProperty] = cssValue + 'px';
				window.clearInterval(animationIntervalId);
			}
		}, intervalLength);
	}

	// should stop the animation in current position
	this.stop = function() {
		clearInterval(animationIntervalId);
	}

	// should stop the animation and element's properties should be at "end" value
	this.finish = function() {
		window.clearInterval(animationIntervalId);
		element.style[cssProperty] = cssValue + 'px';
	}
}