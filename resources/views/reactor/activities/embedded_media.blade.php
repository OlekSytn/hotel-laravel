{!! activity_open($activity, false, ($subject = $activity->subject) ? $subject->present()->thumbnail : '') !!}

{!! trans('activities.embedded_media', [
    'actorLink' => route('reactor.users.edit', $activity->user->getKey()),
    'actorName' => $activity->user->first_name,
    'subjectLink' => route('reactor.documents.edit', $activity->subject_id)
]) !!}

{!! activity_close() !!}