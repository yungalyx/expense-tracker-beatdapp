### Installation | here's the steps to run this react app!

* . download the zip file of my repo onto local directory (*there should be a button somewhere, maybe to the top right?*)
* . go to command prompt or terminal, navigate to the directory with my repo using cd Desktop, cd expense-tracker-beatdapp-master
  * . note that the repo name might be different for you.
* . type in npm start' in command line
  * . if that doesn't work, try 'npm install' before 'npm start'

'''  
##### How to use (and the technical bits behind it):
  You simply add your transactions with the following details in the prompted form, which will then automatically calculate your balance. 
Negative transactions are considered expenses, and positive, income.

Data can be difficult to pass around in React, so following a tutorial I was able to make use of react's UseContext method on a global scale and provide context(data) through a GlobalContext object and make changes through AppReducer.

![Image](https://github.com/yungalyx/expense-tracker-beatdapp/screenshot.png)
  
  
Cheers,
[Alexander Lin](mailto:alxander.lin@gmail.com?subject=[GitHub]%20Source%20Han%20Sans)
