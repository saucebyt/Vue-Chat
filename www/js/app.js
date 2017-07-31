(function () {

  let states = {};

  function init () {
    Vue.use(Framework7Vue)

    Vue.component('page-chat', {
      template: '#page-chat',
      data: function () {
        return states;
      },
      methods: {
        onSend: function (text, clear) {
          if (text.trim().length === 0) return;
          // TODO
          if (typeof clear === 'function') clear();
        }
      }
    })

    new Vue({
      el: '#app',
      data: function () {
        return states;
      },
      methods: {
        enterChat: function () {
          // TODO
        }
      },
      framework7: {
        root: '#app',
        /* Uncomment to enable Material theme for Android (MUST SWITCH CSS FILES) : */
        // material: true,
        routes: [
          {
            path: '/chat/',
            component: 'page-chat'
          }
        ],
      }
    });
  }

  // Note: You may want to check out the vue-cordova package on npm for cordova specific handling with vue - https://www.npmjs.com/package/vue-cordova
  document.addEventListener('deviceready', init, false)

})();
