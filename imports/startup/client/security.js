import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'
import { FlowRouter } from 'meteor/kadira:flow-router';

Tracker.autorun((computation) => {
  const currentUser = Meteor.user();
  if (!currentUser && !computation.firstRun) {
    FlowRouter.go('home');
  }
});
