import $ from 'jquery';
// Firebase App (the core Firebase SDK)
// is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB5OjDcTfGS7VbwvCuYH19CgCz2EvxPSA8',
  authDomain: 'the-time-track.firebaseapp.com',
  databaseURL: 'https://the-time-track.firebaseio.com',
  projectId: 'the-time-track',
  storageBucket: 'the-time-track.appspot.com',
  messagingSenderId: '1008128918952',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Subscribe = {
  onError: function() {
    $('.feedback').remove();
     const $message = '<aside class="feedback error text-center pl-2 pr-2">\n' +
       '\t\t\t\tOh snap, something wrong happened, please try again later\n' +
       '\t\t\t</aside>';

    $('#form-wrap').prepend($message);
  },
  onSuccess: function() {
    $('.feedback').remove();
    const $message = '<aside class="feedback success text-center ' +
      'pl-2 pr-2">\n' +
      '\t\t\t\tYeah, you did it!\n' + '<a href="/personal-time-tracker-download" class="feedback success">Download The Track Now!</a>'+
      '\t\t\t</aside>';
    $('#form-wrap').prepend($message);
    sessionStorage.setItem('isSubscribed', JSON.stringify(true));
  },
  onFormSubmit: function() {
    if ( sessionStorage.isSubscribed == 'true' ) {
      this.onSuccess();
      return false;
    }
    this.saveEmail().then(this.onSuccess).catch(this.onError);
  },
  formListener: function() {
    const that = this;
    // $('#subscribeEmail').on('keypress', function(e) {
    //   if (e.which == 13) {
    //     that.onFormSubmit();
    //   }
    // });

    $('#subscribeButton').on('click', function(e) {
      e.preventDefault();
      that.onFormSubmit();
    });

    $('#subscribeForm').on('submit', function(e) {
      e.preventDefault();
      that.onFormSubmit();
    });
  },
  getEmailValue: function() {
    return $('#subscribeEmail').val();
  },
  saveEmail: function() {
    return firebase.firestore()
            .collection('emails')
            .add( {email: this.getEmailValue(), source: window.location.href} );
  },
  init: function() {
    this.formListener();
  },
};

Subscribe.init();
