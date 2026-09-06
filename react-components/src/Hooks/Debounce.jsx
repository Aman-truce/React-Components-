// Type	What it debounces	How
// 1. Debounced value	A state value (e.g., search term)	useEffect + useState, returns delayed value
// 2. Debounce custom hook	A function/callback	Reusable hook using useRef + useCallback, returns a debounced function
// 3. Direct/inline	A function/callback, but written inline in the component	useRef + setTimeout directly in the event handler, no hook extraction


// function useDebouncedValue(value, delay = 500) {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const timer = setTimeout(() => setDebouncedValue(value), delay);
//     return () => clearTimeout(timer); // cleanup on every keystroke
//   }, [value, delay]);

//   return debouncedValue;
// }

// // Usage
// const [search, setSearch] = useState("");
// const debouncedSearch = useDebouncedValue(search, 300);

// useEffect(() => {
//   if (debouncedSearch) fetchResults(debouncedSearch);
// }, [debouncedSearch]);




// function useDebouncedCallback(callback, delay = 500) {
//   const timer = useRef(null);

//   return useCallback((...args) => {
//     clearTimeout(timer.current);
//     timer.current = setTimeout(() => callback(...args), delay);
//   }, [callback, delay]);
// }

// // Usage
// const handleSearch = useDebouncedCallback((value) => {
//   fetchResults(value);
// }, 300);

// <input onChange={(e) => handleSearch(e.target.value)} />


// function SearchBox() {
//   const timerRef = useRef(null);

//   const handleChange = (e) => {
//     const value = e.target.value;
    
//     clearTimeout(timerRef.current);
//     timerRef.current = setTimeout(() => {
//       fetchResults(value);
//     }, 300);
//   };

//   return <input onChange={handleChange} />;
// }