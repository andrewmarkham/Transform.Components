/*import { configure } from '@storybook/react';

const req = require.context('../src/components', true, /[^/]+\/stories.tsx$/);

function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

*/

import '!style-loader!css-loader!sass-loader!../src/sass/styles.scss';
//import { configure } from '@storybook/react';
// automatically import all files ending in *.stories.tsx
//configure(require.context('../src/', true,/[^/]+[a-z].stories.tsx$/), module)
 