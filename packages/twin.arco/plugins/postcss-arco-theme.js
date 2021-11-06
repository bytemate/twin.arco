const { parse } = require('postcss-values-parser');

// https://github.com/postcss/postcss/blob/main/docs/writing-a-plugin.md
module.exports = (_opts = {}) => {
  // Work with options here

  return {
    postcssPlugin: 'postcss-arco-theme',

    Root(root, _postcss) {
      // Transform CSS AST here

      // delete dark css variables
      const { nodes } = root;

      for (const node of nodes) {
        if (node.selector === 'body[arco-theme=dark]') {
          root.removeChild(node);
        }
      }

      root.walkRules(rule => {
        if (rule.first.prop === '--red-1') {
          rule.selector = 'palette';
        }

        if (rule.first.prop === '--color-white') {
          rule.selector = 'theme';
        }
      });
    },

    Declaration(decl, _postcss) {
      // The faster way to find Declaration node

      if (decl.parent.selector === 'theme') {
        // remove some number value variables
        const value = parse(decl.value);
        if (value.first.type === 'numeric') {
          decl.remove();
        }
      }
    },

    /*
    Declaration: {
      color: (decl, postcss) {
        // The fastest way find Declaration node if you know property name
      }
    }
    */
  };
};
module.exports.postcss = true;
