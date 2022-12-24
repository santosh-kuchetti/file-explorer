import React from 'react'

const useTraverseTree = () => {
  function insertNode (tree,folderId,item,isFolder){
    if(tree.id == folderId && tree.isFolder){  // this is forthe root node. when the root node id and the folder id is same
        tree.items.unshift({
            id:new Date().getTime(),
            name:item,
            isFolder,
            items:[]
        })
        return tree       //  we are returning the tree
    }
    // when the folder id is not same as root id, then we need to go search for which item id matches our folder id
    let latestNode = [];
    latestNode = tree.items.map(ob => {            // looping into the items of the root calling the same above function recursively
        return insertNode(ob,folderId,item,isFolder)            //  but it gives us now just items. but no the root values involved
    })
    return {...tree, items:latestNode}        // we are including the root values here and returning whole tree now. and thats it.
  }

  return {insertNode}
}

export default useTraverseTree