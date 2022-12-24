import { useEffect, useState } from 'react';
import Folder from './components/Folder';
import explorer from './data/fileData'
import useTraverseTree from './hooks/use-traverse-tree';

function App() {

  const [explorerData, setExplorerData] = useState(explorer);
  const{insertNode} = useTraverseTree();

  const handleInsertNode = (folderId,item,isFolder) =>{
    const finalNode = insertNode(explorerData,folderId,item,isFolder)
    setExplorerData(finalNode)
  }
  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode}  explorer={explorerData}/>
    </div>
  );
}

export default App;
