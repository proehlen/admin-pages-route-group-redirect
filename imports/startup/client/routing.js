import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '/imports/ui/admin1.html';
import '/imports/ui/admin2.html';
import '/imports/ui/layout.html';
import '/imports/ui/main.html';
import '/imports/ui/notAuthorized.html';

// Main route
FlowRouter.route('/', {
  name: 'home',
  action: () => {
    BlazeLayout.render('layout', { content: 'main' });
  }
});

// Not authorized
FlowRouter.route('/not-authorized', {
  action: () => {
    BlazeLayout.render('layout', { content: 'notAuthorized' });
  }
});


// Admin routes group
const adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
  triggersEnter: [(context, redirect) => {
    if (!Meteor.user() || Meteor.user().username !== 'admin') {
      redirect('/not-authorized');
    }
  }],

});

// Admin page 1
adminRoutes.route('/1', {
  action: () => {
    BlazeLayout.render('layout', { content: 'admin1' });
  }
});

// Admin page 2
adminRoutes.route('/2', {
  action: () => {
    BlazeLayout.render('layout', { content: 'admin2' });
  }
});
