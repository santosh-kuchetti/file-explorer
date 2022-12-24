import React, { useState } from 'react'
import '../Styles.css'
const Folder = ({explorer,handleInsertNode}) => {
  const [expand, setExpand] = useState(false);
  const[showInput,setShowInput] = useState({
    visible:false,
    isFolder:null
  })

  const handlePropagation = (e,isFolder) => {
    e.stopPropagation();
    setExpand(true)
    setShowInput({
        visible:true,
        isFolder
    })
  }

  const onAddFolder = (e) =>{
    if(e.keyCode == 13 && e.target.value){
        // adding data
        handleInsertNode(explorer.id,e.target.value,showInput.isFolder)
        setShowInput({...showInput,visible:false})
    }

  }



  

  if (explorer.isFolder) {
    return (
      <div style={{ margin: "5px" }}>
        <div onClick={()=>setExpand(!expand)} className='folder'>
          <span>📁 {explorer.name}</span>
          <div>
            <button style={{marginRight:'5px',backgroundColor:'rgb(151, 146, 146)'}} onClick={(e) => handlePropagation(e,true)}>📁 +</button>
            <button style={{backgroundColor:'rgb(151, 146, 146)'}} onClick={(e) => handlePropagation(e,false)}>📄 +</button>
          </div>
        </div>
        <div style={{display: expand?'block':'none', paddingLeft:25}}>
            {
                showInput.visible && (
                    <div>
                        <span>{showInput.isFolder ? '📁':'📄'}</span>
                        <input type='text' autoFocus onKeyDown={(e) => onAddFolder(e)} onBlur={()=> setShowInput({...showInput,visible:false})}/>
                    </div>
                )
            }
          {explorer.items.map((item) => (
            <Folder handleInsertNode={handleInsertNode} explorer={item} key={item.id}/>
          ))}
        </div>
      </div>
    );
  } else {
    return <span className='file'>📄 {explorer.name}</span>;
  }
}

export default Folder