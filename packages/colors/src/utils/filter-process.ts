import type { PluginCreator } from 'postcss';
import { parse } from 'postcss-values-parser';

/**
 * 1. filter duplicate css variables from dark mode
 * 2. remove nonnumeric css variables
 * 3. rename selector for js readable
 */
export const filterArco: PluginCreator<undefined> = () => ({
  postcssPlugin: 'postcss-arco-theme',

  Root(root, _postcss) {
    // Transform CSS AST here

    // delete dark css variables
    const { nodes } = root;

    for (const node of nodes) {
      if (node.type === 'rule' && node.selector === 'body[arco-theme=dark]') {
        root.removeChild(node);
      }
    }

    root.walkRules(rule => {
      if (rule.first?.type === 'decl' && rule.first.prop === '--red-1') {
        rule.selector = 'palette';
      }

      if (rule.first?.type === 'decl' && rule.first.prop === '--color-white') {
        rule.selector = 'theme';
      }
    });
  },

  Declaration(decl, _postcss) {
    // The faster way to find Declaration node

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (decl.parent?.selector === 'theme') {
      // remove some number value variables
      const value = parse(decl.value);
      if (value.first?.type === 'numeric') {
        decl.remove();
      }
    }
  },
});

filterArco.postcss = true;
