<?php


namespace ReactorCMS\Http\Controllers;


use ReactorCMS\Support\Update\ExtractionService;
use ReactorCMS\Support\Update\UpdateService;

class UpdateController extends ReactorController
{

    /**
     * Shows the updates page
     *
     * @param UpdateService $updater
     * @return view
     */
    public function index(UpdateService $updater)
    {
        $latest = $updater->getLatestRelease();

        return $this->compileView('update.index', compact('updater', 'latest'));
    }

    /**
     * Show the update start page
     *
     * @param UpdateService $updater
     * @return Response
     */
    public function start(UpdateService $updater)
    {
        if ($updater->isNuclearCurrent()) {
            flash()->error(trans('update.no_need_to_update'));

            return redirect()->route('reactor.update.index');
        }

        $updater->reset();

        $latest = $updater->getLatestRelease();

        return $this->compileView('update.start', compact('updater', 'latest'), trans('update.auto_update'));
    }

    /**
     * Downloads the latest update
     *
     * @param UpdateService $updater
     * @return Response
     */
    public function download(UpdateService $updater)
    {
        if ($updater->isNuclearCurrent()) {
            abort(500, trans('update.no_need_to_update'));
        }

        $fileName = $updater->downloadLatest();

        if ($fileName !== false) {
            session()->put('_temporary_update_path', $fileName);

            return response()->json([
                'message' => trans('update.extracting_update'),
                'next' => route('reactor.update.extract'),
                'progress' => 45
            ]);
        }

        return response()->json([
            'message' => trans('update.downloading_latest'),
            'next' => route('reactor.update.download'),
            'progress' => 3 + (session('_update_download_offset', 0) * 6)
        ]);
    }

    /**
     * Extracts the update
     *
     * @param UpdateService $updater
     * @param ExtractionService $extractor
     * @return Response
     */
    public function extract(UpdateService $updater, ExtractionService $extractor)
    {
        $path = session('_temporary_update_path');

        if (empty($path)) {
            abort(500, trans('update.no_update_found'));
        }

        $extractedPath = $updater->extractUpdate(
            session('_temporary_update_path'), $extractor
        );

        session()->put('_extracted_update_path', $extractedPath);

        return response()->json([
            'message' => trans('update.moving_files', ['part' => 1]),
            'next' => route('reactor.update.empty'),
            'progress' => 60
        ]);
    }

    /**
     * Empties the trash
     *
     * @param ExtractionService $extractor
     * @return Response
     */
    public function emptyTrash(ExtractionService $extractor)
    {
        $extractor->emptyTrash($extractor);

        return response()->json([
            'message' => trans('update.moving_files', ['part' => 2]),
            'next' => route('reactor.update.move.vendor'),
            'progress' => 70
        ]);
    }

    /**
     * Moves the extracted update files
     *
     * @param UpdateService $updater
     * @param ExtractionService $extractor
     * @return Response
     */
    public function moveVendor(UpdateService $updater, ExtractionService $extractor)
    {
        $path = session('_extracted_update_path');

        if (empty($path)) {
            abort(500, trans('update.extracted_files_not_found'));
        }

        $updater->moveVendor($path, $extractor);

        return response()->json([
            'message' => trans('update.moving_files', ['part' => 3]),
            'next' => route('reactor.update.move'),
            'progress' => 80
        ]);
    }

    /**
     * Moves the extracted update files
     *
     * @param UpdateService $updater
     * @param ExtractionService $extractor
     * @return Response
     */
    public function move(UpdateService $updater, ExtractionService $extractor)
    {
        $path = session('_extracted_update_path');

        if (empty($path)) {
            abort(500, trans('update.extracted_files_not_found'));
        }

        $updater->moveUpdate($path, $extractor);

        return response()->json([
            'message' => trans('update.finalizing_update'),
            'next' => route('reactor.update.finalize'),
            'progress' => 90
        ]);
    }

    /**
     * Extracts the update
     *
     * @param UpdateService $updater
     * @return Response
     */
    public function finalize(UpdateService $updater)
    {
        $updater->finalizeUpdate();

        return response()->json([
            'message' => trans('update.update_complete'),
            'next' => null,
            'progress' => 100
        ]);
    }

}