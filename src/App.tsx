import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from './document.tsx';

function App() {
  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  )
}

export default App
