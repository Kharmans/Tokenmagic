import { Anime } from '../Anime.js';
import { customVertex2D } from '../glsl/vertexshaders/customvertex2D.js';
import { CustomFilterMixin } from './CustomFilterMixin.js';
import './proto/FilterProto.js';

export class FilterColorGradient extends CustomFilterMixin(PIXI.filters.ColorGradientFilter) {
	constructor(params) {
		let { type, stops, alpha, angle, maxColors, replace } = Object.assign({}, FilterColorGradient.defaults, params);

		super({ vertexSrc: customVertex2D, args: [{ type, stops, alpha, angle, maxColors, replace }] });

		this.zOrder = 50;
		this.animated = {};
		this.setTMParams(params);
		if (!this.dummy) {
			this.anime = new Anime(this);
			this.normalizeTMParams();
		}
	}
}

FilterColorGradient.defaults = {
	type: 0,
	stops: [
		{ offset: 0.0, color: 0xff0000, alpha: 1.0 },
		{ offset: 1.0, color: 0x0000ff, alpha: 1.0 },
	],
	alpha: 1.0,
	angle: 90.0,
	maxColors: 0,
	replace: false,
	sticky: true,
};
