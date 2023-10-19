module.exports = {
  '{apps,libs,tools}/**/*.{ts,tsx}': (files) => {
    return `nx affected --target=typecheck --files=${files.join(',')}`;
  },
  '{apps,libs,tools}/**/*.{js,ts,jsx,tsx,json}': [
    (files) => `nx affected:lint --files=${files.join(',')}`,
  ],
  '{apps,libs,tools}/**/*.{css, scss, less, sass, js,ts,jsx,tsx,json}': [
    (files) => `npx prettier . --write --check`,
  ],
};
