/**
 * jQuery postJSON lib
 *
 * original code by Volker Wieban
 * https://github.com/hpcodecraft/jQuery.postJSON
 *
 * Similar library but it makes JSON data in the POST request and returns
 * JSON data.
 */

(function ($) {
  if ('undefined' === typeof $) {
    throw new Error('jQuery postJSON requires jQuery library');
  }

  if ('undefined' === typeof $.toJSON) {
    throw new Error('jQuery postJSON requires jQuery.JSON library');
  }

  $.postJSON = function(url, data, callback) {
    return jQuery.ajax({
      'type': 'POST',
      'url': url,
      'contentType': 'application/json',
      'data': $.toJSON(data),
      'dataType': 'json',
      'success': callback
    });
  };
}(jQuery));