import { createStructuredSelector } from 'reselect';
import { userAccountSelector } from 'modules/app/containers/AppContainer/selectors';

export const generatorNameSelector = state => state.generator.generatorName;
export const generatorDirPathSelector = state => state.generator.generatorDirPath;
export const componentNameSelector = state => state.generator.componentName;
export const namespaceSelector = state => state.generator.namespace;
export const metaDataSelector =  state => state.generator.metaData;
export const metaHelpSelector =  state => state.generator.metaHelp;
export const generatedDataSelector = state => state.generator.generatedData;

export const modelSelector = createStructuredSelector({
    componentModel: state => state.generator
});
