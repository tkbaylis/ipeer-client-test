# iPeer v4 Initial UI/UX Recommendations
by UBC CTLT


## Navigation
* __Selected State__: Indicate what section the user is in with a selected state for the main navigation

* __Tab Style__: If navigation is intended to be tab-like, create a more tab-like look and feel (or else remove the line joining left-side and right-side navigation items)

* __Evaluation Events Navigation__: Consider adding a fourth instructor navigation item for evaluation events (this then shows the workflow to users in the navigation: create and populate courses -> create evaluation templates -> create evaluation events)

* __Heading Icons__: Remove iPeer icon from main section headings and replace with section-specific icons to help users quickly identify what main section they are in

* __Headings / Breadcrumbs__: All pages should have consistent headings / breadcrumbs that tell the users where they are in the application; ideally, each page should have smaller breadcrumbs at top and a primary heading that is larger than any sub-headings below it


## Home

### Instructors

* __Collapsed Courses__: If courses were listed by course name only with their details collapsed by default, users could scan the full list faster and expand only what courses they want to see details for (at a minimum, the inactive courses should be collapsed or otherwise accessible but hidden)

* __Course Details__: Do we know if these details are the ones that are most useful for users to see as part of an application overview? How could we surface results here when they are available? These seem like the most important thing for instructors

* __Access to Course__: Indicate more clearly that instructors can access the course from the home page, as it is not apparent that the course name is a link right now

* __Events Column Label__: This label seems unclear, could “Evaluation Events” or something similar be used instead?

* __Short Help__: It’s preferable to not hide the help but rather display these steps contextually to the users as they need them OR put this information at the top of the page in a paragraph; help could also be expanded here to explain the process overall (create course, register students, create evaluation, add event, email reminders of event due date, etc.)

* __Add a Course__: Can users add a course from this page? This may be helpful

#### Students

* __Intro Text__: Add basic intro text to orient users to the application (and link to student-specific help?)

* __Avoid Error Message Styling__: Present overview status messages to users in one combined text area, with text styling and icons to differentiate urgency of the message vs. styling each similar to an error message


* __Combine Similar Statuses__: Consider grouping all work by status (e.g., “Due”, “Submitted”) and not separating by type of work OR separating by type of work within each status category (so reverse of current approach)

* __Add Action Items__: Consider adding a clear action item for those evaluations that invite action (i.e., completing the evaluation or viewing the results) either as a link or button

* __Edit Submitted?__: Are users allowed to edit submitted evaluations? If not, remove the links that allow this action; if so, make this option clear from the home screen (and change submit button to update button)


* __Red Text__: What is the red text supposed to indicate? Again, it is preferable to avoid this colour for non-error situations, so another way to highlight these items would be good

* __Clarify Labels__: What is Due In/Late By? Result Available/End?

* __User-Friendly Dates__: Display all dates/times in a user-friendly format (like the “Due Date” column)

* __Remove Expired__: Can these evaluation events be removed? If there is no action the user can take, these could simply be listed as a note (e.g., “3 evaluations were not completed” or something similar)

* __Remove Outdated__: How long do evaluations remain for each student? Are these removed at some point automatically or available forever?

* __Add Results Available?__: Is there a point at which students can view results? Can any “results available” evaluations be grouped together?

* __Evaluate Peers Form__: Remove unnecessary details; use numbered list for instructions; move distribution button under relevant column; clarify if comments are required or optional


## Courses

* __Remove Tab?__: This page could potentially be scrapped and all actions done through the home page instead, since the courses are listed there as well

* __Filtering__: All filtering/searching options for this page should be visually grouped together to give a better sense of what a user’s options are

* __Total Results__: Total results should appear above the table, as this provides more immediate feedback after a search

* __Course Menu Options__: Forcing users to interact with (click) each course to see their options creates a frustrating and confusing experience, so clearly reveal these on the page in some way (e.g., have an action column with links or drop-down options); there is also no need for redundant options like “Course Home” or “View Record”

* __View Creator__: What is the purpose of “View Creator”? Is this the same as clicking on the username of the creator? What is the use case in which a user would use this?

### Add/Edit Course

* __Labels__: Course -> Subject Code, Instructors -> Instructor(s), Tutors -> Teaching Assistant(s)? Clearly show which fields are required

* __Homepage__: What is the purpose of the homepage field? Does this provide valuable information to the users?

#### Course

* __Details Table__: Details could be presented in list format, since there will not be multiple rows for a single course (unless multiple course sections are sometimes listed here?)

* __Evaluation Events__: Can these be listed and linked instead of counted? This could be put in a new table with more information provided (and with access to any results)

* __Action Sections__: Icons would help distinguish the different action sections

* __“List” Actions__: May be more clear to use “View” or “See”  instead of “List” as the verb here

* __Add Student Form__: Highlight information about the password generation process and move this closer to the save button

* __Import Students / Groups__: Remove boxes around examples and instead highlight the actual import more clearly

* __List Students / Groups / Events / Group Sets__: Reveal action items as links or buttons in the table; consider better consistency between how these tables are displayed vs. other tables (page size filter vs. pagination, placement of search box, colour scheme, etc.)

* __Email Students Form__: Explain what a merge field is or use a different label

* __List Groups / Events__: Are all the filters needed here?

* __Export Groups__: Styling for this page is quite different and inconsistent from other pages, so remove table in form

* __Add Event Form__: Clarify labels (e.g., Event -> Evaluation, Enabled -> Yes, Disabled -> No, Basic -> Show Grades, Detailed -> Show Grades and Comments, Auto-Release Results -> Share Results with Students Automatically, Released -> Available); explain template differences and purpose of the preview

* __Export Results__: Group the checklist items that have one required and label these with “Select one or more:”; change other checklist items to y/n radio buttons

* __Move Students / Group__: What is the use case for these functions? Would these be better grouped under “Students” and “Groups”, respectively?

* __Team Maker__: Explain what team maker is (what benefit it offers the user in creating groups)


## Evaluation

* __Intro Text__: Explain user’s options and next steps here (what are the tools available to me? how do I make and get students to interact with an evaluation?)

* __Evaluation Tools__: Rename tab to match this header, as it better encompasses what the tab provides access to

* __Secondary Navigation__: Differentiate secondary navigation from primary navigation with a different look and feel

* __All Secondary Navigation Pages__: As with the other tables, expose the options to a user for what can be done with each item in the table; explain briefly what each page is for (what user can do)

* __All My Tools__: Rename secondary navigation item as “My Evaluations & Templates” or something similar

* __Red ‘X’ Icons__: Consider another icon (or text) here, as this looks like something with clickable action

* __Blank State__: Provide blank state message for handling when a table is empty

* __Links to All__: Remove or move links to all below each table

* __Add Simple Evaluation Form__: Explain Points Per Member?

* __Add Rubrics Form__: Does everyone understand Level of Mastery? Change Zero Mark to radio buttons with “Level 1 = 1 mark” and “Level 1 = 0 marks”, View Mode -> Rubric Layout, Criteria -> Evaluate Users Side-By-Side, Student -> Evaluate Users One At A Time; indicate what is needed for each text box (labels are generic or missing)

* __Add Mixed Evaluation Form__: Change Zero Mark to radio buttons with “Start at 0” and “Start at 1”, explain Question Type Peer

* __Add Survey Form__: What is the purpose of a template? How can one be created?

* __Add Email Template Form__: Explain merge fields

### Results
* __Layout__: Provide a consistent layout, where results (most important information) are presented first and details presented later (survey results are a good example of this)

* __Exclude Unnecessary Details__: Remove evaluation event details that are not related to results and focus just on results for the results page

* __Remove Unnecessary Links__: Similarly, do not link to pages that do not contain further results information (e.g. profile page), as this could be misleading to users

* __Table Menu Options__: As with all other pages, surface the relevant/primary action items here instead of having them in a hidden menu

* __Bar Graph Style__: If using a bar graph display for results, style these to look substantially different than progress bars

* __Red Text__: Avoid using red text for anything that is not an error; instead, highlight incomplete evaluations in another way (e.g., in place of a dash, simply say “not submitted”)


## Profile
* __Edit Profile__: Re-label tab for username as “Edit Profile”, as this is the page the user is dropped into

* __View Profile__: Is creator, creation date, updated by, and updated date important to list here?

* __Linking to Users__: Many of the usernames seem to return an error for me (related to permissions); is there value in having usernames linked to profile pages? Why would someone want to view another user’s page?


## User Documentation
* __Audience__: Consider splitting help system into two systems: one for students and one for non-students

* __Separate Concepts / Procedures / References__: As is standard for a help system, differentiate and separate out these types of topics (e.g., explain logging in options conceptually and then describe actually logging in with a separate section)

* __Organization__: Reconsider IA for document so it is easier to scan and and use the TOC

* __Contextual Help__: Could help be embedded from the Wiki in the context of the application? At the very least, provide a consistent way to access the help Wiki throughout the application