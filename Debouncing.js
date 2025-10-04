let currentClock;

function searchBackend() {
    console.log("request for backend");
}

function debouncedSearchedBackend() {
    //re-start a clock for 30 ms
    clearTimeout(currentClock); // purana timer hatao naya tier put karo
    currentClock = setTimeout(searchBackend, 30); // start a clock
}

// whenever a function gets called start a clock for 30 ms if in 30ms it again call then again start call for 30 ms jab tak ruk nhi jata 30ms tak no returning
debouncedSearchedBackend()
debouncedSearchedBackend()
debouncedSearchedBackend()
debouncedSearchedBackend()
debouncedSearchedBackend()
debouncedSearchedBackend()
debouncedSearchedBackend()
debouncedSearchedBackend()
debouncedSearchedBackend()
debouncedSearchedBackend()
debouncedSearchedBackend();
