Object.defineProperty(PIXI.Program.prototype, 'vertexSrc', {
	get: function () {
		return this._vertexSrc;
	},
	set: function (src) {
		if (!this._originalVertexSrc) this._originalVertexSrc = src;
		this._vertexSrc = src;
	},
	enumerable: true,
	configurable: true,
});

Object.defineProperty(PIXI.Program.prototype, 'fragmentSrc', {
	get: function () {
		return this._fragmentSrc;
	},
	set: function (src) {
		if (!this._originalFragmentSrc) this._originalFragmentSrc = src;
		this._fragmentSrc = src;
	},
	enumerable: true,
	configurable: true,
});
