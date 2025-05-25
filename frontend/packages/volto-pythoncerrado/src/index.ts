import installBlocks from './config/blocks';
import installSettings from './config/settings';

const applyConfig = (config) => {
  installBlocks(config);
  installSettings(config);
  return config;
};

export default applyConfig;
