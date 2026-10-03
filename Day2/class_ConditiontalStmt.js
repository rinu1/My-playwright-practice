let browserName;
function launchBrowser(browserName)
{
    
    if (browserName=='chrome')
    {
        console.log("Chrome browser is ready to launch");
     }
     else if(browserName=='firefox')
     {
        console.log("firefox browser is ready to launch");
     }
     else
        {
        console.log("Edge browser is ready to launch");
     }
}
launchBrowser ('firefox');
/*
function  runTests()
{
    let testType;
    switch(testType)
  //  case: smoke
   /* {
        console.log('This is smoke testcase' );
    }
    switch(sanity)
    {
        console.log("This is sanity testcase");          
    }
    switch(regression)
    {
        console.log("This is regression testcase");          
    }
    default(smoke)
*/