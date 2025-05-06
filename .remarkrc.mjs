import gfm   from 'remark-gfm';
import toc   from 'remark-toc';
import preset from 'remark-preset-prettier';

export default {
  settings: { bullet: '-' },

  plugins: [
    gfm,
    [toc, { heading: '目次', maxDepth: 3 }],
    preset
  ]
};