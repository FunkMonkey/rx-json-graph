import graphlib from 'graphlib';

/**
 * Creates a `graphlib` graph from the given config
 *
 * @param    {Object}          graphConfig
 * @return   {graphlib.Graph}
 */
export default function toGraph( graphConfig ) {
  const graph = new graphlib.Graph();

  // creating nodes
  graphConfig.nodes.forEach( node => {
    // TODO: retrieve debug information?
    graph.setNode( node.id, node.value );
  } );

  // connecting nodes
  graphConfig.nodes.forEach( node => {
    if ( node.sources ) {
      let edgeIndex = 0;
      node.sources.forEach( sourceName => {
        graph.setEdge( sourceName, node.id, edgeIndex++ );
      } );
    }
  } );

  return graph;
}
