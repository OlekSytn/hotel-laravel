{!! activity_open($activity) !!}

{!! __('activities.deleted_permission', [
    'actorLink' => route('reactor.users.edit', $activity->user->getKey()),
    'actorName' => $activity->user->first_name
]) !!}

{!! activity_close() !!}