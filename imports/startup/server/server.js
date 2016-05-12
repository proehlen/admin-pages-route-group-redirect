import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
  // Add admin user if not already added
  if (!Meteor.users.find().count()) {
    const user = {
        username: 'admin',
        email: 'admin@admin.admin',
        password: 'admin'
    };

    // create user and store user id
    Accounts.createUser(user);
  }
});
