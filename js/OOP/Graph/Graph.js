// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.

class Node {
    //     public val;
    //     public neighbors;
  }
  
  // input single node eg. 8 => clone 8
  
  const cloneGraph = node => {
    const map = new Map();
  
    helper(node, map);
  
    return map.get(node);
  };
  
  const helper = (node, map) => {
    if (map.has(node)) return;
  
    const cloned = new Node(node.val, []);
  
    map.set(node, cloned);
  
    const { neighbors } = node;
  
    neighbors.forEach(neighbor => {
      helper(neighbor, map);
      cloned.neighbors.push(map.get(node));
    });
  };
  