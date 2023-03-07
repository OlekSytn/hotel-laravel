{!! content_options_open(null, false) !!}

<li class="dropdown-sub__item">
    <a href="{{ route('reactor.mailings.preview', $mailing->translateOrFirst()->node_name) }}" target="_blank">
        <i class="icon-globe"></i>{{ trans('mailings.preview') }}</a>
</li>

@if($mailing->lists->count() === 1)
    <li class="dropdown-sub__item">
        {!! node_option_form(
            route('reactor.mailings.dispatch', [$mailing->getKey(), $mailing->lists->first()->getKey()]),
            'icon-envelope', 'mailings.dispatch'
        ) !!}
    </li>
@endif

<li class="dropdown-sub__item">
    <a href="{{ route('reactor.mailings.transform', $mailing->getKey()) }}">
        <i class="icon-node-transform"></i>{{ trans('mailings.transform') }}</a>
</li>

<li class="dropdown-sub__item dropdown-sub__item--delete">
    {!! delete_form(
        route('reactor.mailings.destroy', $mailing->getKey()),
        trans('mailings.destroy')) !!}
</li>

{!! content_options_close(false) !!}