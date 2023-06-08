# Bugs

First, there's a bug in the implementation. See if you can fix it:

## Subsequent item is "checked" incorrectly when item is deleted

Steps to reproduce:
1. add three items to the list
2. click the second item in the list to "complete" it
3. delete the completed item

Expected result:
Two items remain, neither is completed

Actual result:
Two items remain, one of them is completed

# New features

Next; pick one of these and we will implement it together!

## Persist the list across sessions

When I reload the page, my list shouldn't disappear. It's okay to just use LocalStorage and not worry about the "backend."

## Share via URL

Clicking a "Share my list" button gives me a URL which allows me to share my list with someone else.

Don't worry about integration with the "backend;" can you do this entirely client-side?

## Undo function

If I accidentally "delete" or "complete" an item, I can click "undo" to undo the last action.
I can keep "undo"ing until there are no more actions left to undo.

## Count number of completed tasks out of total tasks

Add a count of the number of completed tasks here:
https://share.commandbar.com/mSzQjqcY

## Export list to TXT

Add a "Download my list" button that exports the list to a .txt file which is downloaded
