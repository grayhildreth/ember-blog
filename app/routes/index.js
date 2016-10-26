import Ember from 'ember';

var events = [{
  band: "The Growlers",
  city: "Santa Cruz, CA",
  venue: "The Catalyst",
  date: "Feb. 13th, 2016",
  image: "http://cdn.ticketfly.com/i/00/01/83/18/37-atxl.jpg"
}, {
  band: "Vulfpeck",
  city: "Seattle, WA",
  venue: "Showbox",
  date: "Jan. 5th, 2016",
  image: "http://www.electricfactory.info/Media/Default/Images/Performers/vulfpeck-out-artwork_vice_970x435.jpg"
}, {
  band: "Black Lips",
  city: "Portland OR",
  venue: "Doug Fir",
  date: "Oct. 31st, 2016",
  image: "https://cdn.pastemagazine.com/www/articles/TheBlackLipsMain.jpg"
}, {
  band: "The Misfits",
  city: "Chicago, IL",
  venue: "Observatory Park",
  date: "July 4th, 2016",
  image: "https://rawkandrolljunkie.files.wordpress.com/2015/01/misfits-cover.jpg"
}, {
  band: "Black Star",
  city: "Beijing, China",
  venue: "Wukesong Arena",
  date: "May 5th, 2016",
  image: "https://images.genius.com/66c08b8a30a81fe490edbde8c7342109.629x406x1.jpg"
}];

export default Ember.Route.extend({
  model() {
    return events;
  },
});
