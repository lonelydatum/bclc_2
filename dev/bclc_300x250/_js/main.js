
import {creative, flicker} from '../../_common/js/dc.js'

creative.showAd = ()=>{
    start()
    
}

















function start(){
	TweenLite.defaultEase = Power2.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	

	tl.to(".t1", .2, {opacity:1}, "+=.5")
	
	
	tl.add( flicker(".t1"), "+=.5" )
	tl.to(".t1", .3, {opacity:0}, "+=2")

	// tl.to(".t2", .2, {opacity:1}, "+=.5")
	tl.from(".t2", .1, {opacity:0})	
	tl.add( flicker(".t2"), "+=.6" )
	tl.to(".t2", .3, {opacity:0}, "+=3")

	tl.from(".t3", .3, {opacity:0}, "+=.1")

	tl.add("end")
	
	tl.from(".legal", .3, {opacity:0}, "end" )
	tl.to(".logo", .3, {y:-21}, "end")

	tl.from(".footer", .3, {opacity:0})
	
	
	tl.from(".cta", .3, {opacity:0, y:"+=20"}, "+=.5")
	
	


}




module.exports = {};

