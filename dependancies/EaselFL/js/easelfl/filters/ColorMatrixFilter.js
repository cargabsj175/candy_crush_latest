/*
 * EaselFL is EaselJS rendering to Flash
 * @author Brett Johnson, periscopic.com
 */

/*
* ColorMatrixFilter
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

(function(ns) {

/**
* Allows you to carry out complex color operations such as modifying saturation, brightness, or inverting.
* @class ColorMatrixFilter
* @constructor
* @augments Filter
* @param matrix A 4x5 matrix describing the color operation to perform. See also the ColorMatrix class.
**/
var ColorMatrixFilter = function(matrix) {
  this.initialize(matrix);
}
var p = ColorMatrixFilter.prototype = new ns.Filter();

// public properties:
	p.matrix = null;
	
// constructor:
	// TODO: detailed docs.
	/** 
	 * @method initialize
	 * @protected
	 * @param matrix A 4x5 matrix describing the color operation to perform.
	 **/
	/*
	 //-- EaselJS
	p.initialize = function(matrix) {
		this.matrix = matrix;
	}
	*/
	p.initialize = function(matrix) {
		this.matrix = matrix;		
		this._flMatrix = [];
		this._flId = ns.UID.get();
	}
	
// public methods:
	/**
	 * Applies the filter to the specified context.
	 * @method applyFilter
	 * @param ctx The 2D context to use as the source.
	 * @param x The x position to use for the source rect.
	 * @param y The y position to use for the source rect.
	 * @param width The width to use for the source rect.
	 * @param height The height to use for the source rect.
	 * @param targetCtx Optional. The 2D context to draw the result to. Defaults to the context passed to ctx.
	 * @param targetX Optional. The x position to draw the result to. Defaults to the value passed to x.
	 * @param targetY Optional. The y position to draw the result to. Defaults to the value passed to y.
	 **/
	/*
	 //-- EaselJS
	p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
		targetCtx = targetCtx || ctx;
		if (targetX == null) { targetX = x; }
		if (targetY == null) { targetY = y; }
		try {
			var imageData = ctx.getImageData(x, y, width, height);
		} catch(e) {
			//if (!this.suppressCrossDomainErrors) throw new Error("unable to access local image data: " + e);
			return false;
		}
		var data = imageData.data;
		var l = data.length;
		var r,g,b,a;
		var mtx = this.matrix;
		var m0 =  mtx[0],  m1 =  mtx[1],  m2 =  mtx[2],  m3 =  mtx[3],  m4 =  mtx[4];
		var m5 =  mtx[5],  m6 =  mtx[6],  m7 =  mtx[7],  m8 =  mtx[8],  m9 =  mtx[9];
		var m10 = mtx[10], m11 = mtx[11], m12 = mtx[12], m13 = mtx[13], m14 = mtx[14];
		var m15 = mtx[15], m16 = mtx[16], m17 = mtx[17], m18 = mtx[18], m19 = mtx[19];
		
		for (var i=0; i<l; i+=4) {
			r = data[i];
			g = data[i+1];
			b = data[i+2];
			a = data[i+3];
			data[i] = r*m0+g*m1+b*m2+a*m3+m4; // red
			data[i+1] = r*m5+g*m6+b*m7+a*m8+m9; // green
			data[i+2] = r*m10+g*m11+b*m12+a*m13+m14; // blue
			data[i+3] = r*m15+g*m16+b*m17+a*m18+m19; // alpha
		}
		imageData.data = data;
		targetCtx.putImageData(imageData, targetX, targetY);
		return true;
	}
	*/
	p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
		if(ns.Stage.FL_THROW_UNIMPLEMENTED) throw 'EaselFl:ColorMatrixFilter.applyFilter currently not implemented';
		return true;
	}

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function() {
		return "[ColorMatrixFilter]";
	}
	
	
	/**
	 * Returns a clone of this ColorMatrixFilter instance.
	 * @method clone
	 @return {ColorMatrixFilter} A clone of the current ColorMatrixFilter instance.
	 **/
	p.clone = function() {
		return new ColorMatrixFilter(this.matrix);
	}
	
	
	/***** EaselFL specific code *****/
	
	p._flType = 'cmtxfl';
	p._flMatrix = null;

	//-- FL synchronize properties
	p._flSyncProps = function(ctx) {
		var mtx = this.matrix;
		var flmtx = this._flMatrix;
		
		if(
			 mtx[0] !== flmtx[0] ||
			 mtx[1] !== flmtx[1] ||
			 mtx[2] !== flmtx[2] ||
			 mtx[3] !== flmtx[3] ||
			 mtx[4] !== flmtx[4] ||
			 mtx[5] !== flmtx[5] ||
			 mtx[6] !== flmtx[6] ||
			 mtx[7] !== flmtx[7] ||
			 mtx[8] !== flmtx[8] ||
			 mtx[9] !== flmtx[9] ||
			 mtx[10] !== flmtx[10] ||
			 mtx[11] !== flmtx[11] ||
			 mtx[12] !== flmtx[12] ||
			 mtx[13] !== flmtx[13] ||
			 mtx[14] !== flmtx[14] ||
			 mtx[15] !== flmtx[15] ||
			 mtx[16] !== flmtx[16] ||
			 mtx[17] !== flmtx[17] ||
			 mtx[18] !== flmtx[18] ||
			 mtx[19] !== flmtx[19] )
			{
				var copy = this._flMatrix = mtx.toArray();
				this._flCtx._flChange.push([this._flId, 'flt', copy]);
		}
	}

	p._flResetProps = function() {
		this._flCtx = null;
		this._flMtx = [];
	}

	/**** end EaselFL specific code ******/	
	
ns.ColorMatrixFilter = ColorMatrixFilter;
}(createjs||(createjs={})));
var createjs;