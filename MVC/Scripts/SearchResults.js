$(document).ready(function () {
    $('#searchForm').submit(function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        var url = $(this).attr('action');
        alert("ajax");
        $('#searchResults').empty();
        $.post(url, data, function (response) {
            $('#searchResults').append(response);
        });
    });
});