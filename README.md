<h1>
  Retail Automation Toolkit
</h1>
<div>
  <h3>Overview</h3>
  <p>
    I’m sure many, if not all of you, have registered for an account on a retail site, 
    such as Target or Walmart. This project focuses on those functionalities, but 
    in an automated approach. In the botting world, you need to generate hundreds of 
    accounts for a better chance at copping today’s most in demand items. If you were to 
    manually register for accounts, it would take many valuable hours, whereas with a registration bot, 
    all you need to supply is valid proxies, unique account usernames and passwords, letting the 
    registration software do all the heavy lifting for you.
  </p>
</div>

<h2>Current Progress</h2>
<h3>Completed Tasks:</h3>
<ul>
  <li>Added config files for directory route handling.</li>
  <li>Created parsing function that parses username:password:proxy credentials in Target's account registration file.</li>
  <li>File cleanup that moves accounts to specified success/fail file depending on outcome of automation.</li>
  <li>Functionality to send errors and events to pre-determined log files (mainly for debugging).</li>
  <li>Added helper functions: file_editor, name_generator, and type_speed_randomizer. Aid in execution of application.</li>
  <li>Completed overall registration automation for Target site.</li>
  <li>Gathered all page elements needed in order for automation to take place.</li>
  <li>Parse error messages on Target's site and send back to log file for a better explanation as to what failed.</li>
  <li>Decoupled Walmart and Target automation processes from the iterative/looping process that decides when program is complete and what accounts still need to be made.</li>
  <li>Created skeleton of walmart's registration automation.</li>
  <li>Handle walmart errors/events and pass them to their specified text files for debugging purposes.</li>
  <li>Added bestbuy config files and general setup</li>
  <li>Bestbuy automation.</li>
</ul>

<h3>Pending Tasks</h3>
<ul>
  <li>Convert cli-based application to React and Electron.</li>
  <ul>
    <li>Change file formats to JSON.</li>
    <li>Setup barebones electron/ReactJS app.</li>
    <li>Create new parser for JSON formatted files to distribute file data within UI.</li>
  </ul>
</ul>
<div>
  <h2>Setup Instructions/Dependency Requirements:</h2>
  <h3> Please ensure that you have the following dependencies installed on your computer: </h3>
    <ul>
      <li>NPM (Node Package Manager) - Used for dependency management</li>
      <li>Node JS - JavaScript runtime environment that uses Chrome browser's V8 engine (can't run node apps or use terminal commands without it)</li>
      <li>git bash - easy cli shell allowing you to pull projects from github repos.</li>
      <li>Google Chrome browser (not sure if it's needed, but install it if the application's browser isn't popping up).</li>
    </ul>
  <h3>Once you have those dependencies installed, follow the steps below to ensure the application is set up properly:</h3>
    <ol>
      <li>Pull the Retail Automation Toolkit project from this github repo (Master branch).</li>
      <li>Open up your favorite IDE's terminal and ensure you're in the account_gen_project's main directory.</li>
      <li>Type the following command (without quotation marks): "npm i" This will install all required dependencies relative to what 
      information is in the package.json file.</li>
      <li>Now that you have every dependency needed to run the application, type "npm start" in the terminal and that will boot up the application.
      Select a process to run and do note that it will fail because we haven't added any username:password:proxy credentials to any of the 
      accs_to_register.txt files. We'll cover that in the next section.</li>
    </ol>
  <h3>Setting up account registration file (necessary for bot to run):</h3>
    <ol>
      <li>Navigate to the accounts file.</li>
      <li>Select which site you'd like to create accounts for. (Currently target is fully functional and walmart works minus the PX antibot).</li>
      <li>Within that site's folder, click on "accs_to_register" file. This is where you enter credentials in which you want to use for registration. You will need the following separated with a ":" as the delimiter (ex: email:password:proxy).
      <ul>
        <li>Email is the first field you need to set. Stick with a random gmail or hotmail address.</li>
        <li>Password is the second field you need to set. Make sure it's over 8 alphanumeric characters in length. (do not include a ":" in your password).</li>
        <li>A proxy is the final field you need to set. Make sure it's a proxy that can be authenticated (research username:password proxies). Once that is set,
        don't add another ":" after the proxy value.</li>
      </ul></li>
      <li>Now make sure you save the changes and type "npm start" in the terminal and select whatever site you just entered credentials for.</li>
    </ol>

</div>
