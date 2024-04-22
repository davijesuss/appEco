import Principal from './src';
import {NativeBaseProvider, StatusBar} from 'native-base'

import { TEMAS } from './src/style/style';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <Principal/>
    </NativeBaseProvider>
  );
}
