if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
      // if ('pushManager' in registration) {
      //   return registerPushManager(registration);
      // }
    })
    .catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

function registerPushManager(registration) {
  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe()
      .then(function(subscription) {
        // The subscription was successful
        isPushEnabled = true;
        console.log(subscription);
      })
  });
}

function showNotification(registration) {
  var options = {
    "body": "Did you make a $1,000,000 purchase at Dr. Evil...",
    "vibrate": [200, 100, 200, 100, 200, 100, 400],
    "tag": "request",
    "actions": [
      { "action": "yes", "title": "Yes"},
      { "action": "no", "title": "No" }
    ]
  };

  registration.showNotification('Welcome to my website', options);
}