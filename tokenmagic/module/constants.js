export const defaultOpacity = 0.5;
export const emptyPreset = 'NOFX';
export const autoMinRank = 10000;
export const PlaceableType = {
	TOKEN: foundry.canvas.placeables.Token.embeddedName,
	TILE: foundry.canvas.placeables.Tile.embeddedName,
	DRAWING: foundry.canvas.placeables.Drawing.embeddedName,
	REGION: foundry.canvas.placeables.Region.embeddedName,
	NOT_SUPPORTED: null,
};
export const TEMPLATE_REGION_TYPES = [
	foundry.data.RectangleShapeData.TYPE,
	foundry.data.CircleShapeData.TYPE,
	foundry.data.ConeShapeData.TYPE,
	foundry.data.RingShapeData.TYPE,
	foundry.data.LineShapeData.TYPE,
	foundry.data.EmanationShapeData.TYPE,
];
export const TEMPLATE_TO_REGION_TYPE = {
	circle: foundry.data.CircleShapeData.TYPE,
	cone: foundry.data.ConeShapeData.TYPE,
	ray: foundry.data.LineShapeData.TYPE,
	rect: foundry.data.RectangleShapeData.TYPE,
};
