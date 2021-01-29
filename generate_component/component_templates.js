exports.component = (name) => `import React from 'react';
import './${name}.scss';

const ${name} = (props) => {
  return <div>Hello 👋, I am a ${name} component.</div>;
};

export default ${name};
`;