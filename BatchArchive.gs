function batchArchive() {
  var batchSize = 100; // 100 to keep GmailApp.moveThreadsToArchive() happy.
  var theInboxThreads = GmailApp.getInboxThreads(); // max 500 at a time.
  var numThreads = theInboxThreads.length;
  if(numThreads < batchSize){
    batchSize = numThreads; 
  }
  var notDone = true;
  var iter = 0;
  while(notDone){
    for(j=0;j < theInboxThreads.length; j=j+batchSize){
      GmailApp.moveThreadsToArchive(theInboxThreads.slice(j,j+batchSize));
      Logger.log("Done %d items\n", (j+batchSize+iter));
    }
    iter += j;
    Logger.log("Checking for more threads...\n");
    theInboxThreads = GmailApp.getInboxThreads();
    numthreads = theInboxThreads.length;
    if(numThreads > 0) {
      notDone = true;
      Logger.log("Found more threads.");
    }
    else {
        notDone = false;
        Logger.log("All threads processed.");
    }
  }
}
