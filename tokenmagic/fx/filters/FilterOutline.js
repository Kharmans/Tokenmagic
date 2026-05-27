import { Anime } from '../Anime.js';
import './proto/FilterProto.js';

export class FilterOutline extends PIXI.filters.OutlineFilter {
	constructor(params) {
		let { thickness, color, knockout } = Object.assign({}, FilterOutline.defaults, params);

		super();

		Object.assign(this, {
			thickness,
			color,
			knockout,
		});

		this.blendMode = PIXI.BLEND_MODES.NORMAL;
		this.padding = 5;
		this.enabled = false;
		this.quality = 1;
		this.zOrder = 50;
		this.animated = {};
		this.setTMParams(params);
		if (!this.dummy) {
			this.anime = new Anime(this);
			this.normalizeTMParams();
		}
	}
}

FilterOutline.defaults = {
	thickness: 3,
	color: 0x000000,
	knockout: false,
};
