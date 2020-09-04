
import {creative} from '../../_common/js/dc.js'

creative.showAd = ()=>{
    start()
    
}

















function start(){
	TweenLite.defaultEase = Power2.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	// tl.set(".t1",  {opacity:0} )	
	
	tl.to(".t1", .2, {opacity:1}, "+=.5")
	tl.add( flicker(".t1"), "+=.5" )
	tl.to(".t1", .3, {opacity:0}, "+=2")

	
	tl.from([".t2", ".bg2"], .5, {opacity:0})	
	tl.add( flicker(".t2"), "+=.8" )
	tl.to([".t2"], .3, {opacity:0}, "+=3")

	tl.from(".t3", .3, {opacity:0}, "+=.1")

	tl.add("end")
	
	tl.from(".legal", .3, {opacity:0}, "end" )

	

	tl.from(".footer", .3, {opacity:0}, "end")

	tl.to(".logo", .3, {y:0}, "end" )
	
	
	tl.from(".cta", .3, {opacity:0}, "+=.5")
	
	


}


function flicker(el){
	const tl = new TimelineMax({repeat:5})
	tl.to(el, .015, {opacity:0})
	tl.to(el, .01, {opacity:1})

	// const tl2 = new TimelineMax({repeat:1, repeatDelay:2})
	// tl2.add(tl)
	return tl
}




module.exports = {};

