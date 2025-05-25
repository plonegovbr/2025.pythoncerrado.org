import type { ConfigType } from '@plone/registry';

export default function install(config: ConfigType) {
  // Main
  config.settings.siteLabel = 'Python Cerrado 2025';
  // Language
  config.settings.supportedLanguages = ['pt-br'];
  config.settings.defaultLanguage = 'pt-br';
  config.settings.isMultilingual = false;

  // Display Plone Login Form
  config.settings.showPloneLogin = true;
  // Navigation
  config.settings.navDepth = 3;
  // Expanders
  config.settings.apiExpanders = [
    ...config.settings.apiExpanders,
    {
      match: '',
      GET_CONTENT: ['inherit'],
      querystring: {
        'expand.inherit.behaviors':
          'collective.techevent.event_settings,plonegovbr.socialmedia.settings,voltolighttheme.header,voltolighttheme.theme,voltolighttheme.footer',
      },
    },
  ];
  // ImageCrop
  config.settings.image_crop_aspect_ratios = [
    {
      label: '16:9',
      ratio: 16 / 9,
    },
    {
      label: '4:3',
      ratio: 4 / 3,
    },
    {
      label: '1:1',
      ratio: 1,
    },
  ];
  config.settings.pictureOptions = {
    grid: [
      { media: '(min-width: 768px)', image: 'teaser' },
      { media: '(max-width: 767px)', image: 'large' },
    ],
    mainimage: [
      { media: '(min-width: 768px)', image: 'huge' },
      { media: '(max-width: 767px)', image: 'large' },
    ],
    teaser2columns: [
      { media: '(min-width: 768px)', image: 'larger' },
      { media: '(max-width: 767px)', image: 'large' },
    ],
    newsitem: [
      { media: '(min-width: 1200px)', image: 'larger' },
      { media: '(min-width: 992px) and (max-width: 1199px)', image: 'large' },
      { media: '(max-width: 991px)', image: 'teaser' },
    ],
  };
  return config;
}
