# Demonstrate problem with preventing access to Admin route group
1. Clone repot, run ```meteor```

2. Sign-in with user ```admin@admin.admin```, password ```admin```.

3. Click ```Admin 1``` link to navigate to admin page

4. Bookmark page

5. Click link from bookmark and it will incorrectly redirect to not authorized page because Meteor.user() isn't available when the trigger runs.
