import {NativeBaseProvider, StatusBar} from 'native-base'

import { TEMAS } from './src/style/style';
import Rotas from './src/rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <Rotas/>
    </NativeBaseProvider>
  );
}
