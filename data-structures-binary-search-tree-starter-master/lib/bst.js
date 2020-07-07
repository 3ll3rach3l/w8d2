class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor(){
       this.root = null;
   }

   insert(val, root = this.root){
       if(this.root === null){   //if the tree is empty, we need to create a new root
           this.root = new TreeNode(val);
           return;
       }

       if(val < root.val){
            if(root.left === null){
                root.left = new TreeNode(val)
            } else {
                this.insert(val, root.left) 
            }
       } else {
           if(root.right === null){
               root.right = new TreeNode(val)
           } else {
               this.insert(val, root.right)
           }
       }
   }

   searchRecur(val, root = this.root){
    if(!root) return false;

    if(val < root.val){
        return this.searchRecur(val, root.left)
    } else if( val > root.val){
        return this.searchRecur(val, root.right)
    } else {
        return true;
    }
   }

   searchIter(val, root = this.root){
       while (root){
           if(val < root.val){
               root = root.left;
           } else if( val > root.val){
               root = root.right
           } else {
               return true;
           }
       }
       return false;
   }
}

module.exports = {
    TreeNode,
    BST
};