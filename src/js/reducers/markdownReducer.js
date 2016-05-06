import path from 'path';
import remark from 'remark';
import html   from 'remark-html';
const processor = remark().use(html);

const DIR = path.resolve(__dirname, '../../md');

const initState = () => {
  try {
    // on server
    const fs = require('fs');
    const files = fs.readdirSync(DIR);

    const state = {};

    files.forEach((f) => {
      if (!f.match(/.*\.md$/)) { return; }
      const name = f.replace('.md', '');
      state[name] = processor.process(fs.readFileSync(path.resolve(DIR, f), 'utf8'), {
        breaks: true,
      });
    });

    return state;
  }
  catch (e) {
    // on client
    return {};
  }
};

const INITIAL_STATE = initState();

export default function (state = INITIAL_STATE) {
  return state;
}
