<?php

namespace ReactorCMS\Html\Builders;


class ContentsHtmlBuilder {

    /**
     * Snippet for outputting opening of content tables
     *
     * @param bool $sub
     * @param string|null $wrapper
     * @return string
     */
    public function contentTableOpen($sub = false, $wrapper = null)
    {
        if ($sub && is_null($wrapper))
        {
            $wrapper = '<div class="content-list-container content-list-container--sub">';
        }

        $thumbnail = ($sub) ? '' : '<th class="content-list__cell content-list__cell--head"></th>';

        return sprintf('%s<table class="content-list">
            <thead class="content-header">
                <tr class="content-list__row">%s',
            $wrapper, $thumbnail);
    }

    /**
     * Snippet for outputting middle parts of content tables
     *
     * @return string
     */
    public function contentTableMiddle()
    {
        return '<th class="content-list__cell content-list__cell--head"></th>
            </tr>
        </thead>
        <tbody class="content-body">';
    }

    /**
     * Snippet for outputting closing of content tables
     *
     * @param bool $sub
     * @param string|null $wrapper
     * @return string
     */
    public function contentTableClose($sub = false, $wrapper = null)
    {
        if ($sub and is_null($wrapper))
        {
            $wrapper = '</div>';
        }

        return sprintf('</tbody></table>%s', $wrapper);
    }

    /**
     * Snippet for displaying the selection/thumbnail column
     *
     * @param int $id
     * @param string $thumbnail
     * @return string
     */
    public function contentListThumbnail($id, $thumbnail = '')
    {
        if ( ! empty($thumbnail))
        {
            $thumbnail = '<div class="content-list__thumbnail">' . $thumbnail . '</div>';
        }

        return '<td class="content-list__cell content-list__cell--thumbnail">' .
            \Form::checkbox('selected[]', $id, false, ['class' => 'content-list__checkbox']) .
            $thumbnail . '</td>';
    }

    /**
     * Snippet for displaying content options opening
     *
     * @param $header
     * @param bool $table
     * @return string
     */
    public function contentOptionsOpen($header = null, $table = true)
    {
        return sprintf('%s
            <div class="has-dropdown">
                <i class="dropdown-icon icon-ellipsis-vertical"></i>
                <div class="dropdown">
                    %s
                    <ul class="dropdown-sub">',
            $table ? '<td class="content-list__cell content-list__cell--options">' : '',
            $header ?: '<div class="dropdown__info">' . uppercase(trans('general.options')) . '</div>');
    }

    /**
     * Snippet for displaying content options closing
     *
     * @param bool $table
     * @return string
     */
    public function contentOptionsClose($table = true)
    {
        return '</ul></div></div>' . (($table) ? '</td>' : '');
    }

    /**
     * Snippet for displaying standard content options
     *
     * @param string $key
     * @param int $id
     * @return string
     */
    public function contentOptions($key, $id)
    {
        $html = '<div class="btn-group">
                        <button type="button" class="btn btn-xs" data-toggle="dropdown">
                            <i class="fa fa-bars"></i>
                        </button>
                        <ul class="dropdown-menu pull-right" role="menu">
                            <li>
                                <a href="' . route('reactor.' . $key . '.edit', $id) . '"><i class="fa fa-ellipsis-v "></i>' . trans($key .'.edit') .'</a>;
                            </li>
                            <li>' .
                                delete_form(
                                    route('reactor.' . $key . '.destroy', $id),
                                    trans($key . '.destroy')) .
                            '</li>
                        </ul>
                   </div>';

        return $html;
    }

    /**
     * Snippet for displaying header action opening
     *
     * @param string $text
     * @param string $class
     * @param bool $secondary
     * @return string
     */
    public function headerActionOpen($text, $class = "header__action--left", $secondary = false)
    {
        return sprintf('<div class="header__action %s %s">
            <div class="header__action-header">%s</div>
            <div class="header__action-options">',
            $class,
            $secondary ? 'header__action--secondary' : '',
            uppercase(trans($text)));
    }

    /**
     * Snippet for displaying header action closing
     *
     * @return string
     */
    public function headerActionClose()
    {
        return '</div></div>';
    }

    /**
     * Snippet for displaying no results row on tables
     *
     * @param string $message
     * @return string
     */
    public function noResultsRow($message = 'general.search_no_results')
    {
        return '<h4 class="text-center" style="padding: 25px 0">'
            . trans($message) .
        '</h4>';
    }

    /**
     * Snippet for generating back links (mainly for search pages)
     *
     * @param string $key
     * @return string
     */
    public function backToAllLink($key)
    {
        return action_button(route('reactor.' . $key . '.index'), 'icon-arrow-left', trans($key . '.all'), 'button--emphasis', 'l');
    }

}