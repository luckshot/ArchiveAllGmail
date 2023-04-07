# ArchiveAllGmail
A Google Scripts script to archive everything in the inbox.

Open script.google.com, create a new project, and paste this code in.  Running it will systematically move all mail into the archive.

Caveats:  Gmail's API will only act on 100 threads at a time, and getting threads will only give you an array of 500 threads, no matter how many emails are actually in your inbox.  We get around this by repeating our process archiving 500 at a time until the API reports there are no more threads to pull.
