
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express with NODE!' });
};

exports.about = function(req, res){
  res.render('about', { title: 'About with NODE!' });
};

exports.contact = function(req, res){
  res.render('contact', { title: 'Contact with NODE!' });
};