const fs = require('fs');

const imageFileNames = () => {
  const array = fs
    .readdirSync('src/assets/icons')
    .filter(file => {
      return file.endsWith('.png');
    })
    .map(file => {
      return file
        .replace('@1x.png', '.png')
        .replace('@2x.png', '.png')
        .replace('@3x.png', '.png');
    });

  return Array.from(new Set(array));
};

const generate = () => {
  const properties = imageFileNames()
    .map(name => {
      const filename = name.replace('.png', '');
      return `${filename}: require('@/assets/icons/${filename}.png')`;
    })
    .join(',\n  ');
  const string = `const Icons = {
  ${properties},
};

export default Icons;
`;
  fs.writeFileSync('src/assets/icons/index.ts', string, 'utf8');
};

generate();
