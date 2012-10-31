var listIds, listClasses, x;

var getFreq = function (list) {
    var freqs = {};
    $.each(list, function(i, v) {
      if (freqs[v]) {
        freqs[v]++;
      } else {
        freqs[v] = 1;
      }
    });
    return freqs;    
};

var sortList = function (list) {
    var sortedList = [];
    for (var i in list) {
        if (i) {
            sortedList.push('<td>' + (!x ? '#' : '.') + i + '</td><td>' + list[i] + '</td>');
        }
    }
    x++;
    return sortedList.sort();
};

var completeTab = function (list) {
    $.each(list, function (i, v) {
        $('table').append('<tr>' + v + '</tr>'); 
    });      
};

$(function () {

	$('button').click(function () {
		listIds = [], listClasses = [], x = 0;

		$('table').remove();
	    $('#code').empty().append($('input').val()).find('*').each(function () {
	        if ($(this).attr('id')) {
	            listIds.push($(this).attr('id')); 
	        }
	        if ($(this).attr('class')) {
	            var classes = $(this).attr('class').split(' ');
	    
	            for (var i = 0; i < classes.length; i++) {
	              listClasses.push(classes[i]);
	            }
	        }
	    });

	    if (listIds[0] || listClasses[0]) {
	        $('body').append('<table></table>');
	        completeTab(sortList(getFreq(listIds)));
	        completeTab(sortList(getFreq(listClasses)));        
	    }

	    $('tr:even').addClass('even');
    	$('tr:odd').addClass('odd');
	});

});