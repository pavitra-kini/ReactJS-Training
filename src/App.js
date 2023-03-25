import { useState } from 'react';
import './App.css';
import Assignment1 from './component/Assignment1';
import Assignment2 from './component/Assignment2';
import Assignment3 from './component/Assignment3';
import Assignment4 from './component/Assignment4';
import Pages from './component/Pages';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <div className="container p-4">
      <Pages pageNumber={pageNumber} setPageNumber={setPageNumber} />
      {pageNumber === 1 && <Assignment1 />}
      {pageNumber === 2 && <Assignment2 />}
      {pageNumber === 3 && <Assignment3 />}
      {pageNumber === 4 && <Assignment4 />}
    </div>
  );
}

export default App;
