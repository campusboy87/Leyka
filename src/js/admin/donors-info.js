/** Donor's info page */
jQuery(document).ready(function($){

    var $page_wrapper = $('.wrap');
    if( !$page_wrapper.length || $page_wrapper.data('leyka-admin-page-type') !== 'donor-info-page' ) {
        return;
    }

    leyka_support_metaboxes('dashboard_page_leyka_donor_info');

    // Donations list data table:
    if(typeof $().DataTable !== 'undefined' && typeof leyka_dt !== 'undefined') {
        $('.leyka-data-table').DataTable({
            'lengthMenu': [[25, 50, 100, 200], [25, 50, 100, 200]],
            language: {
                processing:     leyka_dt.processing,
                search:         leyka_dt.search,
                lengthMenu:     leyka_dt.lengthMenu,
                info:           leyka_dt.info,
                infoEmpty:      leyka_dt.infoEmpty,
                infoFiltered:   leyka_dt.infoFiltered,
                infoPostFix:    leyka_dt.infoPostFix,
                loadingRecords: leyka_dt.loadingRecords,
                zeroRecords:    leyka_dt.zeroRecords,
                emptyTable:     leyka_dt.emptyTable,
                paginate: {
                    first:    leyka_dt.paginate_first,
                    previous: leyka_dt.paginate_previous,
                    next:     leyka_dt.paginate_next,
                    last:     leyka_dt.paginate_last
                },
                aria: {
                    sortAscending:  leyka_dt.aria_sortAsc,
                    sortDescending: leyka_dt.aria_sortDesc
                }
            }
        });
    }

});
