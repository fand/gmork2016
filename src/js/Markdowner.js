import remark from 'remark';
import html   from 'remark-html';
const processor = remark().use(html);

const MD = {
  Libs  : require('../md/Libs.md'),
  Songs : require('../md/Songs.md'),
  Apps  : require('../md/Apps.md'),
};

const Markdowner = (path) => processor.process(MD[path], { breaks : true });
export default Markdowner;
