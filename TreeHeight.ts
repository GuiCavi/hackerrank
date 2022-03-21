class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T, left: TreeNode<T> | null = null, right: TreeNode<T> | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree<T> {
  root: TreeNode<T> | null = null;
  height: number = 0;

  private createNode(value: T) {
    return new TreeNode<T>(value);
  }

  add(value: T) {
    const newNode = this.createNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    this.addNode(newNode);
    this.height = this.calculateHeight(this.root)
  }

  levelOrder(node: TreeNode<T> | null = this.root) {
    if (!node) return [];

    const levels: { value: T, level: number }[] = [];

    const traverse = (node: TreeNode<T>, level: number) => {
      if (!node) return;

      levels.push({ value: node.value, level });
      if (node.left) traverse(node.left, level + 1);
      if (node.right) traverse(node.right, level + 1);
    }

    traverse(this.root as TreeNode<T>, 0);

    return levels.sort((a, b) => a.level - b.level).map(a => a.value).join(' ');
  }

  depthOrder(node: TreeNode<T> | null = this.root) {
    if (!node) return;

    const result: T[] = [];

    const traverse = (node: TreeNode<T>) => {
      if (!node) return;

      result.push(node.value);
      traverse(node.left!);
      traverse(node.right!);
    }
    traverse(this.root as TreeNode<T>);

    return result.join(' ');
  }

  private addNode(newNode: TreeNode<T>) {
    const traverse = (node: TreeNode<T>) => {
      if (newNode.value < node.value) {
        if (!node.left) node.left = newNode;
        else traverse(node.left);
      } else if (newNode.value > node.value) {
        if (!node.right) node.right = newNode;
        else traverse(node.right);
      }
    }

    traverse(this.root as TreeNode<T>);
  }

  private calculateHeight(node: TreeNode<T> | null): number {
    if (!node) return -1;

    const lh = this.calculateHeight(node.left);
    const rh = this.calculateHeight(node.right);

    return Math.max(lh, rh) + 1;
  }
}

function main() {
  const tree = new Tree<number>();

  const values = ['15', '1 14 3 7 4 5 15 6 13 10 11 2 12 8 9'][1].split(' ');
  // const values = ['15', '3 2 1 5 4 6 8'][1].split(' ');

  values.forEach(value => tree.add(parseInt(value)));
  // console.log(JSON.stringify(tree, null, 2))
  console.log(tree.levelOrder())
}

main();

// 1 14 3 15 2 7 4 13 5 10 6 8 11 9 12
// 1 14 3 15 2 7 4 13 5 10 6 8 11 9 12 
