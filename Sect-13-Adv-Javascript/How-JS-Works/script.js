/**********************************************************
Udemy: The Complete Web Developer in 2020 -- Andrei Neagoie
Section 13: 164
HOW JAVASCRIPT WORKS
***********************************************************/


/* WHAT IS A PROGRAM 
    --Allocates memory
    --Parse and execute. 
    
    V8 engine reads the JS we write and converts it 
        into machine-readable instructions.
        --The engine consists of 2 things

            --MEMORY HEAP --where the memory gets allocated */

                const a = 1;  // we've allocated memory here. When we assign it
                // JS remembers that a = 1, adds it to the memory heap.
                const a = 1;
                const b = 34;
                const c = 100;
                const d = 13;
                /* brings up the issue of a MEMORY LEAK:
                happens when you have unused memory (not using a = 1, for ex.)
                So, global variables are bad bec if we don't clean up unused memory, 
                we fill up the memory heap, and the browser will not be able to work.
                
            --CALL STACK-- */

                console.log('1') // reads and puts command into call stack
                console.log('2') // removes the top command and executes the second
                console.log('3') // second gets popped off and third executes

                const one = () => {
                    const two = () => {
                        console.log('4');
                    }
                    two();
                }

                // CALL STACK
                    // one() is at the top of the stack
                    // as we run two() THAT function goes on top of the stack
                    // then comes console.log('4')
                        // console.log('4');
                        // two()
                        // one()

                        // after console.log('4') all functions get removed one-by-one
                        // there's the drill; first-in, last out.

                // MULTI-THREADED LANGUAGES can have multiple call stacks.
                // so why use a single-threaded language at all?
                    // simplicity: don't have to deal with complex situations
                    // that arise in multi-threaded environments.
                        // However.We can still witness DEADLOCKS.
                        // We still have to wait for call stack items to execute.
                        // STACK OVERFLOW: when the call stack is overflowing
                            // call stacks do have limited space
                            // example is recursion, a function that calls itself:
                            function fool() {
                                fool();
                            }
                            
                            fool();
                
                // What if the second line in the call stack was a huge task,
                // like looping through an array with millions of items?
                    // A website would freeze until all the loops executed

                    console.log('1') // reads and puts command into call stack
                    console.log('2') // removes the top command and executes the second
                    console.log('3') // second gets popped off and third executes

                    // We'd need to set up a non-blocking scenario, because we
                    // need not wait for time-consuming tasks.

                    // ASYNCHRONOUS execution 
;
                    console.log('1'); 
                    setTimeout(() => {  // triggers the web api, gets popped out of callstack
                        console.log('2'); 
                    }, 2000)
                    console.log('3');

                    // In order for the Js to run, we need both the JS engine and
                    // the JAVASCRIPT RUNTIME ENVIRONMENT, which includes:
                        // the JS Web API
                        // Callback cue
                        // Event Loop

                    // so what is the block of code doing above?

                    console.log('1'); 
                    // CALL STACK -- each of the items in the stack needs to proceed
                    // through the three items below before getting popped off the stack

                        // WEB API

                        // CALLBACK CUE

                        // EVENT LOOP
                            element.addEventListener('click', () => {
                                console.log('faroutski');
                            })

                    // Asynchronous JS happens alot, when you try to talk between machines
                            // querying a database
                            // making network requests
                            // API calls
                        // It's a single-threaded language but it can be non-blocking,
                        // allowing things that take more time to complete after the 
                        // quicker processes have run.





            
            
            
            
            


