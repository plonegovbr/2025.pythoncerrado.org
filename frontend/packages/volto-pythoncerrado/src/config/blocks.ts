import type { ConfigType } from '@plone/registry';
import type { StyleDefinition } from '@plone/types';

declare module '@plone/types' {
  export interface BlockConfigBase {
    themes?: StyleDefinition[];
    allowedBlocks?: string[];
    allowed_headline_tags?: string[][];
    dataAdapter?: any;
    unwantedButtons?: string[];
    imageScale?: string;
    allowed_headings?: string[][];
  }
}

function installBlockTheme(config: ConfigType) {
  // Palettes
  config.blocks.themes = [
    {
      style: {
        '--theme-color': 'transparent', // Background color for cards
        '--theme-high-contrast-color': 'transparent', // Background color for a teaser card
        '--theme-foreground-color': '#000',
        '--theme-low-contrast-foreground-color': '#555555', // Dimmer color for text ()
      },
      name: 'default',
      label: 'Default',
    },
    {
      style: {
        '--theme-color': '#410b57',
        '--theme-high-contrast-color': '#08807a',
        '--theme-foreground-color': '#f0f0f7',
        '--theme-low-contrast-foreground-color': '#f0f0f7',
      },
      name: 'roxo',
      label: 'Roxo',
    },
    {
      style: {
        '--theme-color': '#fd036c',
        '--theme-high-contrast-color': '#7f085e',
        '--theme-foreground-color': '#f0f0f7',
        '--theme-low-contrast-foreground-color': '#f0f0f7',
      },
      name: 'rosa',
      label: 'Rosa',
    },
  ];

  // Default block widths
  config.blocks.widths = [
    {
      style: {
        '--block-width': 'var(--narrow-container-width)',
      },
      name: 'narrow',
      label: 'Narrow',
    },
    {
      style: {
        '--block-width': 'var(--default-container-width)',
      },
      name: 'default',
      label: 'Default',
    },
    {
      style: {
        '--block-width': 'var(--layout-container-width)',
      },
      name: 'layout',
      label: 'Layout',
    },
    {
      style: {
        '--block-width': '100%',
      },
      name: 'full',
      label: 'Full Width',
    },
  ];
  config.blocks.blocksConfig.gridBlock.themes = config.blocks.themes;
  return config;
}

export default function install(config: ConfigType) {
  installBlockTheme(config);
  config.blocks.blocksConfig.gridBlock = {
    ...config.blocks.blocksConfig.gridBlock,
    blocksConfig: {
      ...config.blocks.blocksConfig,
    },
    allowedBlocks: [
      ...config.blocks.blocksConfig.gridBlock.allowedBlocks,
      '__button',
    ],
  };
  return config;
}
