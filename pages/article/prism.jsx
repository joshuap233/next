import Prism from "prismjs";
// https://github.com/margox/braft-extensions
Prism.hooks.add('before-highlight', function (env) {
  env.element.innerHTML = env.element.innerHTML.replace(/<br\s*\/?>/g, '\n');
  env.code = env.element.textContent.replace(/^(?:\r?\n|\r)/, '');
});

export default Prism;
