import { PDFViewer } from '@react-pdf/renderer';
import { CvDocument } from './cv-document.tsx';

export function App() {
  return (
    <PDFViewer>
      <CvDocument />
    </PDFViewer>
  )
}
