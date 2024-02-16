import ReactPDF from '@react-pdf/renderer';
import { CvDocument } from '../cv-document.tsx';
import { createElement } from 'react';

ReactPDF.render(createElement(CvDocument), './dist/cv.pdf');