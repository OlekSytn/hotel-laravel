<?php


namespace ReactorCMS\Http\Controllers;


use Illuminate\Http\Request;
use Reactor\Hierarchy\MailingNode;
use Reactor\Hierarchy\Node;
use Reactor\Hierarchy\NodeType;
use Reactor\Hierarchy\Repositories\NodeTypeRepository;
use ReactorCMS\Http\Controllers\Traits\UsesNodeTypeForms;
use ReactorCMS\Http\Controllers\Traits\BasicResource;
use ReactorCMS\Hierarchy\Builders\BuilderService;

class NodeTypesController extends ReactorController {

    use BasicResource, UsesNodeTypeForms;

    /**
     * Names for the BasicResource trait
     *
     * @var string
     */
    protected $modelPath = NodeType::class;
    protected $resourceMultiple = 'nodetypes';
    protected $resourceSingular = 'nodetype';
    protected $permissionKey = 'NODETYPES';
    protected $buidservice = BuilderService::class;

    /**
     * Store a newly created resource in storage.
     *
     * @param NodeTypeRepository $nodeTypeRepository
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(NodeTypeRepository $nodeTypeRepository, Request $request)
    {
        $this->authorize('EDIT_NODETYPES');

        $this->validateCreateForm($request);

        $nodeType = $nodeTypeRepository->create($request->all());

        $this->notify('nodetypes.created');

        return redirect()->route('reactor.nodetypes.edit', $nodeType->getKey());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param NodeTypeRepository $nodeTypeRepository
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(NodeTypeRepository $nodeTypeRepository, $id)
    {

        $this->authorize('EDIT_NODETYPES');

        $nodeTypeRepository->destroy($id);

        $this->notify('nodetypes.destroyed');

        return redirect()->route('reactor.nodetypes.index');
    }

    /**
     * Remove the specified resources from storage.
     *
     * @param NodeTypeRepository $nodeTypeRepository
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function bulkDestroy(NodeTypeRepository $nodeTypeRepository, Request $request)
    {
        $this->authorize('EDIT_NODETYPES');

        $ids = json_decode($request->input('_bulkSelected', '[]'));

        foreach ($ids as $id)
        {
            $nodeTypeRepository->destroy($id);
        }

        $this->notify('nodetypes.destroyed');

        return redirect()->route('reactor.nodetypes.index');
    }

    /**
     * Searches nodetypes intended for nodes
     *
     * @param Request $request
     * @return Response
     */
    public function searchTypeNodes(Request $request)
    {
        
        $nodeTypes = NodeType::forNodes()
            ->search($request->input('q'), 20, true)
            ->limit(10)->get();

        return response()->json(
            $nodeTypes->pluck('label', 'id')->toArray()
        );
    }

    /**
     * List the specified resource fields.
     *
     * @param int $id
     * @return Response
     */
    public function fields($id)
    {
        $this->authorize('EDIT_NODETYPES');

        $nodetype = NodeType::findOrFail($id);

        return $this->compileView('nodetypes.fields', compact('nodetype'));
    }

    /**
     * List the specified resource fields.
     *
     * @param int $id
     * @return Response
     */
    public function nodes($id)
    {
        $this->authorize('ACCESS_NODES');

        $nodetype = NodeType::findOrFail($id);

        $modelName = $nodetype->isTypeMailing() ? MailingNode::class : Node::class;

        $nodes = $modelName::where('node_type_id', $nodetype->getKey())
            ->sortable()->paginate();

        return $this->compileView('nodetypes.nodes', compact('nodetype', 'nodes'), trans('nodes.title'));
    }

}