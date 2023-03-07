<?php

namespace ReactorCMS\Http\Controllers\Traits;


use Illuminate\Http\Request;
use Reactor\Hierarchy\NodeType;

trait UsesNodeTypeForms {

    /**
     * @return \Kris\LaravelFormBuilder\Form
     */
    protected function getCreateForm()
    {
        return $this->form('ReactorCMS\Html\Forms\NodeTypes\CreateForm', [
            'url' => route('reactor.nodetypes.store')
        ]);
    }

    /**
     * @param Request $request
     */
    protected function validateCreateForm(Request $request)
    {
        $this->validateForm('ReactorCMS\Html\Forms\NodeTypes\CreateForm', $request);
    }

    /**
     * @param int $id
     * @param NodeType $nodeType
     * @return \Kris\LaravelFormBuilder\Form
     */
    protected function getEditForm($id, NodeType $nodeType)
    {
        return $this->form('ReactorCMS\Html\Forms\NodeTypes\EditForm', [
            'url'   => route('reactor.nodetypes.update', $id),
            'model' => $nodeType
        ]);
    }

    /**
     * @param Request $request
     */
    protected function validateEditForm(Request $request)
    {
        $this->validateForm('ReactorCMS\Html\Forms\NodeTypes\EditForm', $request);
    }

}