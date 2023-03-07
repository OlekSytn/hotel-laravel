<ul class="list-unstyled">

@if($node->canHaveMoreTranslations())
    <li>
        <a href="{{ route('reactor.nodes.translation.create', $node->getKey()) }}">
            <i class="icon-language"></i>{{ trans('general.add_translation') }}</a>
    </li>
@endif

@if(isset($_edit) && $_edit === true && (count($node->translations) > 1))
    <li>
        {!! delete_form(
            route('reactor.nodes.translation.destroy', $source->getKey()),
            trans('general.destroy_translation'), '', false, 'icon-trash') !!}
    </li>
@endif

@if($node->canHaveChildren())
    <li>
        <a href="{{ route('reactor.nodes.create', $node->getKey()) }}">
            <i class="icon-plus"></i>{{ trans('nodes.add_child') }}</a>
    </li>
@endif

@if( ! $node->isLocked())
    <li class="divider"></li>
    <li>
        <a href="{{ route('reactor.nodes.transform', $node->getKey()) }}">
            <i class="icon-node-transform"></i>{{ trans('nodes.transform') }}</a>
    </li>
    <li>
        <a href="{{ route('reactor.nodes.move', $node->getKey()) }}">
            <i class="icon-node-move"></i>{{ trans('nodes.move') }}</a>
    </li>
@endif

<li class="divider"></li>
<li>{!! node_option_form(
    $node->isPublished() ? route('reactor.nodes.unpublish', $node->getKey()) : route('reactor.nodes.publish', $node->getKey()),
    $node->isPublished() ? 'icon-status-withheld' : 'icon-status-published',
    $node->isPublished() ? 'nodes.unpublish' : 'nodes.publish'
    ) !!}</li>
<li>{!! node_option_form(
    $node->isLocked() ? route('reactor.nodes.unlock', $node->getKey()) : route('reactor.nodes.lock', $node->getKey()),
    $node->isLocked() ? 'icon-status-unlocked' : 'icon-status-locked',
    $node->isLocked() ? 'nodes.unlock' : 'nodes.lock'
    ) !!}</li>
<li>{!! node_option_form(
    $node->isVisible() ? route('reactor.nodes.hide', $node->getKey()) : route('reactor.nodes.show', $node->getKey()),
    $node->isVisible() ? 'icon-status-invisible' : 'icon-status-visible',
    $node->isVisible() ? 'nodes.hide' : 'nodes.show'
    ) !!}</li>

<!-- DELETE -->
<li class="divider"></li>
<li>
    {!! delete_form(
        route('reactor.nodes.destroy', $node->getKey()),
        trans('nodes.destroy')) !!}
</li>

</ul>