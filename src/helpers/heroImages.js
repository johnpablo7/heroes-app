// the initialization of those functions
// is to avoid issues on the tests
// because require.context is a WebPack specific feature
let heroImages = () => ({ default: '' });

try {
	heroImages = require.context('../assets', true);
} catch (error) {}

export const loadImage = (image) => heroImages(`./${image}`).default;
