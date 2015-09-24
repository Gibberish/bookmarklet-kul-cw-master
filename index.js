(function(){
/* 
 * USAGE:
 *
 * Pas het script aan zodat de variable `courses` al de vakcodes bevat van de vakken die ge volgt. 
 * Een aantal algemene vakken zijn al toegekend aan variabelen, pull requests welkom voor anderen.
 * Kopieer de inhoud van het scriptje en voeg er `javascript: ` vanvoor aan toe en plak dat dan als de url van een bookmark.
 * Ga naar de uurrooster pagina en klik op de bookmark om enkel de lessen die voor jou van toepassing zijn te zien.
 * 
 * By: Jens Claes
*/

/* Bachelor Verbredend Pakket ingenieurs */
var BS = 'H04G1B'; /* Besturingssystemen */
var DECL = 'H0N03A'; /* Studie van declaratieve talen (H04H5B) */
var OSS = 'H0N00A'; /* Ontwerp van softwaresystemen (H04J9B) */
var FUND = 'H04H0B'; /* Fundamenten voor de computerwetenschappen */
var ENG = [BS,DECL,OSS,FUND];

/* Verplicht deel */
var DIST = 'H0N08A'; /* Distributed Systems (H04I4A) */
var MODEL = 'H0N05A'; /* Modelling of complex systems (G0B23A) */
var SWARCH = 'H09B5A'; /* Software architectuur */
var VERPLICHT = [DIST,MODEL,SWARCH];

/* AI */
var ML = 'H02C1A'; /* Machine Learning and Inductive Inference */

var courses = VERPLICHT.concat(ENG).concat([ML]);

Array.prototype.forEach.call(document.getElementsByTagName('a'), function( link ){
  var hide = true;
  courses.forEach(function(course){
    if(link.href.indexOf(course) != -1)
      hide = false;
  });
  if(hide)
    link.parentNode.parentNode.style.display = "none";
});
})();
