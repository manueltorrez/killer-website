

let waypoint = new Waypoint({
    element: document.querySelector('.js--section-features'),
    handler: function(direction) {
        if(direction === 'down') {
            document.querySelector('nav').classList.add('sticky')
            console.log('Basic waypoint triggered');
        } else {
            document.querySelector('nav').classList.remove('sticky');
        }
    },
    offset: 60
  })