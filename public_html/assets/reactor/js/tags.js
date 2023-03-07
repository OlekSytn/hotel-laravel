!function (t) {
    "use strict";
    function a(t) {
        this.el = t, this._init()
    }

    inheritsFrom(a, Searcher), a.prototype._init = function () {
        this.nodeid = this.el.data("nodeid"), this.storeurl = this.el.data("storeurl"), this.attachurl = this.el.data("attachurl"), this.detachurl = this.el.data("detachurl"), this.locale = this.el.data("locale"), this.tagsList = this.el.find("ul.tags-list"), this.tags = this.el.find("li.tag"), this.initSearcher(), this._initEvents()
    }, a.prototype._extractItems = function () {
        this.itemKeys = this.tags.map(function () {
            return $(this).data("tagid")
        }).get()
    }, a.prototype._initEvents = function () {
        var t = this;
        this.tagsList.on("click", ".tag__option--detach", function () {
            var a = $(this).closest("li.tag");
            a.hasClass("tag--disabled") || (a.addClass("tag--disabled"), t._detachTag(a))
        })
    }, a.prototype._searchPressReturn = function (a) {
        if ("" != a) {
            var e = $('<li class="tag tag--disabled tag--placeholder"></li>').appendTo(this.tagsList), s = this;
            $.post(this.storeurl, {title: a}, function (a) {
                if ("success" === a.type && s.itemKeys.indexOf(parseInt(a.tag.id)) == -1) {
                    var i = s._createTag(a.tag.id, a.tag.title, a.tag.translatable, a.tag.editurl, a.tag.translateurl);
                    return e.replaceWith(i), i.removeClass("tag--disabled"), void s._finishAddingTag(a.tag.id, i)
                }
                s._clearSearch(), e.remove(), t.flash.addMessage(a.message, a.type)
            })
        }
    }, a.prototype._search = function (t) {
        var a = this;
        a.searching || $.post(this.searchurl, {q: t, locale: a.locale}, function (t) {
            a._populateResults(t)
        })
    }, a.prototype._addResult = function (t, a) {
        return $('<li class="related-search__result" data-translatable="' + a.translatable + '" data-editurl="' + a.editurl + '"data-translateurl="' + a.translateurl + '">' + a.title + '<input class="related-search__input" type="text" value="' + t + '"></li>')
    }, a.prototype._addItem = function (t) {
        var a = parseInt(t.find("input").val()), e = this._createTag(a, t.text(), t.data("translatable"), t.data("editurl"), t.data("translateurl"));
        this._attachTag(e), this._finishAddingTag(a, e)
    }, a.prototype._finishAddingTag = function (t, a) {
        this.tagsList.append(a), this.itemKeys.push(t), this._clearSearch(), this.search.focus()
    }, a.prototype._createTag = function (t, a, e, s, i) {
        var n = $('<li class="tag tag--disabled" data-tagid="' + t + '"><span class="tag__option tag__option--detach"><i class="tag__icon fa fa-remove"></i></span></li>');
        return $('<span class="tag__text"><a href="' + s + '" target="_blank">' + a + "</a></span>").prependTo(n), e === !0 && $('<span class="tag__option"><a href="' + i + '" target="_blank"><i class="tag__icon fa fa-pencil"></i></a></span>').appendTo(n), n
    }, a.prototype._attachTag = function (a) {
        $.post(this.attachurl, {tagid: a.data("tagid")}, function (e) {
            "success" === e.type ? a.removeClass("tag--disabled") : (a.remove(), t.flash.addMessage(e.message, e.type))
        })
    }, a.prototype._detachTag = function (a) {
        var e = a.data("tagid"), s = this;
        $.post(this.detachurl, {tagid: e}, function (i) {
            if ("success" === i.type) {
                var n = s.itemKeys.indexOf(e);
                delete s.itemKeys[n], a.remove()
            } else a.removeClass("tag--disabled"), t.flash.addMessage(i.message, i.type)
        })
    }, t.Tags = a
}(window), $(function () {
    return new Tags($("#nodesTags"))
});