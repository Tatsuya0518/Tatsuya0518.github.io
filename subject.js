$(function() {
  var words = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme",
    ];
    $( "#keyword" ).autocomplete({
      source: function(request, response) {
        var list = [];
        list = words.filter(function (word) {
          return word.indexOf(request.term) === 0 || word.toLowerCase().indexOf(request.term) === 0;
        });
        response(list);
      },
    });
});
