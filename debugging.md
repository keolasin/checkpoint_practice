Open your browser. Open up Chrome DevTools. Click on the Network tab on DevTools. Go to your bloc dashboard page. What Request Urls is Bloc using to get your information from the API?

1. For the dashboard page, the most obvious information pertaining to me would be my upcoming sessions (currently no upcoming checkpoints or revisions requested) - the request URL is: (https://www.bloc.io/api/v1/users/matthew-reyes-2/upcoming_sessions?limit=3) through an XHR file. The HTML page for me is through (https://www.bloc.io/student_dashboard/matthew-reyes-2). We can also see the scripts being requested for the page, as well as some image files, and a few stylesheets and fonts.


2. Cookies can be found in the 'Application' tab, and in the left-most field, there is a drop-down menu option of 'Cookies': here we can find the cookies being used on the current webpage.

3. We can execute javascript in the Sources tab, which will show us the navigation window on left, a code editor in the middle, and on the right, a debugging window where we can choose breakpoints, see what is in scope currently, what's on the call stack, and 'watch' certain expressions, like certain values over time (those values as we move through the code).

4. If we open the DevTools and go to the 'Elements' tab, depending on which element we select in the left window, we can see the styles applied to that element in the right window under 'Styles'. Similarly, we can see a box-model of the element in the 'Computed' section and the applied CSS below. We can edit those CSS properties and they will be reflected on the webpage.

5. If we refresh the page, the code we have altered in DevTools will revert back to the original code - we would have to alter the source file and save it appropriately for it to be rendered every time.

6. If we go to the 'Sources' tab, the right most window will allow us to add *breakpoints*, which allow us to cycle through the code and stop at certain lines or parts of interest. There is a button we can toggle, 'Activate/deactivate breakpoints' that when on, we can then click on the desired numeric line of code and add a breakpoint. There are also several sections in the right-most window for different types of breakpoints, and we can then select/filter breakpoints depending on certain functions or event listeners.
