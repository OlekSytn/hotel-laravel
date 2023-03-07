@section('styles')
    @parent
    {!! Html::style('assets/reactor/css/select_related.css') !!}
@endsection
{!! field_wrapper_open($options, $name, $errors) !!}

<div class="form-group">
    {!! field_label($showLabel, $options, $name, $errors) !!}

    <div class="form-group__relation"
         data-searchurl="{{ route($options['search_route']) }}"
         data-mode="{{ array_get($options, 'mode', 'single') }}"
         data-filter="{{ array_get($options, 'filter', 'all') }}">
        <ul class="related-items">

            @if($items = call_user_func_array($options['getter_method'],
            array_merge([request()->old($name, null) ?: $options['value']], array_get($options, 'getter_method_params', []))))
                @if(array_get($options, 'mode', 'single') === 'single')
                    <li class="related-item" data-id="{{ $items->getKey() }}">
                        {{ $items->getTitle() }}
                        <i class="fa fa-trash  fa-lg  related-item__close"></i>
                    </li>
                @else
                    @foreach($items as $item)
                        <li class="related-item" data-id="{{ $item->getKey() }}">
                            {{ $item->getTitle() }}
                            <i class="fa fa-trash fa-lg related-item__close"></i>
                        </li>
                    @endforeach
                @endif
            @endif

        </ul>

        <div class="related-search">
            <input type="text" name="_relatedsearch" placeholder="{{ trans('general.search') }}" autocomplete="off" class="form-control">
            <ul class="related-search__results">

            </ul>
        </div>

        {!! Form::hidden($name, request()->old($name, null) ?: $options['value'], $options['attr']) !!}
    </div>
    {!! field_errors($errors, $name) !!}

</div>{!! field_help_block($name, $options) !!}

{!! field_wrapper_close($options) !!}

