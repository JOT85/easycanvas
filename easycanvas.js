/*

	Easy Canvas
	-By Jacob O'Toole

*/

var ecO = {
	
	currentlySelected:0
	
} ;

function ec(canvasToSet) {
	
	if (typeof canvasToSet === "undefined") {
		
		if (ecO.currentlySelected === 0) {
			
			throw "Must select a canvas!" ;
			
		}
		
		else {
			
			canvasToSet = ecO.currentlySelected ;
			
		}
		
	}
	
	else {
		
		ecO.currentlySelected = canvasToSet
		
	}
	
	return {
		
		create : function (where,width,height) {
			
			var newCanvas = document.createElement("canvas") ;
			newCanvas.id = canvasToSet ;
			newCanvas.style.width = width + "px" ;
			newCanvas.width = width ;
			newCanvas.style.height = height + "px" ;
			newCanvas.height = height ;
			where.appendChild(newCanvas) ;
			return newCanvas ;
			
		},
		
		start : function () {
			
			var theCanvasContext = document.getElementById(canvasToSet).getContext("2d") ;
			theCanvasContext.beginPath() ;
			theCanvasContext.moveTo(0,0) ;
			return "0,0" ;
			
		},
		
		end : function () {
			
			var theCanvasContext = document.getElementById(canvasToSet).getContext("2d") ;
			theCanvasContext.closePath() ;
			return "ended" ;
			
		},
		
		moveTo : function (leftPos,topPos) {
			
			var theCanvasContext = document.getElementById(canvasToSet).getContext("2d") ;
			theCanvasContext.moveTo(leftPos,topPos) ;
			return leftPos + "," + topPos ;
			
		},
		
		lineTo : function (leftPos,topPos,lineWidth,lineColor,joiner) {
			
			console.log(canvasToSet) ;
			var theCanvasContext = document.getElementById(canvasToSet).getContext("2d") ;
			console.log(theCanvasContext) ;
			
			if (typeof lineWidth !== "undefined" && lineWidth !== 0) {
				
				theCanvasContext.lineWidth = lineWidth ;
				
			}
			
			if (typeof lineColor !== "undefined" && lineColor !== 0) {
				
				theCanvasContext.strokeStyle = lineColor ;
				
			}
			
			if (typeof joiner !== "undefined" && joiner !== 0) {
				
				if (joiner === "sharp") {
					
					joiner = "miter" ;
					
				}
				
				else if (joiner === "curve" || joiner === "curved") {
					
					joiner = "round" ;
					
				}
				
				else if (joiner === "flat") {
					
					joiner = "bevel" ;
					
				}
				
				theCanvasContext.lineJoin = joiner ;
				
			}
			
			theCanvasContext.lineTo(leftPos,topPos) ;
			theCanvasContext.stroke() ;
			return leftPos + "," + topPos ;
			
		},
		
		arc : function (leftPos,topPos,radious,startAngle,endAngle,lineWidth,lineColor,clockwise) {
			
			var theCanvasContext = document.getElementById(canvasToSet).getContext("2d") ;
			
			if (typeof lineWidth !== "undefined" && lineWidth !== 0) {
				
				theCanvasContext.lineWidth = lineWidth ;
				
			}
			
			if (typeof lineColor !== "undefined" && lineColor !== 0) {
				
				theCanvasContext.strokeStyle = lineColor ;
				
			}
			
			startAngle = startAngle / 180 * Math.PI ;
			endAngle = endAngle / 180 * Math.PI ;
			theCanvasContext.arc(leftPos,topPos,radious,startAngle,endAngle,(clockwise === false)) ;
			theCanvasContext.stroke() ;
			return leftPos + "," + topPos ;
			
		},
		
		arcTo : function (startLeftPos,startTopPos,endLeftPos,endTopPos,rdious,lineWidth,lineColor) {
			
			var theCanvasContext = document.getElementById(canvasToSet).getContext("2d") ;
			
			if (typeof lineWidth !== "undefined" && lineWidth !== 0) {
				
				theCanvasContext.lineWidth = lineWidth ;
				
			}
			
			if (typeof lineColor !== "undefined" && lineColor !== 0) {
				
				theCanvasContext.strokeStyle = lineColor ;
				
			}
			
			theCanvasContext.arkTo(startLeftPos,startTopPos,endLeftPos,endTopPos,rdious) ;
			theCanvasContext.stroke() ;
			
		},
		
		curve : function (firstLeftPos,firstTopPos,lastLeftPos,lastTopPos,lineWidth,lineColor) {
			
			var theCanvasContext = document.getElementById(canvasToSet).getContext("2d") ;
			
			if (typeof lineWidth !== "undefined" && lineWidth !== 0) {
				
				theCanvasContext.lineWidth = lineWidth ;
				
			}
			
			if (typeof lineColor !== "undefined" && lineColor !== 0) {
				
				theCanvasContext.strokeStyle = lineColor ;
				
			}
			
			theCanvasContext.quadraticCurveTo(firstLeftPos,firstTopPos,lastLeftPos,lastTopPos) ;
			theCanvasContext.stroke() ;
			return lastLeftPos + "," + lastTopPos ;
			
		},
		
		fill : function (fillColor) {
			
			var theCanvasContext = document.getElementById(canvasToSet).getContext("2d") ;
			
			if (typeof fillColor !== "undefined" && fillColor !== 0) {
				
				theCanvasContext.fillStyle = fillColor ;
				
			}
			
			theCanvasContext.fill() ;
			
		},
		
		rectangle : function (leftPos,topPos,width,height,lineWidth,lineColor,fillColor) {
			
			var theCanvasContext = document.getElementById(canvasToSet).getContext("2d") ;
			
			if (typeof lineWidth !== "undefined" && lineWidth !== 0) {
				
				theCanvasContext.lineWidth = lineWidth ;
				
			}
			
			if (typeof lineColor !== "undefined" && lineColor !== 0) {
				
				theCanvasContext.strokeStyle = lineColor ;
				
			}
			
			if (typeof fillColor !== "undefined" && fillColor !== 0) {
				
				theCanvasContext.fillStyle = fillColor ;
				
			}
			
			theCanvasContext.rect(leftPos,topPos,leftPos + width,topPos + height) ;
			theCanvasContext.fill() ;
			theCanvasContext.stroke() ;
			
		},
		
		rect : this.rectangle,
		
		circle : function (centerLeft,centerTop,radious,lineWidth,lineColor,fillColor) {
			
			var theCanvasContext = document.getElementById(canvasToSet).getContext("2d") ;
			
			if (typeof fillColor !== "undefined" && fillColor !== 0) {
				
				theCanvasContext.fillStyle = fillColor ;
				
			}
			
			this.arc(centerLeft,centerTop,radious,0,360,lineWidth,lineColor,true) ;
			
			theCanvasContext.fill() ;
			
		}
		
	} ;
	
}